import Reveal from "../common/Reveal";

const kegiatan = [
  { judul: "Kelas Online Pemrograman", info: "Senin, 20.00 WIB" },
  { judul: "Kelas Online Desain Grafis", info: "Selasa, 20.00 WIB" },
  { judul: "Kelas Online Jaringan Komputer", info: "Rabu, 20.00 WIB" },
  { judul: "Kelas Online Microsoft Office", info: "Kamis, 20.00 WIB" },
  { judul: "Sesi Offline Tangerang", info: "Sesuai jadwal wilayah" },
  { judul: "Diskusi Bareng Mentor", info: "Tiap akhir sesi" },
];

const warna = ["bg-firstcol", "bg-secondcol", "bg-thirdcol", "bg-fourthcol"];

export default function Galeri() {
  return (
    <section className="w-full flex justify-center px-6 py-16 md:px-12 md:py-20">
      <div className="container flex justify-center flex-wrap">
        <h2 className="w-full mb-10 font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
          Dokumentasi <span className="text-firstcol">Kegiatan</span>
        </h2>

        {/* Ganti blok placeholder di bawah dengan <img src="..." alt="..." /> foto kegiatan asli */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kegiatan.map((k, i) => (
            <Reveal
              key={k.judul}
              delay={(i % 3) * 0.1}
              className="h-full"
            >
              <div className="h-full rounded-xl overflow-hidden bg-white dark:bg-dark-gray shadow-md flex flex-col">
                <div
                  className={`h-40 flex justify-center items-center ${warna[i % warna.length]}`}
                >
                  <i className="fa-solid fa-camera text-3xl text-white/80"></i>
                </div>
                <div className="p-4 flex-1">
                  <h3 className="font-bold text-black-soft dark:text-light">
                    {k.judul}
                  </h3>
                  <p className="mt-1 text-sm text-black-soft/70 dark:text-light/70">
                    {k.info}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
