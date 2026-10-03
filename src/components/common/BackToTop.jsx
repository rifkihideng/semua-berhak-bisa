import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
      className={`fixed bottom-24 right-5 z-50 w-11 h-11 flex justify-center items-center rounded-full bg-firstcol text-white shadow-lg transition-all duration-300 hover:scale-110 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <i className="fa-solid fa-chevron-up text-lg"></i>
    </button>
  );
}
