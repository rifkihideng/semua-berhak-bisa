import { useNavigate } from "react-router-dom";

export default function Konsultasi() {
  const navigate = useNavigate();

  return (
    <section className="w-full flex justify-center px-6 py-16 md:py-20">
      <div className="container flex justify-center flex-wrap">
        <h2 className="w-full font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
          Masih Bingung?
        </h2>
        <p className="text-center mt-2 md:text-base text-black-soft dark:text-light mb-10 max-w-md md:max-w-xl">
          Baca ketentuan dan alur pendaftaran agar kamu memahami proses belajar,
          jadwal, serta aturan yang berlaku dengan jelas.
        </p>
        <div className="w-full flex justify-center">
          <button
            onClick={() => navigate("/ketentuan")}
            className="btn-template font-semibold md:text-sm"
          >
            Lihat Ketentuan
          </button>
        </div>
      </div>
    </section>
  );
}
