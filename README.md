# Semua Berhak Bisa

Website resmi komunitas **#SemuaBerhakBisa** — komunitas belajar teknologi informasi gratis untuk semua kalangan. Website ini berisi informasi program akademi (Pemrograman, Desain Grafis, Jaringan Komputer, dan Microsoft Office), profil mentor, wilayah belajar offline, serta alur pendaftaran.

## Fitur

- **Beranda** — hero, bidang akademi, alasan belajar bersama, statistik komunitas, metode belajar, testimoni, dan CTA ketentuan.
- **Tentang Komunitas** — tujuan, visi & misi, profil mentor, zona wilayah offline, dokumentasi kegiatan, dan FAQ.
- **Bidang Layanan** — penjelasan bidang akademi dan ajakan kerja sama.
- **Ketentuan** — alur pendaftaran, jadwal belajar, dan aturan.
- **Dark mode** — toggle tema terang/gelap (tersimpan di `localStorage`).
- **Responsif** — tampilan optimal untuk mobile dan desktop.

## Tech Stack

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Router 7](https://reactrouter.com/)
- [Framer Motion](https://motion.dev/) dan [react-slick](https://react-slick.neostack.com/)
- [Font Awesome 7](https://fontawesome.com/) (via CDN)

## Menjalankan Secara Lokal

Prasyarat: Node.js 18+ dan npm.

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
- `POST /api/pendaftaran` — simpan data pendaftaran. Body: `{ nama, whatsapp, bidang, asal? }`.
- `GET /api/pendaftaran` — daftar pendaftar.

### 2. Vercel Serverless Functions (production)

Folder `api/` berisi fungsi serverless yang langsung bisa di-deploy ke Vercel bersama frontend:

- `api/health.js` → `GET /api/health`
- `api/pendaftaran.js` → `GET` & `POST /api/pendaftaran`

### Konfigurasi Environment

- **Development lokal:** salin [`server/.env.example`](server/.env.example) menjadi `server/.env`.
- **Vercel (production):** tambahkan di dashboard Vercel → Settings → Environment Variables.

Variabel yang perlu diisi:

- `TURSO_DATABASE_URL` — URL database Turso (contoh: `libsql://nama-db.turso.io`).
- `TURSO_AUTH_TOKEN` — token autentikasi Turso.

Jika keduanya kosong (khusus development), backend otomatis memakai SQLite lokal di `data/pendaftaran.db`.

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
│   ├── common/     # Header & Footer
│   ├── home/       # Bagian halaman Beranda (Hero, KenapaKami, Statistik, MetodeBelajar, Testimoni, Konsultasi)
│   └── services/   # Bagian halaman Layanan (Bidang, KerjaSama)
├── lib/            # Util frontend (link terpusat & hooks)
├── pages/          # Halaman (Home, Tentang, Layanan, Ketentuan, Daftar, NotFound)
├── routes/         # Konfigurasi route
└── assets/         # Gambar, font, dan styles

api/                # Vercel Serverless Functions (production)
├── health.js
└── pendaftaran.js

lib/                # Logika backend bersama (database & validasi)
├── db.js
└── pendaftaran.js

server/             # Server Express untuk development lokal
├── index.js
├── .env
└── .env.example
```

