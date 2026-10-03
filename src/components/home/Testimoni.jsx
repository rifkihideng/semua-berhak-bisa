import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimoni = [
  {
    nama: "Nadia Putri",
    bidang: "Peserta Pemrograman",
    teks: "Kelasnya terstruktur banget. Dari nol sampai bisa bikin website sendiri dalam beberapa minggu.",
  },
  {
    nama: "Raka Pratama",
    bidang: "Peserta Desain Grafis",
    teks: "Mentornya sabar dan selalu menjawab pertanyaan secara real-time. Belajar desain jadi lebih percaya diri.",
  },
  {
    nama: "Dimas Saputra",
    bidang: "Peserta Jaringan Komputer",
    teks: "Materi jaringan komputer-nya langsung praktik, bukan cuma teori. Sangat membantu untuk pemula.",
  },
  {
    nama: "Sinta Dewi",
    bidang: "Peserta Microsoft Office",
    teks: "Gratis tapi kualitasnya tidak main-main. Kemampuan Office saya naik drastis untuk kebutuhan kerja.",
  },
];

function inisial(nama) {
  return nama
    .split(" ")
    .map((kata) => kata[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

export default function Testimoni() {
  return (
    <section className="w-full flex justify-center px-6 py-16 md:px-12 md:py-20">
      <div className="container flex justify-center flex-wrap">
        <h2 className="w-full font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
          Kata <span className="text-firstcol">Mereka</span>
        </h2>
        <p className="text-center mt-2 mb-10 md:text-base text-black-soft dark:text-light max-w-md md:max-w-xl">
          Cerita singkat dari peserta yang sudah belajar bersama
          #SemuaBerhakBisa.
        </p>

        <div className="w-full">
          <Slider {...settings}>
            {testimoni.map((t) => (
              <div key={t.nama} className="px-3">
                <div className="h-full bg-white dark:bg-dark-gray rounded-xl shadow p-6 flex flex-col">
                  <p className="md:text-sm text-black-soft dark:text-light flex-1">
                    &ldquo;{t.teks}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-firstcol flex justify-center items-center text-white font-bold text-sm">
                      {inisial(t.nama)}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-black-soft dark:text-light">
                        {t.nama}
                      </h3>
                      <p className="text-xs text-firstcol font-semibold">
                        {t.bidang}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
