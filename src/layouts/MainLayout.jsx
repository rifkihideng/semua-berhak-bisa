import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Preloader from "../components/common/Preloader";
import WhatsAppFloat from "../components/common/WhatsAppFloat";
import BackToTop from "../components/common/BackToTop";

export default function MainLayout() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
