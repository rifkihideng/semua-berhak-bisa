import usePageTitle from "../lib/usePageTitle";
import Hero from "../components/home/Hero";
import KenapaKami from "../components/home/KenapaKami";
import Statistik from "../components/home/Statistik";
import MetodeBelajar from "../components/home/MetodeBelajar";
import Testimoni from "../components/home/Testimoni";
import Konsultasi from "../components/home/Konsultasi";

export default function Home() {
  usePageTitle("Semua Berhak Bisa | Bangun Keahlianmu di Bidang Teknologi Informasi");
  return (
    <>
      <Hero />
      <KenapaKami />
      <Statistik />
      <MetodeBelajar />
      <Testimoni />
      <Konsultasi />
    </>
  );
}
