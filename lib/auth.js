// Proteksi password admin berbasis hash + salt (scrypt).
// Password asli TIDAK disimpan; yang disimpan hanya hash dan salt di environment variable
// (server/.env atau Vercel Environment Variables).

import { scryptSync, timingSafeEqual } from "node:crypto";

function hashPassword(password, saltHex) {
  const salt = Buffer.from(saltHex, "hex");
  return scryptSync(password, salt, 64).toString("hex");
}

function timingSafeEqualString(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export function isPasswordValid(password) {
  if (typeof password !== "string") return false;

  const saltHex = process.env.ADMIN_PASSWORD_SALT;
  const expectedHash = process.env.ADMIN_PASSWORD_HASH;

  // Mode utama: verifikasi hash + salt
  if (saltHex && expectedHash) {
    const inputHash = Buffer.from(hashPassword(password, saltHex), "hex");
    const expected = Buffer.from(expectedHash, "hex");
    return (
      inputHash.length === expected.length &&
      timingSafeEqual(inputHash, expected)
    );
  }

  // Fallback kompatibilitas: bandingkan plaintext ADMIN_PASSWORD (jika masih dipakai)
  const plain = process.env.ADMIN_PASSWORD;
  if (!plain) return false;
  return timingSafeEqualString(password, plain);
}
