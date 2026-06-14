import { NavLink } from "react-router-dom";

function Navbar() {
  const pages = [
    { path: "/", label: "Explore" },
    { path: "/subjects", label: "Play" },
    { path: "/result", label: "My Progress" },
  ];

  return (
    <div className="flex items-center justify-between w-full h-16 px-4 sm:px-10 bg-white">
      <div className="flex items-center sm:text-2xl text-xl shrink-0 font-bold">
        <span className="text-[#FF6B00]">Bright</span>
        <span className="text-[#00BCD4]">Roots</span>
      </div>
      <nav className="flex items-center sm:gap-8 gap-1">
        {pages.map((link) => {
          return (
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-sm sm:text-md text-[#FF6B00] hover:bg-orange-100 rounded-lg px-2 py-1 transition-colors duration-200"
                  : "text-sm sm:text-md text-[#888888] hover:bg-zinc-200 rounded-lg px-2 py-1 transition-colors duration-200 whitespace-nowrap"
              }
            >
              {link.label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
