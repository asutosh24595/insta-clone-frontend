import FeedCard from "./FeedCard";
import RecommendedUsers from "./RecommendedUsers";
import Stories from "./Stories";
import TopNavMob from "./TopNavMob";

const Feed = () => {
  return (
    <div className="w-full min-h-screen lg:py-7 md:py-7 sm:py-4 p-3 flex items-start gap-x-10">
      <div className="lg:w-[70%] md:w-full sm-w-full w-full h-auto">
        <TopNavMob />
        <Stories />
        <div className="w-full h-auto flex items-center justify-center mt-6">
          <div className="lg:w-[73%] md:w-[73%] sm:w-[80%] w-[80%] h-auto">
            <FeedCard />
          </div>
        </div>
      </div>
      <div className="w-[32%] h-auto lg:block md:hidden sm:hidden hidden">
        <RecommendedUsers/>
      </div>
    </div>
  );
};

export default Feed;
