import Reveal from "../common/Reveal";

const misi = [
  "Menyelenggarakan kelas belajar gratis yang terjadwal dan terarah.",
  "Menghadirkan mentor praktisi yang berpengalaman di bidangnya.",
  "Membuka akses belajar bagi semua kalangan tanpa memandang latar belakang.",
  "Membangun kebiasaan belajar yang konsisten dan menyenangkan.",
];

export default function VisiMisi() {
  return (
    <section className="w-full flex justify-center px-6 py-16 md:px-12 md:py-20">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <h2 className="w-full mb-10 font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
            Visi & <span className="text-firstcol">Misi</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <Reveal className="w-full md:w-1/3">
              <div className="h-full bg-white dark:bg-dark-gray rounded-xl shadow p-6">
                <h3 className="font-inter font-bold text-lg text-black-soft dark:text-light mb-3">
                  Visi
                </h3>
                <p className="md:text-base text-black-soft dark:text-light">
                  Menjadi komunitas belajar teknologi informasi yang inklusif
                  dan berdampak, tempat setiap orang dapat mengembangkan
                  keterampilan digitalnya secara gratis.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="w-full md:w-1/2">
              <div className="h-full bg-white dark:bg-dark-gray rounded-xl shadow p-6">
                <h3 className="font-inter font-bold text-lg text-black-soft dark:text-light mb-3">
                  Misi
                </h3>
                <ul className="space-y-2">
                  {misi.map((item) => (
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
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
