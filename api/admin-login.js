import { isPasswordValid } from "../lib/auth.js";
import { rateLimit } from "../lib/rateLimit.js";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return send(res, 405, { error: "Method tidak diizinkan." });
  }

  const key = `login:${req.headers["x-forwarded-for"] || "unknown"}`;
  if (!rateLimit(key, { max: 5, windowMs: 15 * 60 * 1000 })) {
    return send(res, 429, { error: "Terlalu banyak percobaan. Coba lagi nanti." });
  }

  const body = parseBody(req);
  if (isPasswordValid(body.password)) {
    return send(res, 200, { ok: true });
  }

  send(res, 401, { error: "Password salah." });
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
