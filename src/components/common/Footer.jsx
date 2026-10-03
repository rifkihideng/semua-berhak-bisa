import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.webp";
import { LINKS } from "../../lib/links";

export default function Footer() {
  return (
    <footer className="theme-bg pt-16 md:pt-20 flex flex-wrap justify-center text-white">
      <div className="container">
        <div className="px-6 pb-4 flex flex-wrap justify-between md:px-12">
          <div className="flex items-start gap-x-3">
            <img src={logo} alt="logo" className="w-8" />
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                #SemuaBerhakBisa
              </h2>
              <p className="-mt-1 mb-1 md:text-sm">
                Bayar kami dengan senyumanmu.
              </p>
              <div className="flex gap-x-1 underline md:gap-x-2">
                <Link to="/" className="md:text-sm">
                  Home
                </Link>
                <Link to="/tentang" className="md:text-sm">
                  Tentang Komunitas
                </Link>
                <Link to="/layanan" className="md:text-sm">
                  Bidang Layanan
                </Link>
              </div>

              <div className="mt-4 md:hidden">
                <h2 className="text-lg font-semibold">Hubungi Kami:</h2>
                <div className="flex items-center gap-x-3">
                  <a
                    href={LINKS.instagram} target="_blank" rel="noreferrer"
                    className="w-7 h-7 rounded-full flex justify-center items-center hover:bg-dark-gray transition-colors"
                  >
                    <i className="fa-brands text-[18px]"></i>
                  </a>
                  <a
                    href={LINKS.tiktok} target="_blank" rel="noreferrer"
                    className="w-7 h-7 rounded-full flex justify-center items-center hover:bg-dark-gray transition-colors"
                  >
                    <i className="fa-brands text-[16px]"></i>
                  </a>
                  <a
                    href={LINKS.whatsapp} target="_blank" rel="noreferrer"
                    className="w-7 h-7 rounded-full flex justify-center items-center hover:bg-dark-gray transition-colors"
                  >
                    <i className="fa-brands text-[18px]"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <h2 className="text-lg font-semibold md:text-xl">Hubungi Kami:</h2>
            <div className="flex items-center gap-x-3">
              <a
                href={LINKS.instagram} target="_blank" rel="noreferrer"
                className="w-7 h-7 rounded-full flex justify-center items-center hover:bg-dark-gray transition-colors md:w-8 md:h-8"
              >
                <i className="fa-brands text-[18px] md:text-[22px]"></i>
              </a>
              <a
                href={LINKS.tiktok} target="_blank" rel="noreferrer"
                className="w-7 h-7 rounded-full flex justify-center items-center hover:bg-dark-gray transition-colors md:w-8 md:h-8"
              >
                <i className="fa-brands text-[16px] md:text-[22px]"></i>
              </a>
              <a
                href={LINKS.whatsapp} target="_blank" rel="noreferrer"
                className="w-7 h-7 rounded-full flex justify-center items-center hover:bg-dark-gray transition-colors md:w-8 md:h-8"
              >
                <i className="fa-brands text-[18px] md:text-[22px]"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-6 border-t py-4">
          <p className="md:text-sm">
            Copyright &copy; 2026 Semua Berhak Bisa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
