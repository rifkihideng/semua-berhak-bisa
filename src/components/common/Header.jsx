import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.webp";
import { LINKS } from "../../lib/links";
import moon from "../../assets/icons/moon.webp";
import sun from "../../assets/icons/sun.webp";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header className="bg-transparent bg-opacity-70 backdrop-blur-sm fixed top-0 left-0 z-10 w-full px-6 py-1 flex justify-center items-center shadow-md md:px-20">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center h-16">
          <div className="flex justify-start ">
            <img src={logo} alt="Logo" className="w-8 md:w-10" />
          </div>

          <ul className="hidden md:flex justify-center gap-8 font-semibold">
            <li>
              <NavLink
                to="/"
                className="flex py-2 md:text-sm hover:text-firstcol hover-underline"
              >
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tentang"
                className="flex py-2 md:text-sm hover:text-firstcol hover-underline"
              >
                Tentang Komunitas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/layanan"
                className="flex py-2 md:text-sm hover:text-firstcol hover-underline"
              >
                Bidang Layanan
              </NavLink>
            </li>
            <li>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-3 md:mt-0 flex justify-center btn-template"
              >
                Mulai Konsultasi
              </a>
            </li>
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1 cursor-pointer"
          >
            <span
              className={`hamburger-line origin-top-left transition duration-300 ease-in-out
              ${menuOpen ? "rotate-45" : ""}
              `}
            />
            <span
              className={`hamburger-line transition duration-300 ease-in-out
              ${menuOpen ? "scale-0" : ""}
              `}
            />
            <span
              className={`hamburger-line origin-bottom-left transition duration-300 ease-in-out
              ${menuOpen ? "-rotate-45" : ""}
              `}
            />
          </button>

          <div className="flex justify-end items-center gap-4">
            <button onClick={toggleDarkMode} className="cursor-pointer">
              <img src={darkMode ? sun : moon} alt="theme" className="w-8" />
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-full w-[90%] bg-white dark:bg-black-soft shadow-lg rounded-md">
            <ul className="flex flex-col gap-4 p-6 font-semibold">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex py-1 md:text-sm hover:text-firstcol hover-underline"
                >
                  Beranda
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tentang"
                  onClick={() => setMenuOpen(false)}
                  className="flex py-1 md:text-sm hover:text-firstcol hover-underline"
                >
                  Tentang Komunitas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/layanan"
                  onClick={() => setMenuOpen(false)}
                  className="flex py-1 md:text-sm hover:text-firstcol hover-underline"
                >
                  Bidang Layanan
                </NavLink>
              </li>
              <li>
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 flex justify-center btn-template"
                >
                  Mulai Konsultasi
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
