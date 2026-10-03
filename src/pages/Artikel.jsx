import { Link, useParams } from "react-router-dom";
import usePageTitle from "../lib/usePageTitle";
import { ARTICLES, CATEGORY_COLOR } from "../data/blog";

function formatTanggal(s) {
  if (!s) return "-";
  const d = new Date(s + "T00:00:00");
  if (Number.isNaN(d.getTime())) return s;
  return d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Artikel() {
  const { slug } = useParams();
  const article = ARTICLES.find((a) => a.slug === slug);
  usePageTitle(
    article
      ? `${article.title} | Semua Berhak Bisa`
      : "Artikel Tidak Ditemukan | Semua Berhak Bisa",
  );

  if (!article) {
    return (
      <section className="w-full flex justify-center px-6 py-20 md:px-12 md:py-24">
        <div className="container max-w-xl text-center">
          <h2 className="font-inter text-2xl font-bold text-black-soft dark:text-light">
            Artikel Tidak Ditemukan
          </h2>
          <p className="mt-2 md:text-base text-black-soft dark:text-light">
            Artikel yang kamu cari tidak tersedia atau sudah dipindahkan.
          </p>
          <Link to="/blog" className="mt-6 inline-block btn-template font-semibold md:text-sm">
            Kembali ke Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full flex justify-center px-6 py-16 md:px-12 md:py-24">
      <div className="container max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 md:text-sm font-semibold text-firstcol hover:underline"
        >
          <i className="fa-solid fa-arrow-left"></i>
          Kembali ke Blog
        </Link>

        <img
          src={article.image}
          alt={article.title}
          className="mt-6 w-full h-56 md:h-72 object-cover rounded-2xl shadow"
        />

        <div className="mt-6">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${CATEGORY_COLOR[article.category] || CATEGORY_COLOR["Tips Belajar"]}`}
          >
            {article.category}
          </span>
          <h2 className="mt-4 font-inter text-2xl font-bold text-black-soft dark:text-light md:text-4xl">
            {article.title}
          </h2>
          <div className="mt-3 flex items-center gap-2 text-sm text-black-soft/60 dark:text-light/60">
            <span>{formatTanggal(article.tanggal)}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {article.body.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h3 className="font-inter font-bold text-xl text-black-soft dark:text-light mb-2">
                  {section.heading}
                </h3>
              )}
              {section.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className="md:text-base text-black-soft dark:text-light leading-relaxed"
                >
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 space-y-2">
                  {section.list.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-x-2 md:text-base text-black-soft dark:text-light"
                    >
                      <span className="text-firstcol font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-firstcol to-[#0e7490] text-white text-center p-8">
          <h3 className="font-inter text-xl font-bold md:text-2xl">
            Ingin Belajar Langsung Bareng Mentor?
          </h3>
          <p className="mt-2 md:text-base text-white/90">
            Gabung kelas gratis #SemuaBerhakBisa, Senin–Kamis pukul 20.00 WIB.
          </p>
          <Link
            to="/daftar"
            className="mt-6 inline-block bg-white text-firstcol font-semibold rounded px-6 py-3 md:text-sm hover:bg-light transition-colors"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
