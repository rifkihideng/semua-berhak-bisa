export default function Wilayah() {
  return (
    <section className="w-full flex justify-center px-6 py-20 md:px-12 md:py-20">
      <div className="container">
        <h2 className="font-inter text-2xl text-center font-bold text-black-soft dark:text-light md:text-3xl">
          Zona Wilayah Offline{" "}
          <span className="text-firstcol">#SemuaBerhakBisa</span>
        </h2>
        <p className="mx-auto mt-2 mb-10 max-w-md text-center text-sm text-black-soft dark:text-light md:max-w-xl md:text-base">
          Tersedia sesi pembelajaran offline di beberapa wilayah Tangerang
          untuk memudahkan akses belajar secara langsung dan interaktif.
        </p>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          <Location loc="Kab. Tangerang" district="Kec. Sepatan" />
          <Location loc="Kab. Tangerang" district="Kec. Rajeg" />
          <Location loc="Kab. Tangerang" district="Kec. Sepatan Timur" />
          <Location loc="Kab. Tangerang" district="Kec. Pasar Kemis" />
          <Location loc="Kab. Tangerang" district="Kec. Mauk" />
          <Location loc="Kota Tangerang" district="Kec. Karawaci" />
          <Location loc="Kota Tangerang" district="Kec. Periuk" />
        </div>
      </div>
    </section>
  );
}

function Location({ loc, district }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border-2 border-firstcol/70 bg-white px-3 py-3 shadow-sm transition-all hover:border-firstcol hover:shadow-md dark:bg-dark-gray">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-firstcol/10 text-firstcol">
        <i className="fa-solid text-sm"></i>
      </span>

      <div className="min-w-0 leading-tight">
        <p className="font-bold text-sm text-firstcol">{district}</p>
        <p className="text-xs text-black-soft dark:text-light">{loc}</p>
      </div>
    </div>
  );
}
