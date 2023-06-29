import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiSpaceShipLine } from "react-icons/ri";
import { TbMovie } from "react-icons/tb";
import { PiTelevisionBold } from "react-icons/pi";
import { RiAppsLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[240px] h-full bg-[#1f1f1f] fixed left-0 top-0 pt-[80px] z-10 hidden lg:block">
      <div className="flex flex-col pl-10 gap-6 border-b-[1px] border-b-[#333] pb-8">
        <div
          className="flex justify-start items-center gap-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <AiOutlineHome className="text-[23px] text-[#aaa]" />
          <p className="text-[#aaa]">Home</p>
        </div>
        <div className="flex justify-start items-center gap-4">
          <RiSpaceShipLine className="text-[23px] text-[#aaa]" />
          <p className="text-[#aaa]">Top IMDB</p>
        </div>
        <div className="flex justify-start items-center gap-4">
          <TbMovie className="text-[23px] text-[#aaa]" />
          <p className="text-[#aaa]">Movies</p>
        </div>
        <div className="flex justify-start items-center gap-4">
          <PiTelevisionBold className="text-[23px] text-[#aaa]" />
          <p className="text-[#aaa]">TV shows</p>
        </div>
        <div className="flex justify-start items-center gap-4">
          <RiAppsLine className="text-[23px] text-[#aaa]" />
          <p className="text-[#aaa]">Android App</p>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-3 border-b-[1px] border-b-[#333]">
        <p className="text-[#aaa]">Genre</p>
        <BsChevronDown className="text-[#aaa]" />
      </div>
      <div className="flex justify-between items-center px-4 py-3">
        <p className="text-[#aaa]">Country</p>
        <BsChevronDown className="text-[#aaa]" />
      </div>
    </div>
  );
};

export default SideBar;
