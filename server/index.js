import path from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { getDb } from "../lib/db.js";
import { validatePendaftaran } from "../lib/pendaftaran.js";
import { isPasswordValid } from "../lib/auth.js";
import { rateLimit } from "../lib/rateLimit.js";

// Muat file .env dari folder server/
const __dirname = path.dirname(fileURLToPath(import.meta.url));
loadEnv({ path: path.join(__dirname, ".env") });

const app = express();
app.set("trust proxy", 1);
app.disable("x-powered-by");

// Security headers
app.use(helmet());

// Batasi CORS ke origin frontend saja (pisahkan beberapa origin dengan koma)
app.use(
  cors({
    origin: (process.env.CORS_ORIGIN || "http://localhost:5173")
      .split(",")
      .map((s) => s.trim()),
  }),
);

// Batasi ukuran body
app.use(express.json({ limit: "10kb" }));

function limiter({ max, windowMs, scope }) {
  return (req, res, next) => {
    const ip = req.ip || req.socket.remoteAddress || "unknown";
    const key = `${scope}:${ip}`;
    if (!rateLimit(key, { max, windowMs })) {
      return res
        .status(429)
        .json({ error: "Terlalu banyak permintaan. Coba lagi nanti." });
    }
    next();
  };
}

// Rate limit global
app.use(limiter({ scope: "global", max: 300, windowMs: 15 * 60 * 1000 }));

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.post(
  "/api/pendaftaran",
  limiter({ scope: "daftar", max: 10, windowMs: 60 * 60 * 1000 }),
  async (req, res) => {
    try {
      const { data, error } = validatePendaftaran(req.body);
      if (error) {
        return res.status(400).json({ error });
      }

      const db = await getDb();
      const result = await db.execute({
        sql: "INSERT INTO pendaftar (nama, whatsapp, bidang, asal) VALUES (?, ?, ?, ?)",
        args: [data.nama, data.whatsapp, data.bidang, data.asal],
      });

      res.status(201).json({
        ok: true,
        id: result.lastInsertRowid ? String(result.lastInsertRowid) : null,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Terjadi kesalahan pada server." });
    }
  },
);

app.post(
  "/api/admin/login",
  limiter({ scope: "login", max: 5, windowMs: 15 * 60 * 1000 }),
  (req, res) => {
    const { password } = req.body || {};
    if (isPasswordValid(password)) {
      return res.json({ ok: true });
    }
    res.status(401).json({ error: "Password salah." });
  },
);

app.get("/api/pendaftaran", async (req, res) => {
  if (!isPasswordValid(req.get("x-admin-password"))) {
    return res.status(401).json({ error: "Tidak diizinkan." });
  }

  try {
    const db = await getDb();
    const rs = await db.execute("SELECT * FROM pendaftar ORDER BY id DESC");
    res.json({ data: rs.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API berjalan di http://localhost:${PORT}`);
});
