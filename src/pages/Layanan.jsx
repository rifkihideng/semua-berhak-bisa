import usePageTitle from "../lib/usePageTitle";
import Bidang from "../components/services/Bidang";
import KerjaSama from "../components/services/KerjaSama";

export default function Layanan() {
  usePageTitle("Bidang Layanan | Semua Berhak Bisa");
  return (
    <>
      <Bidang />
      <KerjaSama />
    </>
  );
}
