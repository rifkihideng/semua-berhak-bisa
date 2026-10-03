export default function Layanan() {
  return (
    <section className="w-full flex justify-center px-6 py-10 md:px-12 md:py-12">
      <div className="container">
        <div className="flex flex-wrap justify-between space-y-6 md:space-x-10">
          <div className="w-full md:w-[30%]">
            <h2 className="text-2xl font-inter font-bold text-black-soft dark:text-light leading-tight md:text-3xl">
              Tujuan <br />
              <span className="text-firstcol">#SemuaBerhakBisa</span>
            </h2>

            <div className="flex space-x-3 mt-2">
              <div className="w-8 h-8 flex justify-center items-center rounded-full border-2 border-firstcol hover:bg-firstcol transition-colors md:w-9 md:h-9 cursor-pointer">
                <Logo icon="" iconType="fa-solid"></Logo>
              </div>

              <div className="w-8 h-8 flex justify-center items-center rounded-full border-2 border-secondcol hover:bg-secondcol transition-colors md:w-9 md:h-9 cursor-pointer">
                <Logo icon="" iconType="fa-solid"></Logo>
              </div>

              <div className="w-8 h-8 flex justify-center items-center rounded-full border-2 border-thirdcol hover:bg-thirdcol transition-colors md:w-9 md:h-9 cursor-pointer">
                <Logo icon="" iconType="fa-solid"></Logo>
              </div>

              <div className="w-8 h-8 flex justify-center items-center rounded-full border-2 border-fourthcol hover:bg-fourthcol transition-colors md:w-9 md:h-9 cursor-pointer">
                <Logo icon="" iconType="fa-brands"></Logo>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[65%] space-y-2">
            <Paragraph
              txt="Semua Berhak Bisa adalah komunitas belajar teknologi
              informasi yang digerakkan secara sukarela, agar setiap orang,
              tanpa memandang latar belakang, dapat mengakses pembelajaran
              IT yang terarah, konsisten, dan gratis."
            ></Paragraph>
            <Paragraph
              txt="Kami fokus pada empat bidang utama: pemrograman, desain
              grafis, jaringan komputer, dan Microsoft Office. Setiap materi
              disampaikan langsung oleh mentor praktisi aktif, sehingga yang
              dipelajari relevan dengan kebutuhan dunia kerja."
            ></Paragraph>
            <Paragraph
              txt="Melalui jadwal belajar yang rutin dan pendampingan yang
              interaktif, kami ingin membangun kebiasaan belajar berkelanjutan
              serta membuka kesempatan yang sama bagi siapa pun untuk
              berkembang di bidang teknologi."
            ></Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}

function Logo({ icon, iconType }) {
  return <i className={`${iconType} text-sm md:text-base`}>{icon}</i>;
}

function Paragraph({ txt }) {
  return <p className="md:text-base">{txt}</p>;
}
