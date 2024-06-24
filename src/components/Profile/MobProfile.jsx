import { Link } from "react-router-dom";
import LinkIcon from "../../assets/Icons/LinkIcon";
import highlightData from "../../utils/highlightsData";
import Tab from "./Tab";
import Posts from "./Posts";
import Reels from "./Reels";
import { useState } from "react";
import postIcon from "../../assets/Icons/post.png";
import reelIcon from "../../assets/Icons/reel.png";
import tagIcon from "../../assets/Icons/tag.png";
import Tags from "./Tags";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import createLogo from "../../assets/Nav-Logo/create.png";
import threadsLogo from "../../assets/Nav-Logo/threads.png";
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import More from "../More";

const MobProfile = () => {
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
    <div className="w-full h-auto lg:hidden md:hidden sm:block block text-white">
      <div className="flex items-center justify-between mb-6">
        <p className="text-xl">
          {" "}
          tech@savy{" "}
          <span>
            <KeyboardArrowDownIcon />
          </span>
        </p>
        <div className="flex items-center gap-x-3.5 p-2">
          <img src={threadsLogo} alt="threads-logo" className="w-6" />
          <img src={createLogo} alt="create-logo" className="w-6" />
          <More/>
        </div>
      </div>
      <div className="w-full h-auto flex items-center gap-x-8 justify-between mb-3 px-2">
        <img
          className="rounded-full w-20 h-20 object-cover"
          src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
          alt="profile-pic"
        />
        <div className="w-full h-auto flex items-center justify-around">
          <div className="flex items-center flex-col py-3">
            <h6 className="text-white font-medium mb-0">10</h6>
            <p className="text-sm text-white font-thin">posts</p>
          </div>
          <div className="flex items-center flex-col py-3">
            <h6 className="text-white font-medium mb-0">120</h6>
            <p className="text-sm text-white font-thin">followers</p>
          </div>
          <div className="flex items-center flex-col py-3">
            <h6 className="text-white font-medium mb-0">80</h6>
            <p className="text-sm text-white font-thin">following</p>
          </div>
        </div>
      </div>
      <div className="px-2">
      <p className="text-gray-100 ">Asutosh Shukla</p>
      <p className="text-gray-100 text-sm ">
        <i>Never Give Up</i> <br />
        Professional Account <br />
        Tech Enthusiast <br />
        Coder <br />
        Learner <br />
        Full-Stack Developer <br />
      </p>
      <p className="text-gray-100 flex items-center gap-x-2 mb-5">
        <LinkIcon />
        <Link to="/profile" className="text-blue-500 hover:underline">
          www.tech-savy.com
        </Link>
      </p>
      </div>
        <div className="w-full h-auto flex items-center gap-x-2 mb-4 p-2 font-semibold text-white">
          <button className="w-[45%] bg-gray-700 rounded-lg px-4 py-1.5">
            Edit profile
          </button>
          <button className="w-[45%] bg-gray-700 rounded-lg px-4 py-1.5 ">
            Share profile
          </button>
          <button className="w-[10%] bg-gray-700 rounded-lg px-2 py-1.5">
            <PersonAddOutlinedIcon/>
          </button>
        </div>
      <div className="w-full h-auto flex items-center gap-x-9 mb-8">
        <div className="w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
          {highlightData.map((highlight) => (
            <Link
              key={highlight.id}
              to="/profile"
              className="flex flex-col flex-shrink-0 items-center justify-between"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r object-cover p-[2x] from-gray-700 to-gray-700 ">
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
      <div className="w-full h-auto flex items-center justify-between mb-4 border-b border-gray-500">
        <Tab
          label=""
          icon={postIcon}
          isActive={activeTab === "posts"}
          onClick={() => handleTabClick("posts")}
        />
        <Tab
          icon={reelIcon}
          isActive={activeTab === "reels"}
          onClick={() => handleTabClick("reels")}
        />
        <Tab
          icon={tagIcon}
          isActive={activeTab === "tagged"}
          onClick={() => handleTabClick("tagged")}
        />
      </div>
      <div
        className={`mt-4 mb-16 transition-opacity duration-300 ease-out ${
          isContentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {activeTab === "posts" && <Posts />}
        {activeTab === "reels" && <Reels />}
        {activeTab === "tagged" && <Tags />}
      </div>
    </div>
  );
};

export default MobProfile;
