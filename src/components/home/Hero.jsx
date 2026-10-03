import { Link } from "react-router-dom";
import { LINKS } from "../../lib/links";

export default function Hero() {
  return (
    <section
      id="herosection"
      className="font-inter w-full h-dvh px-6 md:px-12 flex flex-wrap justify-center items-center"
    >
      <div className="container">
        <div className="background h-dvh">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="flex flex-wrap justify-center">
          <h1 className="w-full text-center font-bold text-[28px]/[30px] md:text-[40px]/[46px]">
            Kuasai Bidang Teknologi Informasi, <br />
            Siapkan Masa Depanmu.
          </h1>
          <p className="text-sm w-full text-center mt-2 mb-8 md:text-base">
            Mulai belajar gratis di{" "}
            <span className="text-firstcol font-bold md:text-base">
              #SemuaBerhakBisa
            </span>
          </p>
          <a
            href={LINKS.pendaftaran}
            target="_blank"
            rel="noreferrer"
            className="btn-template font-semibold md:text-sm"
          >
            Mulai Belajar
          </a>
        </div>

        <div className="mt-20 md:mt-24">
          <div className="flex justify-center mb-8">
            <h3 className="font-semibold text-base md:text-lg">
              Bidang Akademi:
            </h3>
          </div>

          <div className="flex justify-center flex-wrap gap-x-8 gap-y-6">
            <AkademiItem
              icon=""
              iconType="fa-solid"
              color="border-firstcol"
              title="Pemrograman"
              padding="py-1.5 px-5.75"
              bidang="pemrograman"
            />
            <AkademiItem
              icon=""
              iconType="fa-solid"
              color="border-secondcol"
              title="Desain Grafis"
              padding="py-1.5 px-6"
              bidang="design"
            />
            <AkademiItem
              icon=""
              iconType="fa-solid"
              color="border-thirdcol"
              title="Jaringan Komputer"
              padding="py-1.5 px-2.25"
              bidang="jaringan"
            />
            <AkademiItem
              icon=""
              iconType="fa-brands"
              color="border-fourthcol"
              title="Microsoft Office"
              padding="py-1.5 px-4"
              bidang="office"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AkademiItem({ icon, iconType, title, color, padding, bidang }) {
  return (
    <Link
      to={`/layanan?bidang=${bidang}`}
      className={`flex items-center ${padding} shadow-md rounded border-2 ${color} transition-all md:py-2`}
    >
      <i className={`${iconType} text-[16px] text-black-soft dark:text-light`}>
        {icon}
      </i>
      <h3 className="ml-2 font-bold md:text-sm">{title}</h3>
    </Link>
  );
}
