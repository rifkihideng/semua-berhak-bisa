import fs from "node:fs";
import path from "node:path";
import { createClient } from "@libsql/client";

// Turso (Hrana) tidak mengizinkan banyak statement dalam satu execute,
// jadi tiap statement dijalankan terpisah.
const SCHEMA = [
  `
  CREATE TABLE IF NOT EXISTS pendaftar (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    bidang TEXT NOT NULL,
    asal TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  )
  `,
  `
  CREATE TABLE IF NOT EXISTS login_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    success INTEGER NOT NULL,
    ip TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  )
  `,
];

// Buat client database: Turso jika TURSO_DATABASE_URL diset, fallback SQLite lokal
export function createDb() {
  const url =
    process.env.TURSO_DATABASE_URL ||
    `file:${path.resolve("data", "pendaftaran.db")}`;

  if (!process.env.TURSO_DATABASE_URL) {
    fs.mkdirSync(path.resolve("data"), { recursive: true });
  }

  const config = { url };
  if (process.env.TURSO_AUTH_TOKEN) {
    config.authToken = process.env.TURSO_AUTH_TOKEN;
  }

  return createClient(config);
}

// Bungkus execute/batch dengan retry supaya tahan terhadap koneksi
// naik-turun (mis. timeout ke Turso dari region yang jauh).
function wrapWithRetry(client) {
  const attempts = 3;

  async function run(fn, args) {
    let lastErr;
    for (let attempt = 1; attempt <= attempts; attempt++) {
      try {
        return await fn(...args);
      } catch (err) {
        lastErr = err;
        const isTimeout =
          /connect timeout|connecttimeout|etimedout|und_err_connect_timeout|fetch failed/i.test(
            String(err?.message || "") + String(err?.cause?.code || ""),
          );
        if (!isTimeout || attempt === attempts) throw err;
        await new Promise((resolve) => setTimeout(resolve, attempt * 400));
      }
    }
    throw lastErr;
  }

  return {
    ...client,
    execute: (...args) => run(client.execute.bind(client), args),
    batch: (...args) => run(client.batch.bind(client), args),
  };
}

let dbPromise;

// Dapatkan client database (dipakai bersama oleh Express & Vercel functions)
export function getDb() {
  if (!dbPromise) {
    dbPromise = (async () => {
      const db = wrapWithRetry(createDb());
      for (const stmt of SCHEMA) {
        await db.execute(stmt);
      }
      // Migrasi: tambah kolom status bila tabel lama belum memilikinya
      try {
        await db.execute(
          "ALTER TABLE pendaftar ADD COLUMN status TEXT NOT NULL DEFAULT 'baru'",
        );
      } catch {
        // Kolom sudah ada — aman diabaikan
      }
      // Migrasi: tambah kolom feedback (opsional, dari formulir pendaftaran)
      try {
        await db.execute("ALTER TABLE pendaftar ADD COLUMN feedback TEXT");
      } catch {
        // Kolom sudah ada — aman diabaikan
      }
      return db;
    })();
    // Jangan biarkan promise gagal tersimpan permanen: reset agar
    // panggilan berikutnya mencoba koneksi ulang (mis. Turso timeout sementara).
    dbPromise.catch(() => {
      dbPromise = undefined;
    });
  }
  return dbPromise;
}
