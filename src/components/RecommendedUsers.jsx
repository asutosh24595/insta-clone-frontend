import { linksData } from "../utils/linksData";
import recommendUserData from "../utils/recommendedUsersData";
import ProfileNav from "./ProfileNav";
import { Link } from "react-router-dom";

const RecommendedUsers = () => {
  return (
    <div className="w-full h-auto py-3">
      <ProfileNav />
      <div className="w-full h-auto my-8">
        <div className="w-full h-auto flex items-center justify-between mb-4">
          <h6 className="text-sm text-gray-400 font-medium">
            Suggested for you
          </h6>
          <Link
            to="/home"
            className="text-xs font-semibold text-gray-300 hover:text-gray-600"
          >
            See All
          </Link>
        </div>
        {recommendUserData.map((data) => {
          return (
            <div
              key={data.id}
              className="w-full h-auto flex items-center justify-between mb-4"
            >
              <Link
                to="/profile"
                className="w-full h-auto flex items-center gap-x-2"
              >
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={data.profileImg}
                  alt={data.username}
                />
                <div className="flex items-start gap-y-0 flex-col">
                    <p className="text-[0.9rem] text-white font-medium mb-0">{data.username}</p>
                    <h6 className="text-xs text-gray-500 font-normal">Suggested for you</h6>
                </div>
              </Link>
              <Link to="/home" className="text-[.855rem] text-blue-500 hover:text-gray-200">
                {data.follow}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="w-full h-auto">
            <div className="w-full h-auto flex items-center gap-x-[4px] flex-wrap mb-3">
                {linksData.map(link => (
                    <div key={link.id} className="w-fit h-auto flex items-center gap-x-[4px]">
                        <Link to="/home" className="text-[0.8rem] text-[#5b5b5b] hover:underline">{link.title}</Link>
                        <div className="w-[1.5px] h-[1.5px] bg-[#5b5b5b] round-full"></div>
                    </div>
                ))}
            </div>
            <p className="text-sm text-[#5b5b5b] ">&copy; 2024 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
};

export default RecommendedUsers;
