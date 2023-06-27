import React from "react";
import MainNav from "../components/MainNav";
import SideBar from "../components/SideBar";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div className="flex w-full h-[100vh]">
      <MainNav />
      <div className="w-full h-full">
        <SideBar />
        <div className="pt-[80px] pl-0 lg:pl-[240px] w-full h-auto bg-[#121212]">
          <div className="w-full h-full grid grid-cols-6 gap-x-4 gap-y-4 px-[40px]">
            {movies.map((i) => (
              <MovieCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
