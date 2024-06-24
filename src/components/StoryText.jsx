/* eslint-disable react/prop-types */
const StoryText = ({ username, maxLength = 8 }) => {
  const usernameStory =
    username.length > maxLength
      ? `${username.slice(0, maxLength)}...`
      : username;

  return <p className="text-white text-sm mt-1 truncate">{usernameStory}</p>;
};

export default StoryText;
