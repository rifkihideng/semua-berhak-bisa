import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import usePageTitle from "../lib/usePageTitle";

const BIDANG = [
  { value: "pemrograman", label: "Pemrograman" },
  { value: "design", label: "Desain Grafis" },
  { value: "jaringan", label: "Jaringan Komputer" },
  { value: "office", label: "Microsoft Office" },
];

const API_URL = import.meta.env.VITE_API_URL || "";

export default function Daftar() {
  usePageTitle("Pendaftaran | Semua Berhak Bisa");
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    bidang: searchParams.get("bidang") || "",
    asal: "",
    feedback: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/pendaftaran`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Terjadi kesalahan. Coba lagi.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Terjadi kesalahan. Coba lagi.");
    }
  };

  if (status === "success") {
    return (
      <section className="w-full flex justify-center px-6 py-20 md:px-12 md:py-24">
        <div className="container max-w-xl">
          <div className="bg-white dark:bg-dark-gray rounded-xl shadow p-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-firstcol flex justify-center items-center">
              <i className="fa-solid fa-check text-3xl text-white"></i>
            </div>
            <h2 className="mt-6 font-inter text-2xl font-bold text-black-soft dark:text-light">
              Pendaftaran Berhasil!
            </h2>
            <p className="mt-2 md:text-base text-black-soft dark:text-light">
              Terima kasih, {form.nama}. Data kamu sudah kami terima. Tim kami
              akan menghubungi kamu via WhatsApp untuk info jadwal.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 btn-template font-semibold md:text-sm"
            >
              Daftar Lagi
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full flex justify-center px-6 py-16 md:px-12 md:py-24">
      <div className="container max-w-xl">
        <div className="flex flex-col items-center">
          <h2 className="font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
            Formulir <span className="text-firstcol">Pendaftaran</span>
          </h2>
          <p className="text-center mt-2 mb-8 md:text-base text-black-soft dark:text-light">
            Isi data di bawah untuk mulai belajar gratis di #SemuaBerhakBisa.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-dark-gray rounded-xl shadow p-6 md:p-8 space-y-5"
        >
          <div>
            <label
              htmlFor="nama"
              className="block mb-1 font-semibold text-black-soft dark:text-light md:text-sm"
            >
              Nama Lengkap
            </label>
            <input
              id="nama"
              name="nama"
              type="text"
              required
              value={form.nama}
              onChange={handleChange}
              placeholder="Contoh: Budi Santoso"
              className="w-full rounded border border-gray-300 dark:border-dark-gray dark:bg-black-soft dark:text-light px-3 py-2 md:text-sm focus:outline-none focus:border-firstcol"
            />
          </div>

          <div>
            <label
              htmlFor="whatsapp"
              className="block mb-1 font-semibold text-black-soft dark:text-light md:text-sm"
            >
              Nomor WhatsApp
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              required
              value={form.whatsapp}
              onChange={handleChange}
              placeholder="Contoh: 08123456789"
              className="w-full rounded border border-gray-300 dark:border-dark-gray dark:bg-black-soft dark:text-light px-3 py-2 md:text-sm focus:outline-none focus:border-firstcol"
            />
          </div>

          <div>
            <label
              htmlFor="bidang"
              className="block mb-1 font-semibold text-black-soft dark:text-light md:text-sm"
            >
              Pilih Bidang
            </label>
            <select
              id="bidang"
              name="bidang"
              required
              value={form.bidang}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 dark:border-dark-gray dark:bg-black-soft dark:text-light px-3 py-2 md:text-sm focus:outline-none focus:border-firstcol"
            >
              <option value="" disabled>
                -- Pilih bidang --
              </option>
              {BIDANG.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="asal"
              className="block mb-1 font-semibold text-black-soft dark:text-light md:text-sm"
            >
              Asal Kota (opsional)
            </label>
            <input
              id="asal"
              name="asal"
              type="text"
              value={form.asal}
              onChange={handleChange}
              placeholder="Contoh: Tangerang"
              className="w-full rounded border border-gray-300 dark:border-dark-gray dark:bg-black-soft dark:text-light px-3 py-2 md:text-sm focus:outline-none focus:border-firstcol"
            />
          </div>

          <div>
            <label
              htmlFor="feedback"
              className="block mb-1 font-semibold text-black-soft dark:text-light md:text-sm"
            >
              Feedback / Saran (opsional)
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows="3"
              maxLength="500"
              value={form.feedback}
              onChange={handleChange}
              placeholder="Tulis harapan, saran, atau pesan untuk komunitas..."
              className="w-full rounded border border-gray-300 dark:border-dark-gray dark:bg-black-soft dark:text-light px-3 py-2 md:text-sm focus:outline-none focus:border-firstcol resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-secondcol md:text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full btn-template font-semibold md:text-sm disabled:opacity-60"
          >
            {status === "loading" ? "Mengirim..." : "Daftar Sekarang"}
          </button>
        </form>
      </div>
    </section>
  );
}
