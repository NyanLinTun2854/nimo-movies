import React from "react";
import { GridLoader } from "react-spinners";

const AppLoading = () => {
  return (
    <div className="w-full h-[100vh] bg-[#121212] flex justify-center items-center text-[#fff]">
      <GridLoader color="red" loading={true} size={10} />
    </div>
  );
};

export default AppLoading;
