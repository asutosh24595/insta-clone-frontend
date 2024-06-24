import { Link } from "react-router-dom";

const ProfileNav = () => {
  return (
    <div className="w-full h-auto flex items-center justify-between">
      <Link to="/profile" className="w-full h-auto flex items-center gap-x-2">
        <img
          className="w-12 h-12 rounded-full"
          src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
          alt="profile pic"
        />
        <div className="flex items-start gap-y-0 flex-col">
          <p className="text-[0.9rem] text-white font-medium mb-0">
            tech@savy
          </p>
          <h6 className="text-[0.935rem] text-gray-500 font-normal">
            Asutosh Shukla
          </h6>
        </div>
      </Link>
      <Link to="/home" className="text-[0.855rem] text-blue-500 hover:text-gray-200">
        Switch
      </Link>
    </div>
  );
};

export default ProfileNav;
