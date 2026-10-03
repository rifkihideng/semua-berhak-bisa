import usePageTitle from "../lib/usePageTitle";
import Tujuan from "../components/about/Tujuan";
import VisiMisi from "../components/about/VisiMisi";
import Mentor from "../components/about/Mentor";
import Wilayah from "../components/about/Wilayah";
import Galeri from "../components/about/Galeri";
import Faq from "../components/about/Faq";

export default function Layanan() {
  usePageTitle("Tentang Komunitas | Semua Berhak Bisa");
  return (
    <>
      <Tujuan />
      <VisiMisi />
      <Mentor />
      <Wilayah />
      <Galeri />
      <Faq />
    </>
  );
}
