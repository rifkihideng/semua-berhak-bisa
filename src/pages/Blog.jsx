import { Link } from "react-router-dom";
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

export default function Blog() {
  usePageTitle("Blog & Artikel Edukasi | Semua Berhak Bisa");
  return (
    <section className="w-full flex justify-center px-6 py-16 md:px-12 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
            Blog & <span className="text-firstcol">Artikel Edukasi</span>
          </h2>
          <p className="text-center mt-2 mb-10 md:text-base text-black-soft dark:text-light max-w-md md:max-w-xl">
            Kumpulan tulisan ringan untuk membantu kamu memahami dunia teknologi
            informasi dengan lebih mudah.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              to={`/blog/${a.slug}`}
              className="group flex flex-col bg-white dark:bg-dark-gray rounded-xl shadow overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${CATEGORY_COLOR[a.category] || CATEGORY_COLOR["Tips Belajar"]}`}
                >
                  {a.category}
                </span>
                <h3 className="mt-4 font-inter font-bold text-lg text-black-soft dark:text-light group-hover:text-firstcol transition-colors">
                  {a.title}
                </h3>
                <p className="mt-2 md:text-sm text-black-soft dark:text-light flex-1">
                  {a.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-black-soft/60 dark:text-light/60">
                  <span>{formatTanggal(a.tanggal)}</span>
                  <span>•</span>
                  <span>{a.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
