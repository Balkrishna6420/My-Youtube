import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 shadow-sm rounded-lg bg-gray-100 w-full">
      <img
        className="h-8 w-8 rounded-full"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOW34PFNB2wJ1Hf5AP88UYB4d-LDcOsC7i4g&s"
      />
      <div className="ml-2 flex flex-col flex-1 overflow-hidden">
        <span className="font-semibold text-sm">{name}</span>
        <span className="text-xs text-gray-700 break-words">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
