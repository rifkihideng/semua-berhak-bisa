import { getDb } from "../lib/db.js";
import { isPasswordValid } from "../lib/auth.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return send(res, 405, { error: "Method tidak diizinkan." });
  }

  if (!isPasswordValid(req.headers["x-admin-password"])) {
    return send(res, 401, { error: "Tidak diizinkan." });
  }

  const db = await getDb();
  const rs = await db.execute(
    "SELECT * FROM login_log ORDER BY id DESC LIMIT 100",
  );

  send(res, 200, { data: rs.rows });
}

function send(res, status, obj) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(obj));
}
