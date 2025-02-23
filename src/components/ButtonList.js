import React from 'react';
import Button from './Button';
const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "Valentines"];
const ButtonList = () => {
  return<div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 p-2 sm:p-4 overflow-x-auto">
    {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
  </div>;
};

export default ButtonList;
