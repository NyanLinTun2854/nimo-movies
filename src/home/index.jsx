import React, { useEffect, useState } from "react";
import MainNav from "../components/MainNav";
import SideBar from "../components/SideBar";
import MovieCard from "../components/MovieCard";
import Navigations from "../Navigations";
import ApiRequest from "../api/ApiRequest";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let obj = {
      method: "get",
      url: "popular",
      params: {
        language: "en-Us",
        page: 1,
      },
    };
    let response = await ApiRequest(obj);
    if (response.status === 200) {
      setMovies(response.data.results);
    }
  };
  return (
    <Navigations>
      <div className="w-full h-full grid grid-cols-6 gap-x-4 gap-y-4 px-[40px]">
        {movies?.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </Navigations>
  );
};

export default Home;
