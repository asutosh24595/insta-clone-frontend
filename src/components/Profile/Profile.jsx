import { Link } from "react-router-dom";
import LinkIcon from "../../assets/Icons/LinkIcon";
import highlightData from "../../utils/highlightsData";
import Tab from "./Tab";
import postIcon from "../../assets/Icons/post.png";
import tagIcon from "../../assets/Icons/tag.png";
import savedIcon from "../../assets/Icons/saved.png";
import { useState } from "react";
import Posts from "./Posts";
import Reels from "./Reels";
import Tags from "./Tags";
import Settings from "../../assets/Icons/Settings";
import Footer from "../Footer";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [isContentVisible, setContentVisible] = useState(true);

  const handleTabClick = (tab) => {
    setContentVisible(false);

    setTimeout(() => {
      setActiveTab(tab);
      setContentVisible(true);
    }, 300);
  };

  return (
    <div className="w-full h-auto lg:block md:block sm:hidden hidden">
      <div className="w-full h-auto flex items-center lg:gap-x-16 md:gap-x-8 sm:gap-x-12 gap-x-8 mb-10">
        <img
          className="rounded-full lg:w-44 md:w-36 sm:w-36 w-32 lg:h:44 md:h-36 sm:h-36 h-36 lg:ml-10 md:ml-8 object-cover"
          src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
          alt="profile-pic"
        />
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-x-5 mb-4">
            <Link to="/profile" className="text-lg text-gray-200">
              tech@savy
            </Link>
            <div className="flex items-center gap-x-2">
              <button className="bg-gray-700 rounded-lg px-4 py-1.5 text-white hover:bg-[#2f2f2f] ease-out duration-150 md:text-xs lg:text-base">
                Edit Profile
              </button>
              <button className="bg-gray-700 rounded-lg px-4 py-1.5 text-white hover:bg-[#2f2f2f] ease-out duration-150 md:text-xs lg:block lg:text-base">
                View Archive
              </button>
            </div>
            <Settings/>
          </div>
          <div className="flex items-center gap-x-6 mb-4 text-base text-gray-100">
            <h6>6 posts</h6>
            <Link to="/profile">120 followers</Link>
            <Link to="/profile">80 following</Link>
          </div>
          <p className="text-gray-100 ">Asutosh Shukla</p>
          <p className="text-gray-100 text-sm ">
            <i>Never Give Up</i> <br />
            Professional Account <br />
            Tech Enthusiast <br />
            Coder <br />
            Learner <br />
            Full-Stack Developer <br />
          </p>
          <p className="text-gray-100 flex items-center gap-x-2">
            <LinkIcon />
            <Link to="/profile" className="text-blue-500 hover:underline">
              www.tech-savy.com
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full h-auto flex items-center gap-x-9 mb-10">
        <div className="max-w-[61vx] w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
          {highlightData.map((highlight) => (
            <Link
              key={highlight.id}
              to="/profile"
              className="flex flex-col flex-shrink-0 items-center justify-between"
            >
              <div className="w-28 h-28 rounded-full bg-gradient-to-r object-cover p-[2x] from-gray-700 to-gray-700 ">
                <img
                  className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                  src={highlight.img}
                  alt={highlight.name}
                />
              </div>
              <p className="text-white text-sm mt-1">{highlight.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full h-auto flex items-center justify-center gap-x-6 mb-4 border-t border-gray-500">
        <Tab
          label="POSTS"
          icon={postIcon}
          isActive={activeTab === "posts"}
          onClick={() => handleTabClick("posts")}
        />
        <Tab
          label="SAVED"
          icon={savedIcon}
          isActive={activeTab === "reels"}
          onClick={() => handleTabClick("reels")}
        />
        <Tab
          label="TAGGED"
          icon={tagIcon}
          isActive={activeTab === "tagged"}
          onClick={() => handleTabClick("tagged")}
        />
      </div>
      <div
        className={`mt-4 transition-opacity duration-300 ease-out ${
          isContentVisible ? "opacity-100" : "opacity-0"
        }`}>
        {activeTab === "posts" && <Posts/>}
        {activeTab === "reels" && <Reels/>}
        {activeTab === "tagged" && <Tags/>}
      </div>
      <div className="text-white font-medium w-full">
      <Footer/>
      </div>
    </div>
  );
};

export default Profile;
