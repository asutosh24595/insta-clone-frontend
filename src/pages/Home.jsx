import MobNav from "../components/MobNav";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full h-auto flex items-start relative">
        <div className="lg:w-[19%] md:w-[17%] sm-w-none w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block md:block sm:hidden hidden overflow-hidden">
          <Sidebar />
        </div>
        <div className="lg:w-[81%] md:w-[83%] w-full h-auto py-1 px-3">
          <Outlet />
        </div>
        <div className="w-full h-auto py-1 px-3 border-t border-t-gray-500 fixed bottom-0 left-0 lg:hidden md:hidden sm:block block bg-black z-50">
          <MobNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
