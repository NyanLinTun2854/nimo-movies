import React from "react";
import MainNav from "./components/MainNav";
import SideBar from "./components/SideBar";

const Navigations = ({ children }) => {
  return (
    <div className="flex w-full h-[100vh]">
      <MainNav />
      <div className="w-full h-full">
        <SideBar />
        <div className=" pl-0 lg:pl-[240px] w-full h-auto bg-[#121212]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Navigations;
