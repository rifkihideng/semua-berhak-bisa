import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Tentang from "../pages/Tentang";
import Layanan from "../pages/Layanan";
import Ketentuan from "../pages/Ketentuan";
import Daftar from "../pages/Daftar";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/ketentuan" element={<Ketentuan />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
