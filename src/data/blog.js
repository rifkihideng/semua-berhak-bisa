import pemrograman from "../assets/img/blog/pemrograman.svg";
import design from "../assets/img/blog/design.svg";
import jaringan from "../assets/img/blog/jaringan.svg";
import office from "../assets/img/blog/office.svg";
import tips from "../assets/img/blog/tips.svg";

export const ARTICLES = [
  {
    slug: "belajar-pemrograman-dari-nol",
    title: "Belajar Pemrograman dari Nol: Mulai dari Mana?",
    category: "Pemrograman",
    tanggal: "2026-10-01",
    readTime: "6 menit",
    image: pemrograman,
    excerpt:
      "Kebanyakan orang gagal belajar coding bukan karena susah, tapi karena mulai tanpa arah. Ini peta jalan singkat yang bisa langsung kamu ikuti.",
    body: [
      {
        heading: "Kenali Dulu, Jangan Langsung Asal Ketik",
        paragraphs: [
          "Banyak pemula membuka tutorial YouTube, menyalin kode, lalu bingung kenapa tidak paham apa-apa. Sebelum menulis baris pertama, luangkan waktu memahami konsep dasarnya: program adalah kumpulan instruksi yang dijalankan komputer baris demi baris. Kalau konsep ini nempel, semua bahasa pemrograman terasa lebih mudah.",
          "Tentukan juga tujuanmu: mau bikin website, aplikasi Android, atau mengolah data? Jawaban ini menentukan bahasa pertama yang harus kamu pilih.",
        ],
      },
      {
        heading: "Pilih Satu Bahasa dan Bertahan di Sana",
        paragraphs: [
          "Godaan terbesar pemula adalah pindah-pindah bahasa. Bulan ini Python, bulan depan JavaScript, lalu PHP. Akibatnya tidak ada yang benar-benar dikuasai. Pilih satu sesuai tujuan:",
        ],
        list: [
          "Mau bikin website → HTML, CSS, JavaScript.",
          "Mau data/otomasi → Python.",
          "Mau aplikasi mobile → Dart (Flutter) atau Kotlin.",
          "Mau backend → PHP, Go, atau Node.js.",
        ],
      },
      {
        heading: "Bangun Kebiasaan 30 Menit Sehari",
        paragraphs: [
          "Konsistensi mengalahkan intensitas. Belajar 30 menit setiap hari selama sebulan jauh lebih efektif daripada belajar 5 jam di akhir pekan lalu libur seminggu. Pasang alarm di jam yang sama, matikan notifikasi, dan kerjakan satu latihan kecil per sesi.",
        ],
      },
      {
        heading: "Error Itu Teman, Bukan Musuh",
        paragraphs: [
          "Saat kode merah bermunculan, jangan panik. Itu cara komputer memberi tahu apa yang salah. Biasakan membaca baris paling atas pesan error, cari di Google, dan pahami penyebabnya. Semakin sering kamu menyelesaikan error, semakin cepat kamu naik level.",
        ],
      },
      {
        heading: "Cari Mentor dan Komunitas",
        paragraphs: [
          "Belajar sendirian membuatmu mudah stuck dan akhirnya berhenti. Di #SemuaBerhakBisa, kamu bisa belajar pemrograman langsung bersama mentor setiap Senin–Kamis pukul 20.00 WIB. Ada teman diskusi dan jadwal teratur yang bikin kamu susah menyerah.",
        ],
      },
    ],
  },
  {
    slug: "kenalan-dengan-desain-grafis",
    title: "Desain Grafis untuk Pemula: Jangan Mulai dari Software",
    category: "Desain Grafis",
    tanggal: "2026-10-02",
    readTime: "5 menit",
    image: design,
    excerpt:
      "Software hanyalah alat. Desainer hebat menguasai prinsip dulu, baru alat. Pelajari fondasinya biar karyamu tidak asal-asalan.",
    body: [
      {
        heading: "Prinsip Sebelum Software",
        paragraphs: [
          "Kesalahan paling umum pemula: langsung belajar Photoshop tanpa tahu apa yang membuat sebuah desain enak dilihat. Padahal yang membedakan desain profesional dan amatir adalah pemahaman prinsip dasar, bukan fitur software.",
        ],
      },
      {
        heading: "Tiga Pilar yang Wajib Dipahami",
        paragraphs: [
          "Fokuslah ke tiga hal ini dulu, sisanya menyusul:",
        ],
        list: [
          "Warna — pelajari roda warna, kontras, dan kombinasi yang harmonis.",
          "Tipografi — pilih font yang nyaman dibaca dan atur hierarki teks.",
          "Komposisi — atur tata letak agar mata audiens mengalir ke arah yang kamu mau.",
        ],
      },
      {
        heading: "Latihan Paling Efektif: Tiru, Lalu Modifikasi",
        paragraphs: [
          "Ambil satu desain yang kamu suka, lalu coba buat ulang dari nol. Proses ini melatih kepekaanmu terhadap jarak, ukuran, dan warna. Setelah bisa meniru, modifikasi dengan gaya sendiri. Jangan lupa beri kredit jika karyamu dipublikasikan.",
        ],
      },
      {
        heading: "Bangun Portofolio Sejak Hari Pertama",
        paragraphs: [
          "Kumpulkan semua latihanmu — poster, logo, konten media sosial — ke dalam satu folder atau akun portofolio. Tiga sampai lima karya terbaik sudah cukup untuk memulai. Di kelas desain grafis #SemuaBerhakBisa, kamu akan dibimbing membuat karya nyata yang layak masuk portofolio.",
        ],
      },
    ],
  },
  {
    slug: "dasar-jaringan-komputer",
    title: "Mengenal Jaringan Komputer: Dari Kabel sampai Internet",
    category: "Jaringan Komputer",
    tanggal: "2026-10-03",
    readTime: "7 menit",
    image: jaringan,
    excerpt:
      "Pernah bertanya-tanya bagaimana pesan WhatsApp bisa sampai dalam hitungan detik? Jawabannya ada di jaringan komputer.",
    body: [
      {
        heading: "Jaringan Itu Seperti Jalan Raya",
        paragraphs: [
          "Bayangkan data sebagai kendaraan dan jaringan sebagai jalan raya. Switch adalah persimpangan dalam kota, router adalah pintu keluar ke jalan tol antar kota, dan IP Address adalah alamat tujuan. Dengan analogi ini, konsep jaringan yang rumit jadi lebih masuk akal.",
        ],
      },
      {
        heading: "IP Address dan Subnetting",
        paragraphs: [
          "Setiap perangkat punya alamat unik bernama IP Address, misalnya 192.168.1.10. Subnetting adalah cara membagi jaringan besar menjadi beberapa bagian kecil agar lebih rapi dan aman. Ini materi wajib bagi siapa pun yang serius di dunia jaringan.",
        ],
      },
      {
        heading: "Perangkat yang Sering Kamu Temui",
        paragraphs: ["Di lapangan, kamu akan sering berurusan dengan:"],
        list: [
          "Switch — menghubungkan perangkat dalam satu jaringan lokal.",
          "Router — menghubungkan jaringan lokal ke internet.",
          "Access Point — memancarkan sinyal WiFi.",
          "Kabel UTP & fiber optic — media penghantar data.",
        ],
      },
      {
        heading: "Belajar Tanpa Perangkat Mahal",
        paragraphs: [
          "Kabar baiknya, kamu tidak perlu membeli router atau switch untuk belajar. Cisco Packet Tracer menyediakan simulasi lengkap: kamu bisa merancang jaringan virtual, memasang kabel, dan menguji konfigurasi secara gratis. Kelas jaringan komputer di #SemuaBerhakBisa memakai pendekatan ini supaya kamu langsung praktik, bukan cuma teori.",
        ],
      },
    ],
  },
  {
    slug: "menguasai-microsoft-office",
    title: "Microsoft Office Bukan Sekadar Ngetik: Skill yang Paling Dicari",
    category: "Microsoft Office",
    tanggal: "2026-10-04",
    readTime: "5 menit",
    image: office,
    excerpt:
      "Hampir semua lowongan kerja mencantumkan 'menguasai Microsoft Office'. Tapi apa maksudnya? Ini penjelasannya.",
    body: [
      {
        heading: "Mengapa Office Selalu Dicari?",
        paragraphs: [
          "Dari admin kantor sampai manajer, hampir semua pekerjaan menyentuh dokumen, data, atau presentasi. Masalahnya, banyak orang mengaku 'bisa Office' padahal baru sampai level mengetik. Yang dibutuhkan dunia kerja jauh lebih dalam dari itu.",
        ],
      },
      {
        heading: "Word: Dokumen yang Profesional",
        paragraphs: [
          "Level mengetik saja tidak cukup. Kamu perlu menguasai heading dan styles, daftar isi otomatis, header/footer, nomor halaman, serta sitasi otomatis dengan Mendeley. Dengan ini, skripsi, laporan, dan surat resmi bisa dibuat rapi dalam waktu singkat.",
        ],
      },
      {
        heading: "Excel: Senjata Rahasia di Kantor",
        paragraphs: [
          "Excel adalah tools yang paling membedakanmu dari pelamar lain. Kuasai bertahap:",
        ],
        list: [
          "Rumus dasar: SUM, AVERAGE, IF, VLOOKUP.",
          "Pengolahan data: sort, filter, conditional formatting.",
          "Analisis: pivot table dan chart.",
          "Validasi data untuk mencegah input salah.",
        ],
      },
      {
        heading: "PowerPoint: Menyampaikan, Bukan Membacakan",
        paragraphs: [
          "Presentasi yang baik bukan soal banyak animasi, tapi pesan yang jelas dan visual yang mendukung. Di kelas Microsoft Office #SemuaBerhakBisa, kamu akan belajar membuat slide yang meyakinkan, lengkap dengan teknik penyajiannya.",
        ],
      },
    ],
  },
  {
    slug: "tips-belajar-it-konsisten",
    title: "Susah Konsisten Belajar IT? Coba 4 Trik Ini",
    category: "Tips Belajar",
    tanggal: "2026-10-05",
    readTime: "4 menit",
    image: tips,
    excerpt:
      "Sekolah, kerja, dan urusan rumah sering bikin belajar tertunda. Empat trik sederhana ini bikin kamu tetap jalan tanpa merasa terbebani.",
    body: [
      {
        heading: "Kecilkan Targetmu",
        paragraphs: [
          "Target 'belajar coding' terlalu besar dan bikin malas memulai. Ganti jadi 'menyelesaikan satu latihan hari ini'. Target kecil lebih mudah dieksekusi, dan rasa selesai setiap hari akan memicu semangat untuk besok.",
        ],
      },
      {
        heading: "Waktu Tetap Lebih Ampuh dari Mood",
        paragraphs: [
          "Jangan menunggu mood datang. Tentukan jam belajar yang sama setiap hari, misalnya 30 menit setelah makan malam. Lama-kelamaan otakmu akan otomatis 'siap belajar' begitu jam itu tiba.",
        ],
      },
      {
        heading: "Kurangi Gesekan",
        paragraphs: [
          "Gesekan adalah hal kecil yang bikin kamu menunda. Solusinya sederhana:",
        ],
        list: [
          "Siapkan laptop dan bahan belajar di meja sejak pagi.",
          "Simpan tutorial ke bookmark agar tinggal klik.",
          "Nonaktifkan notifikasi HP selama sesi belajar.",
        ],
      },
      {
        heading: "Belajar Bareng Supaya Ada yang Menagih",
        paragraphs: [
          "Komitmen ke diri sendiri gampang diingkari, komitmen ke orang lain tidak. Ikut kelas terjadwal seperti di #SemuaBerhakBisa membuatmu punya jadwal tetap dan teman yang menunggu. Ketika malas datang, kamu akan berpikir dua kali untuk bolos.",
        ],
      },
    ],
  },
];

export const CATEGORY_COLOR = {
  Pemrograman: "text-firstcol bg-firstcol/10",
  "Desain Grafis": "text-secondcol bg-secondcol/10",
  "Jaringan Komputer": "text-thirdcol bg-thirdcol/10",
  "Microsoft Office": "text-fourthcol bg-fourthcol/10",
  "Tips Belajar": "text-firstcol bg-firstcol/10",
};
