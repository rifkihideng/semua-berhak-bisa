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
        <div className="flex flex-wrap justify-center gap-6">
          {kegiatan.map((k, i) => (
            <Reveal
              key={k.judul}
              delay={(i % 3) * 0.1}
              className="w-full md:w-1/2 lg:w-1/3"
            >
              <div className="rounded-xl overflow-hidden bg-white dark:bg-dark-gray shadow">
                <div
                  className={`h-40 flex justify-center items-center ${warna[i % warna.length]}`}
                >
                  <i className="fa-solid fa-camera text-3xl text-white/80"></i>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-black-soft dark:text-light">
                    {k.judul}
                  </h3>
                  <p className="text-sm text-black-soft dark:text-light">
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
