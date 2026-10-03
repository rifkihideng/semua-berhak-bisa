import { useNavigate } from "react-router-dom";

export default function Konsultasi() {
  const navigate = useNavigate();

  return (
    <section className="w-full flex justify-center px-6 py-16 md:px-12 md:py-20">
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-r from-firstcol to-[#0e7490] text-white text-center shadow-lg p-8 md:p-14">
          <h2 className="font-inter text-2xl font-bold md:text-3xl">
            Masih Bingung?
          </h2>
          <p className="mt-3 md:text-base max-w-xl mx-auto text-white/90">
            Baca ketentuan dan alur pendaftaran agar kamu memahami proses
            belajar, jadwal, serta aturan yang berlaku dengan jelas.
          </p>
          <button
            onClick={() => navigate("/ketentuan")}
            className="mt-8 bg-white text-firstcol font-semibold rounded px-6 py-3 md:text-sm hover:bg-light transition-colors"
          >
            Lihat Ketentuan
          </button>
        </div>
      </div>
    </section>
  );
}
