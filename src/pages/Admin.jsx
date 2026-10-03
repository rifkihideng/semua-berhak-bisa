import { useCallback, useEffect, useState } from "react";
import usePageTitle from "../lib/usePageTitle";

const API_URL = import.meta.env.VITE_API_URL || "";

const BIDANG_LABEL = {
  pemrograman: "Pemrograman",
  design: "Desain Grafis",
  jaringan: "Jaringan Komputer",
  office: "Microsoft Office",
};

const BIDANG_LIST = Object.entries(BIDANG_LABEL).map(([key, label]) => ({
  key,
  label,
}));

const STATUS_LABEL = {
  baru: "Baru",
  diterima: "Diterima",
  ditolak: "Ditolak",
};

const STATUS_STYLE = {
  baru: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  diterima:
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  ditolak: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

function formatTanggal(s) {
  if (!s) return "-";
  const d = new Date(s.replace(" ", "T") + "Z");
  if (Number.isNaN(d.getTime())) return s;
  return d.toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function exportCsv(data) {
  const header = [
    "No",
    "Nama",
    "WhatsApp",
    "Bidang",
    "Asal",
    "Feedback",
    "Status",
    "Tanggal",
  ];
  const rows = data.map((d, i) => [
    i + 1,
    d.nama,
    d.whatsapp,
    BIDANG_LABEL[d.bidang] || d.bidang,
    d.asal || "",
    d.feedback || "",
    STATUS_LABEL[d.status] || STATUS_LABEL.baru,
    formatTanggal(d.created_at),
  ]);
  const csv = [header, ...rows]
    .map((r) =>
      r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(";"),
    )
    .join("\r\n");
  const blob = new Blob(["\uFEFF" + csv], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `pendaftar-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function Admin() {
  usePageTitle("Admin | Semua Berhak Bisa");
  const [password, setPassword] = useState(
    () => sessionStorage.getItem("admin_password") || "",
  );
  const [unlocked, setUnlocked] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [logs, setLogs] = useState([]);
  const [logStatus, setLogStatus] = useState("idle");

  const fetchData = useCallback(async (pw) => {
    setStatus("loading");
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/pendaftaran`, {
        headers: { "x-admin-password": pw },
      });
      const json = await res.json();
      if (res.status === 401) {
        sessionStorage.removeItem("admin_password");
        setUnlocked(false);
        throw new Error("Password salah atau sesi berakhir.");
      }
      if (!res.ok) throw new Error(json.error || "Gagal memuat data.");
      setData(json.data || []);
      setStatus("ready");
      setUnlocked(true);
    } catch (err) {
      setError(err.message || "Gagal memuat data.");
      setStatus("error");
    }
  }, []);

  const fetchLogs = useCallback(async (pw) => {
    setLogStatus("loading");
    try {
      const res = await fetch(`${API_URL}/api/admin-login-log`, {
        headers: { "x-admin-password": pw },
      });
      const json = await res.json();
      if (res.status === 401) {
        setLogStatus("ready");
        return;
      }
      if (!res.ok) throw new Error(json.error || "Gagal memuat log.");
      setLogs(json.data || []);
      setLogStatus("ready");
    } catch {
      setLogStatus("ready");
    }
  }, []);

  useEffect(() => {
    if (password) {
      fetchData(password);
      fetchLogs(password);
    }
  }, [password, fetchData, fetchLogs]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch(`${API_URL}/api/admin-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Password salah.");
      sessionStorage.setItem("admin_password", password);
      setUnlocked(true);
      await fetchData(password);
      await fetchLogs(password);
    } catch (err) {
      setLoginError(err.message || "Password salah.");
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`${API_URL}/api/pendaftaran/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Gagal memperbarui status.");
      await fetchData(password);
    } catch (err) {
      window.alert(err.message || "Gagal memperbarui status.");
    }
  };

  const deletePendaftar = async (id) => {
    if (!window.confirm("Yakin ingin menghapus pendaftar ini?")) return;
    try {
      const res = await fetch(`${API_URL}/api/pendaftaran/${id}`, {
        method: "DELETE",
        headers: { "x-admin-password": password },
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Gagal menghapus data.");
      await fetchData(password);
    } catch (err) {
      window.alert(err.message || "Gagal menghapus data.");
    }
  };

  if (!unlocked) {
    return (
      <section className="w-full flex justify-center px-6 py-16 md:px-12 md:py-24">
        <div className="container max-w-md">
          <div className="bg-white dark:bg-dark-gray rounded-xl shadow p-6 md:p-8">
            <h2 className="font-inter text-2xl font-bold text-black-soft dark:text-light">
              Login <span className="text-firstcol">Admin</span>
            </h2>
            <p className="mt-1 mb-5 md:text-sm text-black-soft dark:text-light">
              Masukkan password untuk melihat data pendaftar.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password admin"
                className="w-full rounded border border-gray-300 dark:border-dark-gray dark:bg-black-soft dark:text-light px-3 py-2 md:text-sm focus:outline-none focus:border-firstcol"
              />
              {loginError && (
                <p className="text-secondcol md:text-sm">{loginError}</p>
              )}
              <button
                type="submit"
                className="w-full btn-template font-semibold md:text-sm"
              >
                Masuk
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full flex justify-center px-6 py-16 md:px-12 md:py-24">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="font-inter text-2xl font-bold text-black-soft dark:text-light md:text-3xl">
              Daftar <span className="text-firstcol">Pendaftar</span>
            </h2>
            <p className="mt-1 md:text-sm text-black-soft dark:text-light">
              Total: {data.length} pendaftar
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => exportCsv(data)}
              disabled={data.length === 0}
              className="btn-template font-semibold md:text-sm"
            >
              Export CSV
            </button>
            <button
              onClick={() => {
                fetchData(password);
                fetchLogs(password);
              }}
              className="btn-template font-semibold md:text-sm"
            >
              Refresh
            </button>
          </div>
        </div>

        {status === "ready" && data.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {BIDANG_LIST.map(({ key, label }) => {
              const count = data.filter((d) => d.bidang === key).length;
              const pct = Math.round((count / data.length) * 100);
              return (
                <div
                  key={key}
                  className="bg-white dark:bg-dark-gray rounded-xl shadow p-4"
                >
                  <p className="md:text-sm text-black-soft dark:text-light">
                    {label}
                  </p>
                  <p className="mt-1 font-inter text-2xl font-bold text-firstcol">
                    {count}
                  </p>
                  <div className="mt-2 h-2 w-full rounded bg-light dark:bg-black-soft overflow-hidden">
                    <div
                      className="h-full bg-firstcol"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {status === "loading" && (
          <p className="text-black-soft dark:text-light md:text-sm">
            Memuat data...
          </p>
        )}

        {status === "error" && (
          <p className="text-secondcol md:text-sm">{error}</p>
        )}

        {status === "ready" &&
          (data.length === 0 ? (
            <p className="text-black-soft dark:text-light md:text-sm">
              Belum ada pendaftar.
            </p>
          ) : (
            <div className="overflow-x-auto rounded-xl shadow">
              <table className="w-full text-left bg-white dark:bg-dark-gray">
                <thead className="bg-light dark:bg-black-soft text-black-soft dark:text-light">
                  <tr>
                    <th className="px-4 py-3 md:text-sm">No</th>
                    <th className="px-4 py-3 md:text-sm">Nama</th>
                    <th className="px-4 py-3 md:text-sm">WhatsApp</th>
                    <th className="px-4 py-3 md:text-sm">Bidang</th>
                    <th className="px-4 py-3 md:text-sm">Asal</th>
                    <th className="px-4 py-3 md:text-sm">Feedback</th>
                    <th className="px-4 py-3 md:text-sm">Status</th>
                    <th className="px-4 py-3 md:text-sm">Tanggal</th>
                    <th className="px-4 py-3 md:text-sm">Aksi</th>
                  </tr>
                </thead>
                <tbody className="text-black-soft dark:text-light">
                  {data.map((d, i) => (
                    <tr
                      key={d.id}
                      className="border-t border-gray-200 dark:border-dark-gray"
                    >
                      <td className="px-4 py-3 md:text-sm">{i + 1}</td>
                      <td className="px-4 py-3 md:text-sm">{d.nama}</td>
                      <td className="px-4 py-3 md:text-sm">{d.whatsapp}</td>
                      <td className="px-4 py-3 md:text-sm">
                        {BIDANG_LABEL[d.bidang] || d.bidang}
                      </td>
                      <td className="px-4 py-3 md:text-sm">{d.asal || "-"}</td>
                      <td className="px-4 py-3 md:text-sm max-w-[16rem]">
                        {d.feedback ? (
                          <span className="block whitespace-pre-line break-words text-black-soft dark:text-light">
                            {d.feedback}
                          </span>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="px-4 py-3 md:text-sm">
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
                            STATUS_STYLE[d.status] || STATUS_STYLE.baru
                          }`}
                        >
                          {STATUS_LABEL[d.status] || STATUS_LABEL.baru}
                        </span>
                      </td>
                      <td className="px-4 py-3 md:text-sm">
                        {formatTanggal(d.created_at)}
                      </td>
                      <td className="px-4 py-3 md:text-sm">
                        <div className="flex flex-wrap gap-1">
                          {d.status !== "diterima" && (
                            <button
                              onClick={() => updateStatus(d.id, "diterima")}
                              className="rounded px-2 py-1 text-xs font-semibold bg-green-600 text-white hover:bg-green-700"
                            >
                              Terima
                            </button>
                          )}
                          {d.status !== "ditolak" && (
                            <button
                              onClick={() => updateStatus(d.id, "ditolak")}
                              className="rounded px-2 py-1 text-xs font-semibold bg-amber-500 text-white hover:bg-amber-600"
                            >
                              Tolak
                            </button>
                          )}
                          <button
                            onClick={() => deletePendaftar(d.id)}
                            className="rounded px-2 py-1 text-xs font-semibold bg-red-600 text-white hover:bg-red-700"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

        <div className="mt-12">
          <h3 className="font-inter text-xl font-bold text-black-soft dark:text-light mb-4">
            Log Aktivitas <span className="text-firstcol">Login</span>
          </h3>
          {logStatus === "loading" ? (
            <p className="text-black-soft dark:text-light md:text-sm">
              Memuat log...
            </p>
          ) : logs.length === 0 ? (
            <p className="text-black-soft dark:text-light md:text-sm">
              Belum ada aktivitas login.
            </p>
          ) : (
            <div className="overflow-x-auto rounded-xl shadow">
              <table className="w-full text-left bg-white dark:bg-dark-gray">
                <thead className="bg-light dark:bg-black-soft text-black-soft dark:text-light">
                  <tr>
                    <th className="px-4 py-3 md:text-sm">No</th>
                    <th className="px-4 py-3 md:text-sm">Status</th>
                    <th className="px-4 py-3 md:text-sm">IP</th>
                    <th className="px-4 py-3 md:text-sm">Waktu</th>
                  </tr>
                </thead>
                <tbody className="text-black-soft dark:text-light">
                  {logs.map((l, i) => (
                    <tr
                      key={l.id}
                      className="border-t border-gray-200 dark:border-dark-gray"
                    >
                      <td className="px-4 py-3 md:text-sm">{i + 1}</td>
                      <td className="px-4 py-3 md:text-sm">
                        {Number(l.success) === 1 ? "Berhasil" : "Gagal"}
                      </td>
                      <td className="px-4 py-3 md:text-sm">{l.ip || "-"}</td>
                      <td className="px-4 py-3 md:text-sm">
                        {formatTanggal(l.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}