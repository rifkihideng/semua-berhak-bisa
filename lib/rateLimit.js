// Rate limiter sederhana berbasis memori (sliding window).
// Catatan: pada serverless (Vercel), Map ini hanya berlaku per-instance,
// sehingga bersifat "best effort". Untuk proteksi penuh gunakan juga proteksi
// platform (misalnya WAF/DDoS protection bawaan Vercel).

const buckets = new Map();

export function rateLimit(key, { max, windowMs }) {
  const now = Date.now();
  let bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    bucket = { count: 0, resetAt: now + windowMs };
    buckets.set(key, bucket);
  }

  bucket.count += 1;
  return bucket.count <= max;
}
