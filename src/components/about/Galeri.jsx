import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const kegiatan = [
  { judul: "Kelas Online Pemrograman", info: "Senin, 20.00 WIB" },
  { judul: "Kelas Online Desain Grafis", info: "Selasa, 20.00 WIB" },
  { judul: "Kelas Online Jaringan Komputer", info: "Rabu, 20.00 WIB" },
  { judul: "Kelas Online Microsoft Office", info: "Kamis, 20.00 WIB" },
  { judul: "Sesi Offline Tangerang", info: "Sesuai jadwal wilayah" },
  { judul: "Diskusi Bareng Mentor", info: "Tiap akhir sesi" },
];

const warna = ["bg-firstcol", "bg-secondcol", "bg-thirdcol", "bg-fourthcol"];

function useSlidesToShow() {
  const compute = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };

  const [slidesToShow, setSlidesToShow] = useState(compute);

  useEffect(() => {
    const onResize = () => setSlidesToShow(compute());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return slidesToShow;
}

export default function Galeri() {
  const slidesToShow = useSlidesToShow();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <section className="w-full flex justify-center px-6 py-16 md:px-12 md:py-20">
      <div className="container flex justify-center flex-wrap">
        <h2 className="w-full mb-10 font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
          Dokumentasi <span className="text-firstcol">Kegiatan</span>
        </h2>

        {/* Ganti blok placeholder di bawah dengan <img src="..." alt="..." /> foto kegiatan asli */}
        <div className="w-full galeri-slider">
          <Slider key={slidesToShow} {...settings}>
            {kegiatan.map((k, i) => (
              <div key={k.judul} className="px-3 h-full">
                <div className="h-full rounded-xl overflow-hidden bg-white dark:bg-dark-gray shadow-md flex flex-col">
                  <div
                    className={`h-44 flex flex-col gap-2 justify-center items-center ${warna[i % warna.length]}`}
                  >
                    <i className="fa-solid fa-camera text-3xl text-white/80"></i>
                    <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
                      Foto kegiatan
                    </span>
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
