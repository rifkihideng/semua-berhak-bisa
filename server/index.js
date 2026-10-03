import path from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";
import express from "express";
import cors from "cors";
import { getDb } from "../lib/db.js";
import { validatePendaftaran } from "../lib/pendaftaran.js";
import { isPasswordValid } from "../lib/auth.js";

// Muat file .env dari folder server/
const __dirname = path.dirname(fileURLToPath(import.meta.url));
loadEnv({ path: path.join(__dirname, ".env") });

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/pendaftaran", async (req, res) => {
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
});

app.post("/api/admin/login", (req, res) => {
  const { password } = req.body || {};
  if (isPasswordValid(password)) {
    return res.json({ ok: true });
  }
  res.status(401).json({ error: "Password salah." });
});

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
