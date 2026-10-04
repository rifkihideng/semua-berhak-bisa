import { useEffect, useRef, useState } from "react";
import Reveal from "../common/Reveal";

const statistik = [
  { nilai: 4, suffix: "", label: "Bidang Akademi" },
  { nilai: 5, suffix: "", label: "Mentor" },
  { nilai: 7, suffix: "", label: "Wilayah Offline" },
  { nilai: 20, suffix: "", label: "Peserta Belajar" },
];

function Counter({ nilai, suffix }) {
  const ref = useRef(null);
  const [angka, setAngka] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        const durasi = 1200;
        const mulai = performance.now();
        const tick = (now) => {
          const p = Math.min((now - mulai) / durasi, 1);
          setAngka(Math.round(nilai * p));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [nilai]);

  return (
    <span
      ref={ref}
      className="font-inter font-bold text-3xl md:text-4xl text-firstcol"
    >
      {angka}
      {suffix}
    </span>
  );
}

export default function Statistik() {
  return (
    <section className="bg-light dark:bg-dark-gray w-full flex justify-center px-6 py-16 md:px-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-0">
          {statistik.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.1}
              className={`text-center ${
                i > 0 ? "md:border-l md:border-black/10 dark:md:border-white/10" : ""
              }`}
            >
              <Counter nilai={s.nilai} suffix={s.suffix} />
              <p className="mt-2 text-sm text-black-soft dark:text-light">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
