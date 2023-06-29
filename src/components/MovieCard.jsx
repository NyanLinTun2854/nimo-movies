import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { BiSolidCircle } from "react-icons/bi";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const ate = new Date(movie?.release_date);
  console.log(ate);
  const date = ate.toString().slice(8, 10);
  const month = ate.toString().slice(4, 7);
  const year = ate.toString().slice(11, 15);
  console.log(date, month, year);

  const percent = movie?.vote_average?.toFixed(1) * 10;

  return (
    <div
      className="w-full h-auto flex flex-col gap-1 relative"
      onClick={() => navigate(`/details/${movie.id}`)}
    >
      <div className="w-full h-[260px] lg:h-[220px] ml:h-[260px] relative group cursor-pointer">
        <img
          className="w-full h-full"
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          alt=""
        />
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute top-0 left-0 w-full h-full bg-[rgba(22,22,22,.5)]"></div>
        <div className="opacity-0 group-hover:opacity-100 duraction-300 absolute flex justify-center items-center w-[60px] h-[60px] rounded-full bg-white top-[50%] -translate-y-[50%] right-[50%] translate-x-[50%]">
          <TbPlayerPlayFilled className="w-[20px] h-[20px]" />
        </div>
        <div className="w-[40px] h-[40px] absolute -bottom-5 left-2">
          <CircularProgressbar
            value={percent}
            text={`${percent}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#081C22",
              fontWeight: "500",
              textColor: "white",
              pathColor: percent >= 70 ? "#21D07A" : "#D2D531",
              trailColor: percent >= 70 ? "#204529" : "rgb(66,61,15)",
            })}
          />
        </div>
      </div>
      <p className="text-[#ececff] text-[14px] mt-4 max-w-full movie-title font-bold">
        {movie.original_title}
      </p>
      <div className="flex items-center">
        <p className="text-[#fff] text-[12px]">{month}</p>
        <p className="text-[#fff] text-[12px] pl-1">{date},</p>
        <p className="text-[#fff] text-[12px] pl-1">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
