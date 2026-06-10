import { NavLink } from "react-router-dom";

function Navbar() {
  const pages = [
    { path: "/", label: "Home" },
    { path: "/subjects", label: "Subjects" },
    { path: "/result", label: "Leaderboard" },
  ];

  return (
    <div className="flex items-center justify-between p-5 w-full h-16 px-10">
      <div className="flex items-center text-2xl font-bold">
        <p className="text-[#FF6B00]">Bright</p>
        <p className="text-[#00BCD4]">Roots</p>
      </div>
      <div className="flex items-center gap-8">
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
      </div>
    </div>
  );
}

export default Navbar;
