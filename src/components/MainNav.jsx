import React from "react";
import { AiFillYoutube } from "react-icons/ai";

const MainNav = () => {
  return (
    <div className="w-full h-[60px] bg-[#1f1f1f] fixed top-0 left-0 z-30">
      <div className="w-full h-full flex flex-col items-start sm:flex-row sm:items-center sm:justify-between mx-2 sm:mx-4">
        <p className="text-[20px] font-bold text-[red]">NIMO</p>
        <form
          className="block w-full sm:w-[400px] "
          onSubmit={(e) => {
            e.preventDefault();
            console.log("data");
          }}
        >
          <input className="w-[80%] py-2 text-white border-[#333] outline-none active:ring-1 active:ring-[#333] bg-[#121212]" />
          <button
            type="submit"
            className="w-[20%] bg-[#393939] text-white active:ring-2 active:ring-blue-500 py-2 px-4"
          >
            click
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainNav;
