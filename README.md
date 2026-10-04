# Semua Berhak Bisa

Website resmi komunitas **#SemuaBerhakBisa** — komunitas belajar teknologi informasi gratis untuk semua kalangan. Website ini berisi informasi program akademi (Pemrograman, Desain Grafis, Jaringan Komputer, dan Microsoft Office), profil mentor, wilayah belajar offline, alur pendaftaran, serta blog & artikel edukasi.

## Fitur

- **Beranda** — hero, bidang akademi, alasan belajar bersama, statistik komunitas, metode belajar, testimoni, dan CTA ketentuan.
- **Tentang Komunitas** — tujuan, visi & misi, profil mentor, zona wilayah offline, dokumentasi kegiatan, dan FAQ.
- **Bidang Layanan** — penjelasan bidang akademi dan ajakan kerja sama.
- **Blog & Artikel Edukasi** — halaman `/blog` berisi artikel seputar IT dan detail artikel di `/blog/:slug`.
- **Pendaftaran online** — formulir pendaftaran dengan pilihan bidang, asal kota, dan kolom feedback/saran (opsional).
- **Halaman Admin** — kelola pendaftar (status, feedback), ubah status, hapus, export CSV, statistik per bidang, dan log login.
- **Ketentuan** — alur pendaftaran, jadwal belajar, dan aturan.
- **Tema terang (soft) & gelap** — toggle tema; mode terang memakai warna hangat yang nyaman di mata (tersimpan di `localStorage`).
- **Responsif** — semua bagian dirapikan agar optimal di mobile, tablet, dan desktop: statistik komunitas tampil 2×2 di mobile dan 1 baris di desktop, slider testimoni menampilkan 1 kartu per layar di mobile dengan tinggi kartu seragam, serta dokumentasi kegiatan berbentuk grid 1/2/3 kolom.

