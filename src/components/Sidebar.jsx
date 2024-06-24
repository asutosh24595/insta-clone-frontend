import { NavLink } from "react-router-dom";
import instaLogo from "../assets/Logo/instagram.png";
import instaIcon from "../assets/Logo/insta-mid.png";
import homeLogo from "../assets/Nav-Logo/home.png";
import { sidebarData } from "../utils/sidebarData";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import More from "./More";

const Sidebar = () => {
  return (
    <div className="w-full h-full">
      <NavLink
        to="/home"
        className="mb-8 px-2 lg:block md:hidden sm:hidden hidden"
      >
        <img src={instaLogo} className="w-28 h-auto" alt="insta-logo" />
      </NavLink>
      <NavLink
        to="/home"
        className="mb-8 px-2 lg:hidden md:block sm:block block"
      >
        <img src={instaIcon} className="w-28 h-auto" alt="insta-icon" />
      </NavLink>
      <div className="w-full h-auto flex flex-col items-start gap-y-1">
        <NavLink
          to="/home"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 ease-out rounded-md duration-500 group"
        >
          <img
            className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
            src={homeLogo}
            alt="home-logo"
          />
          <p className="text-white lg:block md:hidden sm:hidden hidden">Home</p>
        </NavLink>
        {sidebarData.map((data) => {
          return (
            <NavLink
              key={data.id}
              to="/home"
              className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 ease-out rounded-md duration-500 group"
            >
              <img
                className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300"
                src={data.image}
                alt={data.title}
              />
              <p className="text-white lg:block md:hidden sm:hidden hidden">
                {data.title}
              </p>
            </NavLink>
          );
        })}
        <NavLink
          to="/profile"
          className="w-full h-auto flex items-center gap-x-4 p-3 hover:bg-gray-800/60 ease-out rounded-md duration-500 group"
        >
          <AccountCircleIcon
            sx={{
              width: "26px",
              height: "26px",
              color: "white",
              transition: "transform 0.3s ease-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          <p className="text-white lg:block md:hidden sm:hidden hidden">
            Profile
          </p>
        </NavLink>
        <NavLink
          to="/home"
          className="w-full h-auto p-2 bg-transparent hover:bg-gray-800/60 ease-out rounded-md duration-500 group mb-2"
        >
          <p className="lg:block md:block sm:hidden hidden">
            <More />
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
