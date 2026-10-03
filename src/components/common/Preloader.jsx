import { useEffect, useState } from "react";
import logo from "../../assets/img/logo.webp";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fadeTimer;

    // Sembunyikan preloader mengikuti kecepatan loading halaman sebenarnya
    const hide = () => {
      fadeTimer = setTimeout(() => setLoading(false), 300);
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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-black-soft transition-opacity duration-500 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img src={logo} alt="logo" className="w-16 h-16 animate-pulse" />
      <p className="mt-3 font-inter font-semibold text-black-soft dark:text-light">
        #SemuaBerhakBisa
      </p>
    </div>
  );
}
