const faq = [
  {
    tanya: "Apakah kelas ini benar-benar gratis?",
    jawab: "Ya, semua kelas di #SemuaBerhakBisa gratis. Kami hanya meminta kamu serius dan semangat belajar.",
  },
  {
    tanya: "Apakah saya harus punya latar belakang IT?",
    jawab: "Tidak perlu. Kelas dirancang dari dasar sehingga cocok untuk pemula yang ingin mulai belajar.",
  },
  {
    tanya: "Bagaimana cara mendaftar?",
    jawab: "Klik tombol Mulai Belajar di beranda, isi formulir, lalu pilih bidang yang kamu minati.",
  },
  {
    tanya: "Kapan kelas online berlangsung?",
    jawab: "Kelas online berlangsung Senin - Kamis pukul 20.00 WIB melalui platform yang disediakan.",
  },
  {
    tanya: "Apakah bisa ikut lebih dari satu bidang?",
    jawab: "Bisa, selama jadwalnya tidak bentrok. Diskusikan dengan mentor saat mendaftar.",
  },
];

export default function Faq() {
  return (
    <section className="w-full flex justify-center px-6 py-16 md:px-12 md:py-20">
      <div className="container flex justify-center flex-wrap">
        <h2 className="w-full mb-10 font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
          Pertanyaan yang Sering{" "}
          <span className="text-firstcol">Ditanyakan</span>
        </h2>

        <div className="w-full md:w-[70%] space-y-3">
          {faq.map((item) => (
            <details
              key={item.tanya}
              className="group bg-light dark:bg-dark-gray rounded-lg p-4"
            >
              <summary className="select-none flex cursor-pointer list-none items-center justify-between text-sm md:text-base font-semibold">
                {item.tanya}
                <i className="fa-solid fa-chevron-down text-firstcol transition-transform group-open:rotate-180"></i>
              </summary>
              <p className="mt-3 md:text-sm text-black-soft dark:text-light">
                {item.jawab}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
