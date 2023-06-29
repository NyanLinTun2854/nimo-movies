import React, { useEffect, useState } from "react";
import MainNav from "../components/MainNav";
import SideBar from "../components/SideBar";
import MovieCard from "../components/MovieCard";
import Navigations from "../Navigations";
import ApiRequest from "../api/ApiRequest";
import InfiniteScroll from "react-infinite-scroll-component";
import { setAppLoading } from "../redux/appLoading/appLoadingSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);
  const state = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();

  console.log(state);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    dispatch(setAppLoading(true));
    let obj = {
      method: "get",
      url: "popular",
      params: {
        language: "en-Us",
        page,
      },
    };
    let response = await ApiRequest(obj);
    dispatch(setAppLoading(true));
    console.log(response);
    if (response.status === 200) {
      setMovies([...movies, ...response.data.results]);
      setLastPage(response.data.total_pages);
    }
  };

  const loadMore = () => {
    setPage(page + 1);
    getData();
  };
  return (
    <Navigations>
      <div className="pt-[90px] w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 extra:!grid-cols-12 gap-x-4 gap-y-4 px-3 sm:px-[40px]">
        {movies?.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
      <InfiniteScroll
        dataLength={movies.length}
        next={loadMore}
        hasMore={true}
        loader={
          lastPage >= page ? (
            <div className="w-full text-center bg-red-500 ">loading</div>
          ) : (
            <div className="w-full text-center bg-green-500">end</div>
          )
        }
      ></InfiniteScroll>
    </Navigations>
  );
};

export default Home;
