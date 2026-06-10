import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <main className="max-w-md mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
