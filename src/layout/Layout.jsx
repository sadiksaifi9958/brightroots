import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-[#FFF8F2] w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
