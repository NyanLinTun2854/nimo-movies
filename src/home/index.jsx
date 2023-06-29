import React, { useEffect, useState } from "react";
import MainNav from "../components/MainNav";
import SideBar from "../components/SideBar";
import MovieCard from "../components/MovieCard";
import Navigations from "../Navigations";
import ApiRequest from "../api/ApiRequest";
import InfiniteScroll from "react-infinite-scroll-component";
import { setAppLoading } from "../redux/appLoading/appLoadingSlice";
import { useDispatch, useSelector } from "react-redux";
import AppLoading from "../components/AppLoading";
import { BeatLoader } from "react-spinners";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);
  const state = useSelector((state) => state.loading.loading);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  console.log(state);

  useEffect(() => {
    getData(1);
  }, []);

  const getData = async (num) => {
    if (num == 1) {
      dispatch(setAppLoading(true));
    }
    let obj = {
      method: "get",
      url: "movie/popular",
      params: {
        language: "en-Us",
        page: num,
      },
    };
    let response = await ApiRequest(obj);
    if (num == 1) {
      dispatch(setAppLoading(false));
    }
    console.log(response);
    if (response.status === 200) {
      setMovies([...movies, ...response.data.results]);
      setLastPage(response.data.total_pages);
    }
  };

  const loadMore = () => {
    let pageNum = page + 1;
    if (lastPage >= pageNum) {
      setPage(pageNum);
      getData(pageNum);
    } else {
      return;
    }
  };
  return (
    <Navigations>
      {state ? (
        <AppLoading />
      ) : (
        <>
          <div className="pt-[90px] max-w-[1400px] mx-auto h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 extra:!grid-cols- gap-x-4 gap-y-4 px-3 sm:px-[40px]">
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
                <div className="w-full text-center ">
                  <BeatLoader color="red" loading={true} size={10} />
                </div>
              ) : (
                <div className="w-full text-center text-xl font-bold">End</div>
              )
            }
          ></InfiniteScroll>
        </>
      )}
    </Navigations>
  );
};

export default Home;
