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
    <header className="bg-white/80 dark:bg-black-soft/80 backdrop-blur-md fixed top-0 left-0 z-10 w-full px-6 flex justify-center items-center shadow-sm md:px-12">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 md:w-10" />
            <span className="hidden sm:inline font-inter font-bold text-black-soft dark:text-light md:text-base">
              #SemuaBerhakBisa
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-8 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex py-2 md:text-sm hover-underline ${
                    isActive
                      ? "text-firstcol"
                      : "text-black-soft dark:text-light hover:text-firstcol"
                  }`
                }
              >
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tentang"
                className={({ isActive }) =>
                  `flex py-2 md:text-sm hover-underline ${
                    isActive
                      ? "text-firstcol"
                      : "text-black-soft dark:text-light hover:text-firstcol"
                  }`
                }
              >
                Tentang Komunitas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/layanan"
                className={({ isActive }) =>
                  `flex py-2 md:text-sm hover-underline ${
                    isActive
                      ? "text-firstcol"
                      : "text-black-soft dark:text-light hover:text-firstcol"
                  }`
                }
              >
                Bidang Layanan
              </NavLink>
            </li>
            <li>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-template font-semibold md:text-sm"
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
                  className={({ isActive }) =>
                    `flex py-1 md:text-sm hover-underline ${
                      isActive
                        ? "text-firstcol"
                        : "text-black-soft dark:text-light hover:text-firstcol"
                    }`
                  }
                >
                  Beranda
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tentang"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex py-1 md:text-sm hover-underline ${
                      isActive
                        ? "text-firstcol"
                        : "text-black-soft dark:text-light hover:text-firstcol"
                    }`
                  }
                >
                  Tentang Komunitas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/layanan"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex py-1 md:text-sm hover-underline ${
                      isActive
                        ? "text-firstcol"
                        : "text-black-soft dark:text-light hover:text-firstcol"
                    }`
                  }
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
