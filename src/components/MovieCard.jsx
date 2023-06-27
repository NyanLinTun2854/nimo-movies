import React from "react";
import { BiSolidCircle } from "react-icons/bi";

const MovieCard = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-2">
      <div className="w-full h-auto">
        <img
          className="w-full h-full"
          src="https://img.tinyzonetv.to/xxrz/250x400/202/1e/9e/1e9efbf118acd1e7661d144868dc5ef5/1e9efbf118acd1e7661d144868dc5ef5.jpg"
          alt=""
        />
      </div>
      <p className="text-[#ececff] text-[14px]">John Wick</p>
      <div className="flex items-center">
        <p className="border-[1px] border-[#666] rounded-sm text-[#aaa] font-bold text-[12px] px-[2px] py-[2px]">
          HD
        </p>
        <p className="text-[#aaa] text-[.95em] pl-2">2023</p>
        <p className="px-[10px] text-[#aaa]">
          <BiSolidCircle className="text-[6px]" />
        </p>
        <p className="text-[#aaa] text-[.95em]">110m</p>
      </div>
    </div>
  );
};

export default MovieCard;
