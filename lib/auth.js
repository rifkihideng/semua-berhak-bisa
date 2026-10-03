// Proteksi sederhana berbasis shared secret (ADMIN_PASSWORD)
// Password disimpan di environment variable (server/.env atau Vercel Environment Variables).

function timingSafeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export function isPasswordValid(password) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false; // proteksi nonaktif -> tolak semua
  return timingSafeEqual(password, expected);
}
