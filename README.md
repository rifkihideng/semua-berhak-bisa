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
npm run dev
```

Buka http://localhost:5173.

Build produksi:

```bash
npm run build
npm run preview
```

## Konfigurasi Link

Semua link komunitas (Instagram, TikTok, WhatsApp, dan formulir pendaftaran) terpusat di [`src/lib/links.js`](src/lib/links.js). Cukup edit satu file untuk mengganti seluruh link di website.

## Struktur Folder

```
src/
├── components/
│   ├── about/      # Bagian halaman Tentang (Tujuan, VisiMisi, Mentor, Wilayah, Galeri, FAQ)
│   ├── common/     # Header & Footer
│   ├── home/       # Bagian halaman Beranda (Hero, KenapaKami, Statistik, MetodeBelajar, Testimoni, Konsultasi)
│   └── services/   # Bagian halaman Layanan (Bidang, KerjaSama)
├── lib/            # Konfigurasi link terpusat
├── pages/          # Halaman (Home, Tentang, Layanan, Ketentuan, NotFound)
├── routes/         # Konfigurasi route
└── assets/         # Gambar, font, dan styles
```

