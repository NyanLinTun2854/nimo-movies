import React, { useEffect, useState } from "react";
import Navigations from "../Navigations";
import { useParams } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";
import ApiRequest from "../api/ApiRequest";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "react-circular-progressbar/dist/styles.css";
// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper";
import MovieCard from "../components/MovieCard";
import { setAppLoading } from "../redux/appLoading/appLoadingSlice";
import { useDispatch, useSelector } from "react-redux";
import AppLoading from "../components/AppLoading";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const MovieDetail = () => {
  const [details, setDetails] = useState({});
  const [casts, setCasts] = useState([]);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [my_swiper, set_my_swiper] = useState({});
  const { id } = useParams();
  const hour = Math.floor(details?.runtime / 60);
  const minute = details.runtime % 60;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.loading.loading);
  useEffect(() => {
    window.scrollTo(0, 0);
    getDetail();
    getCredits();
    getRelatedMovies();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    getDetail();
    getCredits();
    getRelatedMovies();
  }, [id]);

  const getDetail = async () => {
    dispatch(setAppLoading(true));
    let obj = {
      method: "get",
      url: `movie/${id}`,
      params: {
        language: "en-US",
      },
    };
    let response = await ApiRequest(obj);
    dispatch(setAppLoading(false));
    if (response.status == 200) {
      setDetails(response.data);
    }
  };

  const getCredits = async () => {
    dispatch(setAppLoading(true));
    let obj = {
      method: "get",
      url: `movie/${id}/credits`,
      params: {
        language: "en-US",
      },
    };
    let response = await ApiRequest(obj);
    dispatch(setAppLoading(false));
    if (response.status == 200) {
      setCasts(response.data.cast);
    }
  };

  const percent = details?.vote_average?.toFixed(1) * 10;

  const getRelatedMovies = async () => {
    let obj = {
      method: "get",
      url: `movie/${id}/recommendations`,
      params: {
        language: "en-Us",
        page: 1,
      },
    };
    let response = await ApiRequest(obj);
    if (response.status == 200) {
      setRelatedMovies(response.data.results);
    }
  };

  return (
    <Navigations>
      {state ? (
        <AppLoading />
      ) : (
        <div className="max-w-[1400px] mx-auto pt-[60px]">
          <div className="hidden w-full h-[700px] lg:h-[500px] relative md:flex items-center ">
            <div className="w-full h-full bg-detail absolute top-0 left-0 z-10"></div>
            {details && details.poster_path && (
              <div
                className="absolute w-full h-full top-0 left-0 overflow-hidden mobile-bg"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${details.poster_path})`,
                }}
              >
                {/* <img
                  className="w-full h-full object-cover ml-[200px]"
                  src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${details?.poster_path}`}
                  alt=""
                /> */}
              </div>
            )}

            <div className="relative flex !z-20 pl-[30px]">
              <div className="w-[300px] h-[450px] rounded-xl overflow-hidden">
                <img
                  className="w-full h-full obj-cover"
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${details?.poster_path}`}
                  alt=""
                />
              </div>
              <div className="pl-4 flex-1 flex flex-col">
                <div className="flex items-center ">
                  <h1 className="text-3xl font-bold text-[#fff]">
                    {details?.title}
                  </h1>

                  <p className="text-3xl text-[#fff] pl-2">
                    ({details?.release_date?.slice(0, 4)})
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[#fff]">{details.release_date}</p>
                  <p className="text-[#fff] pl-2">
                    {/* ({details?.production_countries[0]?.iso_3166_1}) */}
                  </p>
                  <BsCircleFill className="text-[4px] text-[#fff] mx-2" />
                  {details?.genres?.map((gener, index) => (
                    <div className="pl-1 text-[#fff]" key={index}>
                      {gener.name}
                    </div>
                  ))}
                  <BsCircleFill className="text-[4px] text-[#fff] mx-2" />
                  {typeof hour == "number" && (
                    <p className="text-[#fff]">{hour}h</p>
                  )}
                  {typeof minute == "number" && (
                    <p className="text-[#fff] pl-2">{minute}m</p>
                  )}
                </div>
                <div className="flex items-center my-6">
                  <div className="w-[60px] h-[60px]">
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
                  <div className="flex flex-col pl-3">
                    <p className="text-[#fff] font-bold">User</p>
                    <p className="text-[#fff] font-bold">Score</p>
                  </div>
                  {/* <div className="w-[40px] h-[40px] bg-[rgb(3,37,65)] rounded-full over-hidden ml-6"></div>
                <div className="w-[40px] h-[40px] bg-[rgb(3,37,65)] rounded-full over-hidden ml-6"></div>
                <div className="w-[40px] h-[40px] bg-[rgb(3,37,65)] rounded-full over-hidden ml-6"></div>
                <div className="w-[40px] h-[40px] bg-[rgb(3,37,65)] rounded-full over-hidden ml-6"></div> */}
                </div>
                <i className="text-[#fff]">{details?.tagline}</i>
                <h6 className="text-xl font-bold text-[#fff] my-2">Overview</h6>
                <div className="flex flex-wrap">
                  <p className="text-[#fff] text-[14px] max-w-[800px]">
                    {details?.overview}
                  </p>
                </div>
                <p className="text-[#fff] text-xl font-bold mt-3">
                  Production Company
                </p>
                <div className="flex gap-2 flex-wrap mt-4">
                  {details?.production_companies?.map((company, index) => (
                    <div className="flex flex-col items-center" key={index}>
                      <div className="w-[80px] h-auto">
                        <img
                          src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${company.logo_path}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[#fff] text-[12px]">{company.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {details && details.poster_path && (
            <div
              className="w-full h-[200px] block md:hidden mobile-bg"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${details.poster_path})`,
              }}
            ></div>
          )}

          <div className="pl-3 flex flex-col pt-3 bg-[#1f1f1f] md:hidden">
            <div className="flex items-center ">
              <h1 className="text-3xl font-bold text-[#fff]">
                {details?.title}
              </h1>

              <p className="text-3xl text-[#fff] pl-2">
                ({details?.release_date?.slice(0, 4)})
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <p className="text-[#fff]">{details.release_date}</p>
              <p className="text-[#fff] pl-2">
                {/* ({details?.production_countries[0]?.iso_3166_1}) */}
              </p>
              <BsCircleFill className="text-[4px] text-[#fff] mx-2" />
              {details?.genres?.map((gener, index) => (
                <div className="pl-1 text-[#fff]" key={index}>
                  {gener.name}
                </div>
              ))}
              <BsCircleFill className="text-[4px] text-[#fff] mx-2" />
              <div className="flex">
                {typeof hour == "number" && (
                  <p className="text-[#fff]">{hour}h</p>
                )}
                {typeof minute == "number" && (
                  <p className="text-[#fff] pl-2">{minute}m</p>
                )}
              </div>
            </div>
            <div className="flex items-center my-6">
              <div className="w-[60px] h-[60px]">
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
              <div className="flex flex-col pl-3">
                <p className="text-[#fff]">User</p>
                <p className="text-[#fff]">Score</p>
              </div>
              {/* <div className="w-[40px] h-[40px] bg-[rgb(3,37,65)] rounded-full over-hidden ml-6"></div>
                <div className="w-[40px] h-[40px] bg-[rgb(3,37,65)] rounded-full over-hidden ml-6"></div>
                <div className="w-[40px] h-[40px] bg-[rgb(3,37,65)] rounded-full over-hidden ml-6"></div>
                <div className="w-[40px] h-[40px] bg-[rgb(3,37,65)] rounded-full over-hidden ml-6"></div> */}
            </div>
            <i className="text-[#fff]">{details?.tagline}</i>
            <h6 className="text-xl font-bold text-[#fff] my-2">Overview</h6>
            <div className="flex flex-wrap">
              <p className="text-[#fff] text-[14px] max-w-[800px]">
                {details?.overview}
              </p>
            </div>
            <p className="text-[#fff] text-xl font-bold mt-3">
              Production Company
            </p>
            <div className="flex gap-2 flex-wrap mt-4">
              {details?.production_companies?.map((company, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <div className="w-[80px] h-auto">
                    <img
                      src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${company.logo_path}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[#fff] text-[12px]">{company.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full bg-[#1f1f1f] px-[10px] relative">
            <h4 className="text-[#fff] text-xl font-bold pt-6 pb-4 r">Casts</h4>
            <div className="flex justify-between items-center">
              <button
                onClick={() => my_swiper.slidePrev()}
                className="w-[38px] h-[70px] bg-red-600 flex justify-center items-center z-10 px-3"
              >
                <FiArrowLeft className="text-2xl !text-white font-[600] " />
              </button>
              <Swiper
                className="flex-1 !mx-2 mySwiper"
                slidesPerView={2}
                breakpoints={{
                  600: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                  1300: {
                    slidesPerView: 6,
                  },
                }}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Navigation]}
                onInit={(ev) => {
                  set_my_swiper(ev);
                }}
              >
                {casts?.map((cast, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-[140px]">
                      <div className="w-full h-[175px]">
                        <img
                          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${cast.profile_path}`}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="text-[#fff] font-bold pt-1">
                          {cast.original_name}
                        </p>
                        <p className="text-[#fff] text-[12px]">
                          {cast.character}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={() => my_swiper.slideNext()}
                className="w-[38px] h-[70px] bg-red-600 flex justify-center items-center z-10 px-3"
              >
                <FiArrowRight className="text-2xl !text-white font-[600]" />
              </button>
            </div>
          </div>
          <div className="mb-8">
            <h4 className="text-[#fff] text-xl font-bold pt-6 pb-4 pl-[30px]">
              Related Movies
            </h4>
            {relatedMovies.length > 0 ? (
              <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xxl:grid-cols-12 gap-x-4 gap-y-4 px-3 sm:px-[40px]">
                {relatedMovies?.map((movie, index) => (
                  <MovieCard movie={movie} key={index} />
                ))}
              </div>
            ) : (
              <div className="w-full text-center text-[#fff] text-[20px] font-bold">
                No Movies
              </div>
            )}
          </div>
        </div>
      )}
    </Navigations>
  );
};

export default MovieDetail;
