import React from "react";
import { AiFillYoutube } from "react-icons/ai";

const MainNav = () => {
  return (
    <div className="w-full h-[60px] bg-[#1f1f1f] fixed top-0 left-0 z-20">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between px-6">
        <AiFillYoutube className="text-[50px] text-[red]" />
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("data");
          }}
        >
          <input className="!w-[400px] pl-4 py-2 text-white border-[#333] outline-none active:ring-1 active:ring-[#333] bg-[#121212]" />
          <button
            type="submit"
            className="bg-[#393939] text-white active:ring-2 active:ring-blue-500 py-2 px-4"
          >
            click
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainNav;
