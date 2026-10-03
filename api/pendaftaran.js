import { getDb } from "../lib/db.js";
import { validatePendaftaran } from "../lib/pendaftaran.js";
import { isPasswordValid } from "../lib/auth.js";
import { rateLimit } from "../lib/rateLimit.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (!isPasswordValid(req.headers["x-admin-password"])) {
      return send(res, 401, { error: "Tidak diizinkan." });
    }
    const db = await getDb();
    const rs = await db.execute("SELECT * FROM pendaftar ORDER BY id DESC");
    return send(res, 200, { data: rs.rows });
  }

  if (req.method === "POST") {
    const key = `daftar:${req.headers["x-forwarded-for"] || "unknown"}`;
    if (!rateLimit(key, { max: 10, windowMs: 60 * 60 * 1000 })) {
      return send(res, 429, { error: "Terlalu banyak permintaan. Coba lagi nanti." });
    }

    const db = await getDb();
    const { data, error } = validatePendaftaran(parseBody(req));
    if (error) {
      return send(res, 400, { error });
    }

    const result = await db.execute({
      sql: "INSERT INTO pendaftar (nama, whatsapp, bidang, asal) VALUES (?, ?, ?, ?)",
      args: [data.nama, data.whatsapp, data.bidang, data.asal],
    });

    return send(res, 201, {
      ok: true,
      id: result.lastInsertRowid ? String(result.lastInsertRowid) : null,
    });
  }

  return send(res, 405, { error: "Method tidak diizinkan." });
}

function parseBody(req) {
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body || "{}");
    } catch {
      return {};
    }
  }
  return req.body || {};
}

function send(res, status, obj) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(obj));
}
