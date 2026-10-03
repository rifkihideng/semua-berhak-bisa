import { getDb } from "./db.js";

// Catat percobaan login admin (berhasil/gagal) untuk audit
export async function logLogin({ success, ip }) {
  try {
    const db = await getDb();
    await db.execute({
      sql: "INSERT INTO login_log (success, ip) VALUES (?, ?)",
      args: [success ? 1 : 0, ip || null],
    });
  } catch (err) {
    console.error("Gagal mencatat log login:", err);
  }
}
