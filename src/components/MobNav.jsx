import homeLogo from "../assets/Nav-Logo/home.png";
import { mobNavData } from "../utils/sidebarData";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";

const MobNav = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex items-center gap-x-2">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `w-full h-auto flex items-center gap-x-4 p-3 transition-transform duration-200 ${
              isActive ? "scale-125" : ""
            }`
          }
        >
          <img
            className="w-8 h-8 object-contain focus-within:bg-white"
            src={homeLogo}
            alt="home-logo"
          />
        </NavLink>
        {mobNavData.map((data) => {
          return (
            <NavLink
              key={data.id}
              to={data.link}
              className={({ isActive }) =>
                `w-full h-auto flex items-center gap-x-4 p-3 transition-transform duration-200 ${
                  isActive ? "scale-125" : ""
                }`
              }
            >
              <img
                className="w-8 h-8 object-contain"
                src={data.image}
                alt={data.title}
              />
            </NavLink>
          );
        })}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `w-full h-auto flex items-center gap-x-4 p-3 transition-transform duration-200 ${
              isActive ? "scale-125" : ""
            }`
          }
        >
          <AccountCircleIcon
            sx={{
              width: "40px",
              height: "40px",
              color: "white",
            }}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default MobNav;
