import { isPasswordValid } from "./auth.js";
import { rateLimit, isRateLimited } from "./rateLimit.js";

// Guard untuk endpoint admin (serverless Vercel) yang memverifikasi
// header x-admin-password. Membatasi brute-force dengan menghitung
// hanya percobaan yang GAGAL — request yang sah tidak dihitung,
// sehingga admin tidak terkunci saat bekerja normal.
export function adminGuard(req, { max = 10, windowMs = 15 * 60 * 1000 } = {}) {
  const key = `admin:${req.headers["x-forwarded-for"] || "unknown"}`;

  if (isRateLimited(key, { max, windowMs })) {
    return {
      status: 429,
      error: "Terlalu banyak percobaan. Coba lagi nanti.",
    };
  }

  if (!isPasswordValid(req.headers["x-admin-password"])) {
    rateLimit(key, { max, windowMs });
    return { status: 401, error: "Tidak diizinkan." };
  }

  return null;
}
