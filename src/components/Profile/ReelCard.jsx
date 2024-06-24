import { Link } from "react-router-dom";
import reelsData from "../../utils/reelsData";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Comment from "../../assets/Icons/Comment";

const ReelCard = () => {
  return (
    <>
      {reelsData.map((reel) => (
        <Link
          to="/profile"
          key={reel.id}
          className="lg:w-[32.95%] lg:h-[48vh] md:h-[40vh] sm:h-[35vh] h-[30vh] md:w-[32.85%] sm:w-[32.5%] w-[32.5%] relative group"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <video
            src={reel.video}
            title="reel-video"
            loop
            muted
            autoPlay
            className="w-full h-full object-cover"
          ></video>
          <div
            className="hidden lg:group-hover:flex md:group-hover:flex items-center justify-center gap-x-3 absolute top-[50%]
          left-[50%] translate-x-[-50%] "
          >
            <div className="flex items-center gap-x-1">
              <FavoriteBorderOutlinedIcon sx={{color:"white"}}/>
              <p className="text-white font-medium">{reel.likeCount}</p>
            </div>
            <div className="flex items-center gap-x-1">
              <Comment />
              <p className="text-white font-medium">{reel.commentCount}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ReelCard;
