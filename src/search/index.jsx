import React, { useEffect } from "react";
import Navigations from "../Navigations";
import AppLoading from "../components/AppLoading";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/searchProducts/searchProductsSlice";
import { setAppLoading } from "../redux/appLoading/appLoadingSlice";
import MovieCard from "../components/MovieCard";

const SearchProducts = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.searchProducts.products);
  const searchName = useSelector((state) => state.searchProducts.searchName);
  const state = useSelector((state) => state.loading.loading);

  // useEffect(() => {
  //   // dispatch(searchProducts(obj));
  //   getData();
  // }, []);

  // const getData = async () => {
  //   dispatch(setAppLoading(true));
  //   let obj = {
  //     method: "get",
  //     url: "search/movie",
  //     params: {
  //       query: "john wick",
  //       language: "en-US",
  //       page: 1,
  //     },
  //   };

  //   await dispatch(searchProducts(obj)).unwrap();
  //   dispatch(setAppLoading(false));
  // };
  return (
    <Navigations>
      {state ? (
        <AppLoading />
      ) : (
        <div className="pt-[90px] px-3 sm:px-[40px]">
          <p className="text-[#fff] text-2xl font-bold mb-4">
            Search Results for "{searchName}"
          </p>
          {movies.length > 0 ? (
            <div className=" w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 extra:!grid-cols-12 gap-x-4 gap-y-4 ">
              {movies?.map((movie, index) => (
                <MovieCard movie={movie} key={index} />
              ))}
            </div>
          ) : (
            <div className="w-full text-center text-[#fff] text-[20px] font-bold">
              No Movies
            </div>
          )}
        </div>
      )}
    </Navigations>
  );
};

export default SearchProducts;
