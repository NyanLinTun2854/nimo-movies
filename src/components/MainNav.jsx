import React, { useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { setAppLoading } from "../redux/appLoading/appLoadingSlice";
import {
  searchProducts,
  setSearchName,
} from "../redux/searchProducts/searchProductsSlice";
import { useNavigate } from "react-router-dom";

const MainNav = () => {
  const [keywords, setKeywords] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(keywords);
  return (
    <div className="w-full h-[80px] sm:h-[60px] bg-[#1f1f1f] fixed top-0 left-0 z-30">
      <div className="w-full h-full flex flex-col items-start justify-center sm:flex-row sm:items-center sm:justify-between mx-2 sm:mx-4">
        <p
          className="text-[25px] font-bold text-[red] cursor-pointer"
          onClick={() => navigate("/")}
        >
          NIMO
        </p>
        <form
          className="flex w-full sm:w-[400px] h-[30px] sm:h-[40px]"
          onSubmit={async (e) => {
            e.preventDefault();
            navigate("/search-products");
            dispatch(setSearchName(keywords));
            dispatch(setAppLoading(true));
            let obj = {
              method: "get",
              url: "search/movie",
              params: {
                query: keywords,
                language: "en-US",
                page: 1,
              },
            };

            await dispatch(searchProducts(obj)).unwrap();
            dispatch(setAppLoading(false));
            setKeywords("");
          }}
        >
          <input
            className="w-[75%] sm:w-[70%] pl-2 h-full text-white  outline-none active:ring-1 active:ring-[#333] bg-[#121212]"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
          <button
            type="submit"
            className="w-[20%] bg-[#393939] flex justify-center items-center text-white active:ring-2 active:ring-blue-500 h-full px-4"
            onClick={async () => {
              navigate("/search-products");
              dispatch(setSearchName(keywords));
              dispatch(setAppLoading(true));
              let obj = {
                method: "get",
                url: "search/movie",
                params: {
                  query: keywords,
                  language: "en-US",
                  page: 1,
                },
              };

              await dispatch(searchProducts(obj)).unwrap();
              dispatch(setAppLoading(false));
              setKeywords("");
            }}
          >
            <FiSearch className="text-[#fff] text-[20px] font-bold" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainNav;
