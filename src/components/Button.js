import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-4 xs:px-5 py-2 m-1 xs:m-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200 text-sm xs:text-base">
      {name}
    </button>
  );
};

export default Button;
