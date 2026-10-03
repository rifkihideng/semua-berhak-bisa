import usePageTitle from "../lib/usePageTitle";

export default function NotFound() {
  usePageTitle("Halaman Tidak Ditemukan | Semua Berhak Bisa");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-6">Halaman yang kamu cari tidak ditemukan.</p>
      <a href="/" className="px-4 py-2 bg-firstcol text-white rounded">
        Kembali ke Beranda
      </a>
    </div>
  );
}
