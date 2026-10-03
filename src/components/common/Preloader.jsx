import { useEffect, useState } from "react";
import logo from "../../assets/img/logo.webp";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fadeTimer;

    // Sembunyikan preloader mengikuti kecepatan loading halaman sebenarnya
    const hide = () => {
      fadeTimer = setTimeout(() => setLoading(false), 700);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }

    return () => {
      clearTimeout(fadeTimer);
      window.removeEventListener("load", hide);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ${
        loading ? "opacity-100" : "opacity-0 scale-105 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-light via-white to-firstcol/15 dark:from-black-soft dark:via-black-soft dark:to-firstcol/25" />

      <img src={logo} alt="logo" className="w-20 h-20 preloader-logo" />
      <h1 className="preloader-title mt-5 font-inter font-bold text-2xl md:text-3xl text-black-soft dark:text-light">
        #SemuaBerhakBisa
      </h1>
      <p className="preloader-tagline mt-1 md:text-sm text-black-soft/70 dark:text-light/70">
        Bayar kami dengan senyumanmu.
      </p>

      <div className="mt-7 w-44 h-1 rounded-full bg-black-soft/10 dark:bg-white/10 overflow-hidden">
        <div className="preloader-bar h-full w-1/2 rounded-full bg-firstcol" />
      </div>
    </div>
  );
}
