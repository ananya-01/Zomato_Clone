import React,{ useState} from 'react';
import ReactStars from "react-rating-stars-component";

//Icons
import { AiOutlinePlus } from "react-icons/ai";

const FoodItem = (props) => {
  return (
    <>
        <div className="flex items-start gap-2 py-2">
          {props?.image && (
            <div className="w-3/12 h-24 md:h-28 lg:h-36 md:px-3">
              <img
                src={props?.image}
                alt="food item"
                className="w-full h-auto md:h-full rounded-lg"
              />
            </div>
          )}
          <div className="w-3/4 md:w-7/12 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{props?.name}</h3>
              <button
                className="md:hidden flex items-center gap-2 text-zomato-400 border border-zomato-400 bg-zomato-50 px-2 py-1 rounded-lg">
                    <AiOutlinePlus /> Add
              </button>
            </div>
            <ReactStars count={5} value={props?.rating || 0} />
            <h5> {props?.price}</h5>
            <p className="truncate">{props?.descript}</p>
          </div>
          <div className="hidden md:block w-2/12">
            <button
              className="flex items-center gap-2 text-zomato-400 border border-zomato-400 bg-zomato-50 px-2 py-1 rounded-lg">
                  <AiOutlinePlus /> Add
            </button>
          </div>
        </div>
      
    </>
  );
}

export default FoodItem;