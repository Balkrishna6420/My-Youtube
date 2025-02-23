import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const Body = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar collapses on smaller screens */}
      <Sidebar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
