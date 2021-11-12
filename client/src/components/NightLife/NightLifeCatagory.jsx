import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const NightLifeCatagory = () => {
  return (
    <>
      <div className="w-full h-64 relative px-4 overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src="https://th.bing.com/th/id/OIP.TGb0GNcnG_vy_bQcwinxyAHaFj?w=232&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            alt="drinks"
            className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
          />
          <div
            className="w-full h-full absolute inset-0  rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>
        <div className="absolute w-full left-8  bottom-2 text-white ">
          <h4 className="z-10">Best Bars and Pubs</h4>
          <h6 className="z-10 flex items-center">
            11 Places <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};

export default NightLifeCatagory;