import { NavLink } from "react-router-dom";

function Navbar() {
  const pages = [
    { path: "/", label: "Home" },
    { path: "/subjects", label: "Subjects" },
    { path: "/result", label: "Leaderboard" },
  ];

  return (
    <div className="flex items-center justify-between w-full h-16 px-10 bg-white">
      <div className="flex items-center text-2xl font-bold">
        <span className="text-[#FF6B00]">Bright</span>
        <span className="text-[#00BCD4]">Roots</span>
      </div>
      <nav className="flex items-center gap-8">
        {pages.map((link) => {
          return (
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-md text-[#FF6B00] hover:bg-orange-100 rounded-lg px-2 py-1 transition-colors duration-200"
                  : "text-md text-[#888888] hover:bg-zinc-200 rounded-lg px-2 py-1 transition-colors duration-200"
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
