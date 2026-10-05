import { getDb } from "../lib/db.js";
import { adminGuard } from "../lib/adminGuard.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return send(res, 405, { error: "Method tidak diizinkan." });
  }

  const denied = adminGuard(req);
  if (denied) {
    return send(res, denied.status, { error: denied.error });
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
