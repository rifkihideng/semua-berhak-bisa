import usePageTitle from "../lib/usePageTitle";

export default function Ketentuan() {
  usePageTitle("Ketentuan | Semua Berhak Bisa");
  return (
    <section className="w-full flex justify-center px-6 py-20 md:px-12 md:py-24">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <h2 className="w-full font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
            Ketentuan & <span className="text-firstcol">Alur Pendaftaran</span>
          </h2>
          <p className="text-center mt-2 mb-10 md:text-base text-black-soft dark:text-light max-w-md md:max-w-xl">
            Pahami proses, jadwal, dan aturan sebelum mulai belajar bersama
            kami.
          </p>

          <div className="w-full space-y-8">
            <Card
              title="Alur Pendaftaran"
              items={[
                "Isi formulir pendaftaran melalui tombol Mulai Belajar.",
                "Pilih bidang akademi yang ingin diikuti.",
                "Kamu akan dihubungi untuk info jadwal dan kelas.",
                "Ikuti kelas sesuai jadwal yang sudah ditentukan.",
              ]}
            />

            <Card
              title="Jadwal Belajar"
              items={[
                "Kelas online berlangsung Senin - Kamis pukul 20.00 WIB.",
                "Sesi offline sesuai jadwal wilayah masing-masing.",
                "Catat atau minta ulang materi bila melewatkan sesi.",
              ]}
            />

            <Card
              title="Aturan Belajar"
              items={[
                "Ikuti kelas tepat waktu dan aktif bertanya.",
                "Jaga sikap sopan selama pembelajaran berlangsung.",
                "Belajar gratis, bayar kami dengan senyumanmu.",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, items }) {
  return (
    <div className="bg-white dark:bg-dark-gray rounded-xl shadow p-6">
      <h3 className="font-inter font-bold text-lg text-black-soft dark:text-light mb-3">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-x-2 md:text-base text-black-soft dark:text-light"
          >
            <span className="text-firstcol font-bold">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
