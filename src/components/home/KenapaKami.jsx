export default function KenapaKami() {
  return (
    <section className="w-full flex justify-center px-6 py-16 md:px-12 md:py-20">
      <div className="container flex justify-center flex-wrap">
        <div className="mb-10">
          <h2 className="font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
            Kenapa <span className="text-firstcol">#SemuaBerhakBisa</span>{" "}
            Akademi?
          </h2>
          <p className="text-center mt-2 md:text-base text-black-soft dark:text-light max-w-md md:max-w-lg">
            Hadir buat bantu kamu berkembang lewat sesi pembelajaran langsung
            yang fokus dan terjadwal. Belajar IT makin terarah
          </p>
        </div>

        <div className="w-full md:w-[75%] flex justify-between items-start flex-wrap">
          <div className="w-full space-y-3">
            <Item
              title="Belajar terjadwal setiap hari"
              text="Kelas dimulai Senin-Kamis secara online pukul 20.00 WIB. Waktu yang konsisten membantu kamu membangun kebiasaan belajar tanpa bentrok dengan sekolah atau aktivitas lain."
            ></Item>
            <Item
              title="Pembelajaran interaktif secara langsung"
              text="Semua materi disampaikan secara langsung bersama mentor. Kamu bisa bertanya, berdiskusi, dan memahami materi secara real-time tanpa harus belajar sendirian."
            ></Item>
            <Item
              title="Belajar gratis dengan mentor berpengalaman"
              text="Mentor yang membimbing merupakan praktisi aktif di bidangnya. Materi yang disampaikan bukan hanya teori, tetapi juga pengalaman nyata yang relevan dengan kebutuhan saat ini."
            ></Item>
            <Item
              title="Terdapat 4 bidang yang bisa kamu pelajari"
              text="Kamu dapat memilih bidang sesuai minat dan tujuan kamu. Materi dirancang  dengan kebutuhan industri sehingga skill yang dipelajari memiliki nilai guna yang nyata."
            ></Item>
            <Item
              title="Panduan pembelajaran yang terstruktur"
              text="Setiap peserta akan mengikuti alur pembelajaran yang sudah disusun secara bertahap. Dengan struktur yang jelas, kamu bisa memahami materi secara runtut dan tidak kehilangan arah."
            ></Item>
            <Item
              title="Bagaimana cara mendaftar belajar gratis?"
              text="Pendaftaran dilakukan melalui formulir online. Setelah mengisi data dan memilih bidang yang diminati, kamu akan mendapatkan informasi jadwal serta tata cara mengikuti sesi pembelajaran."
            ></Item>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ title, text }) {
  return (
    <details className="group bg-light dark:bg-dark-gray rounded-lg p-4">
      <summary className="select-none flex cursor-pointer list-none items-center justify-between gap-3 text-sm md:text-base font-semibold text-black-soft dark:text-light">
        {title}
        <span className="transition-transform group-open:rotate-180">
          <i className="fa-solid fa-chevron-down text-firstcol text-[16px] transition-transform duration-500 ease md:text-lg"></i>
        </span>
      </summary>
      <p className="mt-3 md:text-sm text-black-soft dark:text-light">{text}</p>
    </details>
  );
}
