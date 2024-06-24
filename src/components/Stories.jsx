import { Link } from "react-router-dom";
import storiesData from "../utils/storiesData";
import StoryText from "./StoryText";

const Stories = () => {
  return (
    <div className="lg:max-w-[50vw] md:max-w-[80vw] sm:max-w-full max-w-full w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
      <Link
        to="/home"
        className="flex items-center justify-center flex-col flex-shrink-0"
      >
        <div className="w-16 h-16 rounded-full object-contain p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48] ">
          <img
            className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
            src="https://media.istockphoto.com/id/1479694921/photo/blossoming-lilac-tree-branch-background.jpg?s=1024x1024&w=is&k=20&c=OR--s1v2nM1QGoceNlIKVNK3haLnpAbocIc6Fngr21o="
          />
        </div>
        <StoryText username="flowerpower" />
      </Link>
      {storiesData.map((story) => {
        return (
          <Link
            key={story.id}
            to="/home"
            className="flex items-center justify-center flex-col flex-shrink-0"
          >
            <div className="w-16 h-16 rounded-full object-contain p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
              <img
                className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                src={story.imageUrl}
                alt="story-img"
              />
            </div>
            <StoryText username={story.username} />
          </Link>
        );
      })}
    </div>
  );
};

export default Stories;
