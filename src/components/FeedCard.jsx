import instagramFeed from "../utils/feedData";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Comment from "../assets/Icons/Comment";
import Share from "../assets/Icons/Share";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

const FeedCard = () => {
  return (
    <div>
      {instagramFeed.map((feed) => {
        return (
          <div key={feed.id} className="w-full h-auto mb-6">
            <div className="w-full h-auto flex items-center justify-between mb-2">
              <div className="flex items-center gap-x-2">
                <Link
                  to="/home"
                  className="flex items-center justify-center flex-col flex-shrink-0"
                >
                  <div className="w-10 h-10 rounded-full object-contain p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
                    <img
                      className="rounded-full w-full h-full object-fill p-[2.5px] bg-black"
                      src={feed.profileImg}
                      alt={feed.username}
                    />
                  </div>
                </Link>
                <div className="flex items-center gap-x-2">
                  <p className="text-white text-sm font-medium hover:cursor-pointer">
                    {feed.username}
                  </p>
                  <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                  <p className="text-white text-sm font-medium">{feed.time}</p>
                </div>
              </div>
              <MoreHorizIcon
                sx={{ color: "white", "&:hover": { cursor: "pointer" } }}
              />
            </div>
            <div
              className="w-full lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] lg:h-[70vh]
            md:h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h-[65vh] md:min-h-[55vh] sm:min-h-[50vh] min-h-[45vh]
            border border-gray-300 rounded overflow-hidden mb-3"
            >
              <img
                src={feed.postImg}
                alt={feed.caption}
                className="w-full h-full rounded object-cover"
              />
            </div>
            <div className="w-full h-auto flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <FavoriteBorderOutlinedIcon
                  sx={{ color: "white", "&:hover": { cursor: "pointer" } }}
                />
                <Comment />
                <Share />
              </div>
              <BookmarkBorderIcon
                sx={{ color: "white", "&:hover": { cursor: "pointer" } }}
              />
            </div>
            <Link
              to="/home"
              className="w-full h-auto flex items-center gap-x-2 text-base text-gray-200 font-medium my-2"
            >
              <div className="flex items-center">
                <img
                  className="w-5 h-5 rounded-full object-fill p-[1.5px] bg-black"
                  src={feed.mutualFrndImg1}
                  alt=""
                />
                <img
                  className="w-5 h-5 rounded-full object-fill p-[1.5px] bg-black -ml-3"
                  src={feed.mutualFrndImg2}
                  alt=""
                />
              </div>
              {feed.likeCount} likes
            </Link>
            <div className="w-full h-auto flex items-center gap-x-1">
              <div className="w-full h-auto text-sm text-gray-200 font-thin">
                <Link
                  to="/home"
                  className="text-white font-medium text-sm me-1"
                >
                  {feed.username}
                </Link>
                <span className="tracking-wide">{feed.caption}</span>
                <Link to="/home" className="text-gray-400 text-sm ms-1">
                  more
                </Link>
              </div>
            </div>
            <Link to="/home" className="text-gray-400 font-normal my-2">
              View all {feed.commentCount} comments
            </Link>
            <div className="w-full h-auto flex items-center justify-between border-b border-b-gray-500">
              <input
                className="w-[90%] h-auto bg-transparent border-none outline-none focus:outline-none text-sm text-gray-400 py-3"
                type="text"
                placeholder="Add a comment..."
              />
              <EmojiEmotionsOutlinedIcon sx={{ color: "white", "&:hover": { cursor: "pointer" } }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeedCard;
