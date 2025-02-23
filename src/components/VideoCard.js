import React from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        className="rounded-lg w-full object-cover"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul className="mt-2">
        <li className="font-bold py-1 text-sm sm:text-base">{title}</li>
        <li className="text-gray-600 text-xs sm:text-sm">{channelTitle}</li>
        <li className="text-gray-500 text-xs sm:text-sm">{statistics?.viewCount || "N/A"} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
