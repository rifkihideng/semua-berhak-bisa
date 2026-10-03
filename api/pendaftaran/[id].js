import { getDb } from "../../lib/db.js";
import { isPasswordValid } from "../../lib/auth.js";
import { validateStatus } from "../../lib/pendaftaran.js";

// Vercel: /api/pendaftaran/[id] — ubah status (PATCH) atau hapus (DELETE)
export default async function handler(req, res) {
  if (!isPasswordValid(req.headers["x-admin-password"])) {
    return send(res, 401, { error: "Tidak diizinkan." });
  }

  const id = Number(req.query.id);
  if (!Number.isInteger(id) || id <= 0) {
    return send(res, 400, { error: "ID tidak valid." });
  }

  const db = await getDb();

  if (req.method === "PATCH") {
    const { error, status } = validateStatus(parseBody(req).status);
    if (error) {
      return send(res, 400, { error });
    }
    const result = await db.execute({
      sql: "UPDATE pendaftar SET status = ? WHERE id = ?",
      args: [status, id],
    });
    if (result.rowsAffected === 0) {
      return send(res, 404, { error: "Data tidak ditemukan." });
    }
    return send(res, 200, { ok: true });
  }

  if (req.method === "DELETE") {
    const result = await db.execute({
      sql: "DELETE FROM pendaftar WHERE id = ?",
      args: [id],
    });
    if (result.rowsAffected === 0) {
      return send(res, 404, { error: "Data tidak ditemukan." });
    }
    return send(res, 200, { ok: true });
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
