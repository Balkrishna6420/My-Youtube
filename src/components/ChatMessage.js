import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 sm:p-3 shadow-sm rounded-lg bg-gray-100 w-full xs:w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] mx-auto">
      <img
        className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 rounded-full"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOW34PFNB2wJ1Hf5AP88UYB4d-LDcOsC7i4g&s"
      />
      <div className="ml-2 sm:ml-3 flex flex-col">
        <span className="font-semibold text-xs xs:text-sm sm:text-base">{name}</span>
        <span className="text-xs xs:text-sm text-gray-700">{message}</span>
      </div>
    </div>
  );
};


export default ChatMessage;
