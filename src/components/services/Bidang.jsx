import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const KATEGORI = ["all", "pemrograman", "design", "jaringan", "office"];

export default function Layanan() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(() => {
    const b = searchParams.get("bidang");
    return KATEGORI.includes(b) ? b : "all";
  });

  useEffect(() => {
    const b = searchParams.get("bidang");
    if (KATEGORI.includes(b)) {
      setActiveFilter(b);
    }
  }, [searchParams]);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === "all") {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ bidang: filter }, { replace: true });
    }
  };

  const services = [
    {
      title: "Front-end Web Dasar",
      category: "pemrograman",
      border: "border-firstcol",
      bg: "bg-firstcol",
      txt: "text-firstcol",
      tag: "Pemrograman",
      iconType: "fa-solid",
      logo: "",
      materi: ["HTML", "CSS", "JavaScript", "Project Sederhana"],
    },
    {
      title: "Bahasa Pemrograman Dasar",
      category: "pemrograman",
      border: "border-firstcol",
      bg: "bg-firstcol",
      txt: "text-firstcol",
      tag: "Pemrograman",
      iconType: "fa-solid",
      logo: "",
      materi: ["Bahasa Pemrograman Python", "Bahasa Pemrograman PHP"],
    },
    {
      title: "Adobe Photoshop",
      category: "design",
      border: "border-secondcol",
      bg: "bg-secondcol",
      txt: "text-secondcol",
      tag: "Desain Grafis",
      iconType: "fa-solid",
      logo: "",
      materi: [
        "Retouching gambar",
        "Konten media sosial",
        "Materi Pemasaran",
        "Manipulasi Foto Surealis",
        "Desain produk/mockup",
      ],
    },
    {
      title: "Adobe Ilustrator",
      category: "design",
      border: "border-secondcol",
      bg: "bg-secondcol",
      txt: "text-secondcol",
      tag: "Desain Grafis",
      iconType: "fa-solid",
      logo: "",
      materi: ["Desain logo", "Brand guidlines", "Desain Vektor 2d"],
    },
    {
      title: "Figma",
      category: "design",
      border: "border-secondcol",
      bg: "bg-secondcol",
      txt: "text-secondcol",
      tag: "Desain Grafis",
      iconType: "fa-solid",
      logo: "",
      materi: ["UX research", "UI Guidlines", "Design Thinking"],
    },
    {
      title: "Cisco Packet Tracer",
      category: "jaringan",
      border: "border-thirdcol",
      bg: "bg-thirdcol",
      txt: "text-thirdcol",
      tag: "Jaringan Komputer",
      iconType: "fa-solid",
      logo: "",
      materi: [
        "Dasar Jaringan",
        "IP Address & Subnetting",
        "Switch & VLAN",
        "Routing",
        "Inter-VLAN, NAT & ACL",
        "Wireless & Server",
      ],
    },
    {
      title: "WinBox Mikrotik",
      category: "jaringan",
      border: "border-thirdcol",
      bg: "bg-thirdcol",
      txt: "text-thirdcol",
      tag: "Jaringan Komputer",
      iconType: "fa-solid",
      logo: "",
      materi: [
        "Pengenalan MikroTik & Winbox",
        "IP Address & Subnetting",
        "DHCP & DNS",
        "Routing & Gateway",
        "NAT & Firewall",
        "Manajemen Bandwidth",
        "Wireless",
        "Bridge & VLAN",
        "Hotspot & PPP",
      ],
    },

    {
      title: "Microsoft Word",
      category: "office",
      border: "border-fourthcol",
      bg: "bg-fourthcol",
      txt: "text-fourthcol",
      tag: "Microsoft Office",
      iconType: "fa-brands",
      logo: "",
      materi: [
        "Pengenalan Microsoft Word",
        "Pengetikan, editing, font & paragraf",
        "Page setup, header, footer, nomor halaman",
        "Tabel, gambar, shape & text box",
        "Styles, heading, daftar isi & section break",
        "Sitasi dan referensi otomatis menggunakan Mendeley",
      ],
    },
    {
      title: "Microsoft Excel",
      category: "office",
      border: "border-fourthcol",
      bg: "bg-fourthcol",
      txt: "text-fourthcol",
      tag: "Microsoft Office",
      iconType: "fa-brands",
      logo: "",
      materi: [
        "Pengenalan Microsoft Excel & manajemen worksheets",
        "Rumus & fungsi dasar",
        "Fungsi lanjutan, sort, filter & conditional formatting",
        "Chart, grafik & visualisasi data",
        "Pivot table, data validation & analisis data",
      ],
    },
    {
      title: "Microsoft Powerpoint",
      category: "office",
      border: "border-fourthcol",
      bg: "bg-fourthcol",
      txt: "text-fourthcol",
      tag: "Microsoft Office",
      iconType: "fa-brands",
      logo: "",
      materi: [
        "Antarmuka PowerPoint, slide & layout",
        "Tema, background & konsistensi desain",
        "Teks, gambar, shape, icon & align",
        "Slide master, transition & animation",
        "Multimedia, hyperlink & interaksi",
        "Presenter view, export & teknik presentasi",
      ],
    },
  ];

  return (
    <section className="w-full flex justify-center px-6 py-10 md:px-12 md:py-12">
      <div className="container">
        <div className="flex flex-wrap justify-between space-y-6 md:space-x-10">
          <div className="w-full md:w-[30%]">
            <div className="mb-2">
              <h2 className="text-2xl font-inter font-bold text-black-soft dark:text-light leading-tight md:text-3xl">
                Materi Belajar <br />
                <span className="text-firstcol">#SemuaBerhakBisa</span>
              </h2>
            </div>

            {/* sm layout */}
            <div className="space-x-2 space-y-3 md:hidden">
              <button
                onClick={() => handleFilter("all")}
                className={`${activeFilter === "all" ? "active-div" : ""} w-fit rounded-full border border-firstcol px-3 py-1.5 text-xs transition cursor-pointer hover:text-black-soft hover:scale-105`}
              >
                Lihat Semua
              </button>

              <button
                onClick={() => handleFilter("pemrograman")}
                className={`${
                  activeFilter === "pemrograman" ? "active-div" : ""
                } w-fit rounded-full border border-firstcol px-3 py-1.5 text-xs transition cursor-pointer hover:text-black-soft hover:scale-105 `}
              >
                Pemrograman
              </button>

              <button
                onClick={() => handleFilter("design")}
                className={`${
                  activeFilter === "design" ? "active-div" : ""
                } w-fit rounded-full border border-firstcol px-3 py-1.5 text-xs transition cursor-pointer hover:text-black-soft hover:scale-105`}
              >
                Desain Grafis
              </button>

              <button
                onClick={() => handleFilter("jaringan")}
                className={`${
                  activeFilter === "jaringan" ? "active-div" : ""
                } w-fit rounded-full border border-firstcol px-3 py-1.5 text-xs transition cursor-pointer hover:text-black-soft hover:scale-105`}
              >
                Jaringan Komputer
              </button>

              <button
                onClick={() => handleFilter("office")}
                className={`${
                  activeFilter === "office" ? "active-div" : ""
                } w-fit rounded-full border border-firstcol px-3 py-1.5 text-xs transition cursor-pointer hover:text-black-soft hover:scale-105`}
              >
                Microsoft Office
              </button>
            </div>

            {/* md layout */}
            <div className="space-y-3 hidden md:block">
              <button
                onClick={() => handleFilter("all")}
                className={`${activeFilter === "all" ? "active-div" : ""} w-full rounded-sm border border-firstcol text-left px-4 py-2 text-sm transition cursor-pointer`}
              >
                Lihat Semua
              </button>

              <button
                onClick={() => handleFilter("pemrograman")}
                className={`${
                  activeFilter === "pemrograman" ? "active-div" : ""
                } w-full rounded-sm border border-firstcol text-left px-4 py-2 text-sm transition cursor-pointer`}
              >
                Pemrograman
              </button>

              <button
                onClick={() => handleFilter("design")}
                className={`${
                  activeFilter === "design" ? "active-div" : ""
                } w-full rounded-sm border border-firstcol text-left px-4 py-2 text-sm transition cursor-pointer`}
              >
                Desain Grafis
              </button>

              <button
                onClick={() => handleFilter("jaringan")}
                className={`${
                  activeFilter === "jaringan" ? "active-div" : ""
                } w-full rounded-sm border border-firstcol text-left px-4 py-2 text-sm transition cursor-pointer`}
              >
                Jaringan Komputer
              </button>

              <button
                onClick={() => handleFilter("office")}
                className={`${
                  activeFilter === "office" ? "active-div" : ""
                } w-full rounded-sm border border-firstcol text-left px-4 py-2 text-sm transition cursor-pointer`}
              >
                Microsoft Office
              </button>
            </div>
          </div>

          <div className="w-full md:w-[65%] space-y-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                category={service.category}
                activeFilter={activeFilter}
                title={service.title}
                border={service.border}
                bg={service.bg}
                txt={service.txt}
                tag={service.tag}
                iconType={service.iconType}
                logo={service.logo}
                materi={service.materi}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  category,
  activeFilter,
  title,
  border,
  bg,
  txt,
  tag,
  iconType,
  logo,
  materi,
}) {
  if (activeFilter !== "all" && activeFilter !== category) {
    return null;
  }

  return (
    <div className="service-card">
      <div
        className={`card flex flex-wrap border-2 ${border} rounded-xl shadow-sm`}
      >
        <div
          className={`w-full border-b-2 ${border} px-3 pb-4 pt-7 flex flex-wrap justify-between md:w-[40%] md:border-r-2 md:border-b-0 md:px-5 md:py-7`}
        >
          <div className="w-[65%] md:w-full">
            <h3 className="text-lg/5 font-bold mb-2 md:text-xl">{title}</h3>

            <div className="flex items-center space-x-1">
              <div
                className={`w-6 h-6 flex justify-center items-center rounded-full ${bg}`}
              >
                <i
                  className={`${iconType} text-xs text-light transition-all duration-500 ease md:text-sm`}
                >
                  {logo}
                </i>
              </div>
              <p className={`${txt} font-semibold text-sm md:text-base`}>
                {tag}
              </p>
            </div>
          </div>

          <div className="mt-2 md:mt-8">
            <Link
              to={`/daftar?bidang=${category}`}
              className={`btn-template ${bg} ${border} hover:bg-transparent`}
            >
              Mulai Belajar
            </Link>
          </div>
        </div>

        <div className="w-full px-3 pt-4 pb-7 md:w-[60%] md:px-5 md:py-7">
          <h4 className="font-semibold text-base md:text-lg">
            Pilihan Materi:
          </h4>

          <Materi items={materi} />
        </div>
      </div>
    </div>
  );
}

function Materi({ items }) {
  return (
    <ol className="list-decimal space-y-1 pl-5 md:text-sm">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
}
