import React, { useEffect, useState } from "react";
import Navigations from "../Navigations";
import { useParams } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";
import ApiRequest from "../api/ApiRequest";

const MovieDetail = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const hour = Math.floor(details?.runtime / 60);
  const minute = details.runtime % 60;
  console.log(id);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    let obj = {
      method: "get",
      url: id,
      params: {
        language: "en-US",
      },
    };
    let response = await ApiRequest(obj);
    if (response.status == 200) {
      setDetails(response.data);
    }
  };

  console.log(details);
  return (
    <Navigations>
      <div className="">
        <div className="w-full h-[500px] relative flex items-center ">
          <div className="w-full h-full bg-detail absolute top-0 left-0 z-10"></div>
          <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
            <img
              className="w-full h-full object-cover ml-[200px]"
              src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${details?.poster_path}`}
              alt=""
            />
          </div>
          <div className="relative flex !z-20 pl-[30px]">
            <div className="w-[300px] h-[450px] rounded-xl overflow-hidden">
              <img
                className="w-full h-full obj-cover"
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${details?.poster_path}`}
                alt=""
              />
            </div>
            <div className="pl-4 flex-1">
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
                {details?.genres?.map((gener) => (
                  <div className="pl-1 text-[#fff]">{gener.name}</div>
                ))}
                <BsCircleFill className="text-[4px] text-[#fff] mx-2" />
                {typeof hour == "number" && (
                  <p className="text-[#fff]">{hour}h</p>
                )}
                {typeof minute == "number" && (
                  <p className="text-[#fff] pl-2">{minute}m</p>
                )}
              </div>
              <div className="flex items-center">
                <div className="w-[60px] h-[60px] rounded-full bg-white"></div>
                <div className="flex flex-col pl-3">
                  <p className="text-[#fff]">User</p>
                  <p className="text-[#fff]">Score</p>
                </div>
                <div className="w-[40px] h-[40px] bg-[rgb(3,37,65)] rounded-full over-hidden ml-6"></div>
                <div className="w-[40px] h-[40px] bg-[rgb(3,37,65)] rounded-full over-hidden ml-6"></div>
                <div className="w-[40px] h-[40px] bg-[rgb(3,37,65)] rounded-full over-hidden ml-6"></div>
                <div className="w-[40px] h-[40px] bg-[rgb(3,37,65)] rounded-full over-hidden ml-6"></div>
              </div>
              <i className="text-[#fff]">{details?.tagline}</i>
              <h6 className="text-xl font-bold text-[#fff]">Overview</h6>
              <div className="flex flex-wrap">
                <p className="text-[#fff] text-[14px] max-w-[800px]">
                  {details?.overview}
                </p>
              </div>
              {details?.production_companies?.map((company) => (
                <div className="flex flex-col items-center">
                  <div className="w-[80px] h-auto">
                    <img
                      src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${company.logo_path}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p>{company.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Navigations>
  );
};

export default MovieDetail;
