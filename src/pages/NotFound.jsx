import { Link } from "react-router-dom";
import usePageTitle from "../lib/usePageTitle";

export default function NotFound() {
  usePageTitle("Halaman Tidak Ditemukan | Semua Berhak Bisa");
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="font-inter text-7xl md:text-8xl font-bold text-firstcol">
        404
      </h1>
      <p className="mt-4 text-lg md:text-xl font-semibold text-black-soft dark:text-light">
        Halaman yang kamu cari tidak ditemukan.
      </p>
      <p className="mt-2 md:text-base text-black-soft dark:text-light max-w-md">
        Mungkin halaman sudah dipindah atau alamat yang kamu tulis salah ketik.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/" className="btn-template font-semibold md:text-sm">
          Kembali ke Beranda
        </Link>
        <Link
          to="/layanan"
          className="px-4 py-2 rounded border border-firstcol text-firstcol hover:bg-firstcol hover:text-white transition-all font-semibold md:text-sm"
        >
          Lihat Bidang Layanan
        </Link>
      </div>
    </section>
  );
}
