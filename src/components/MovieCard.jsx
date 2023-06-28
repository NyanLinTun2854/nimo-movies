import React from "react";
import { BiSolidCircle } from "react-icons/bi";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-auto flex flex-col gap-1 relative"
      onClick={() => navigate(`/details/${movie.id}`)}
    >
      <div className="w-full h-auto relative group cursor-pointer">
        <img
          className="w-full h-full"
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          alt=""
        />
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute top-0 left-0 w-full h-full bg-[rgba(22,22,22,.5)]"></div>
        <div className="opacity-0 group-hover:opacity-100 duraction-300 absolute flex justify-center items-center w-[60px] h-[60px] rounded-full bg-white top-[50%] -translate-y-[50%] right-[50%] translate-x-[50%]">
          <TbPlayerPlayFilled className="w-[20px] h-[20px]" />
        </div>
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