## Tech Stack

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Router 7](https://reactrouter.com/)
- [Framer Motion](https://motion.dev/) dan [react-slick](https://react-slick.neostack.com/)
- [Font Awesome 7](https://fontawesome.com/) (via CDN)

## Menjalankan Secara Lokal

Prasyarat: Node.js 20.19+ (atau 22.12+) dan npm.

```bash
npm install
```

Jalankan backend (Express API) di satu terminal:

```bash
npm run server
```

Jalankan frontend (Vite) di terminal lain:

```bash
npm run dev
```

Buka http://localhost:5173. Formulir pendaftaran terhubung ke API lewat proxy Vite (http://localhost:3001).

Build produksi:

```bash
npm run build
npm run preview
```

## Konfigurasi Link

Semua link komunitas (Instagram, TikTok, WhatsApp, dan formulir pendaftaran) terpusat di [`src/lib/links.js`](src/lib/links.js). Cukup edit satu file untuk mengganti seluruh link di website.

## Backend & Database

Backend memakai database **Turso/libSQL** (fallback otomatis ke SQLite lokal bila variabel Turso kosong). Ada dua cara menjalankan backend:

### 1. Express (development lokal)

Jalankan `npm run server` (port 3001). Endpoint:

- `GET /api/health` — cek status server.
- `POST /api/pendaftaran` — simpan data pendaftaran. Body: `{ nama, whatsapp, bidang, asal?, feedback? }`.
- `GET /api/pendaftaran` — daftar pendaftar (butuh header `x-admin-password`).
- `PATCH /api/pendaftaran/:id` — ubah status pendaftar (`baru` | `diterima` | `ditolak`).
- `DELETE /api/pendaftaran/:id` — hapus data pendaftar.
- `POST /api/admin-login` — login admin (mencatat audit log).
- `GET /api/admin-login-log` — log aktivitas login admin (butuh `x-admin-password`).

### 2. Vercel Serverless Functions (production)

Folder `api/` berisi fungsi serverless yang langsung bisa di-deploy ke Vercel bersama frontend:

- `api/health.js` → `GET /api/health`
- `api/pendaftaran.js` → `GET` & `POST /api/pendaftaran`
- `api/pendaftaran/[id].js` → `PATCH` & `DELETE /api/pendaftaran/:id`
- `api/admin-login.js` → `POST /api/admin-login`
- `api/admin-login-log.js` → `GET /api/admin-login-log`

### Konfigurasi Environment

- **Development lokal:** salin [`server/.env.example`](server/.env.example) menjadi `server/.env`.
- **Vercel (production):** tambahkan di dashboard Vercel → Settings → Environment Variables.

Variabel yang perlu diisi:

- `TURSO_DATABASE_URL` — URL database Turso (contoh: `libsql://nama-db.turso.io`).
- `TURSO_AUTH_TOKEN` — token autentikasi Turso.
- `ADMIN_PASSWORD_SALT` & `ADMIN_PASSWORD_HASH` — hash + salt (scrypt) untuk login admin `/admin`. Password asli tidak disimpan.

Jika variabel Turso kosong (khusus development), backend otomatis memakai SQLite lokal di `data/pendaftaran.db`.

### Halaman Admin

Buka `/admin` untuk mengelola pendaftar. Halaman ini dilindungi password (hash + salt di environment). Di dalamnya tersedia:

- Daftar pendaftar lengkap (nama, WhatsApp, bidang, asal, feedback, status, tanggal).
- Ubah status (Baru / Diterima / Ditolak) dan hapus data.
- Statistik jumlah pendaftar per bidang.
- Export data pendaftar ke CSV.
- Log aktivitas login (berhasil/gagal + IP + waktu).

## Keamanan

- **Proteksi password admin** — halaman `/admin` dan endpoint daftar pendaftar dilindungi password yang disimpan sebagai hash + salt (scrypt), bukan plaintext.
- **Rate limiting** — mencegah brute-force dan spam: login dibatasi 5x/15 menit, kirim pendaftaran 10x/jam, dan limit global per IP.
- **Security headers** — via `helmet` (Express) dan `vercel.json` (Vercel): `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- **CORS dibatasi** — hanya origin frontend yang diizinkan (`CORS_ORIGIN`).
- **Validasi & batas input** — panjang field dibatasi, format nomor WhatsApp divalidasi, body dibatasi 10 KB.
- **SQL injection aman** — semua query memakai parameterized query (placeholder `?`).
- **Content Security Policy (CSP)** — meta tag di `index.html` membatasi sumber script, style, font, dan koneksi untuk mencegah XSS.
- **Audit log login admin** — setiap percobaan login dicatat (berhasil/gagal, IP, waktu) ke tabel `login_log`.

### Deploy ke Vercel

1. Import repository ini di Vercel.
2. Framework preset otomatis terdeteksi sebagai **Vite**.
3. Tambahkan `TURSO_DATABASE_URL` dan `TURSO_AUTH_TOKEN` di Environment Variables.
4. Deploy — frontend dan API berada di domain Vercel yang sama, sehingga form memanggil `/api/pendaftaran` tanpa perlu `VITE_API_URL`.

Jika backend di-host di domain terpisah, set `VITE_API_URL` di frontend `.env` ke URL backend tersebut.

## Struktur Folder

```
src/
├── components/
│   ├── about/      # Bagian halaman Tentang (Tujuan, VisiMisi, Mentor, Wilayah, Galeri, FAQ)
│   ├── common/     # Header, Footer, Preloader, BackToTop, WhatsAppFloat, Reveal (animasi)
│   ├── home/       # Bagian halaman Beranda (Hero, KenapaKami, Statistik, MetodeBelajar, Testimoni, Konsultasi)
│   └── services/   # Bagian halaman Layanan (Bidang, KerjaSama)
├── layouts/        # Layout utama aplikasi (MainLayout)
├── lib/            # Util frontend (link terpusat & hooks)
├── pages/          # Halaman (Home, Tentang, Layanan, Ketentuan, Daftar, Blog, Artikel, Admin, NotFound)
├── routes/         # Konfigurasi route
├── data/           # Konten blog & artikel
└── assets/         # Gambar (logo, mentor, blog, ikon), font, dan styles

api/                # Vercel Serverless Functions (production)
├── health.js
├── pendaftaran.js
├── pendaftaran/
│   └── [id].js
├── admin-login.js
└── admin-login-log.js

lib/                # Logika backend bersama (database, validasi, auth, rate limit, log)
├── db.js
├── pendaftaran.js
├── auth.js
├── rateLimit.js
└── log.js

server/             # Server Express untuk development lokal
├── index.js
├── .env
└── .env.example
```

## Changelog

### 2026-10-04

- **Perbaikan tampilan responsif** — slider testimoni "Kata Mereka" kini menampilkan 1 kartu per layar di mobile (sebelumnya 3 kartu menyempit karena breakpoint `react-slick` tidak aktif saat halaman pertama dibuka di perangkat mobile), tinggi kartu seragam, dan dots navigasi dirapikan.
- **Statistik komunitas** — diubah menjadi grid 2×2 di mobile dan 1 baris 4 kolom di desktop dengan garis pemisah antar kolom serta label yang lebih terbaca.
- **Dokumentasi kegiatan** — diubah menjadi grid responsif 1/2/3 kolom dengan tinggi kartu seragam.

### 2026-10-03

- Siap deploy ke Vercel: preloader lebih halus, typewriter di judul hero, dan route admin login disamakan dengan fungsi serverless.
- Tambah blog & artikel edukasi, kolom feedback pada formulir pendaftaran, export CSV, statistik bidang, serta audit log login admin.
- Perkuat keamanan: rate limiting, security headers, hash + salt untuk password admin, CSP, dan proteksi halaman `/admin`.
- Rapikan tema soft (terang/gelap), carousel, dan seluruh section.


