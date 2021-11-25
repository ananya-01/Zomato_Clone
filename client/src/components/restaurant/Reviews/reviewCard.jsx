import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

//Redux
import { getUser } from "../../../Redux/Reducer/User/user.action";

//Icons
import { TiStarFullOutline } from "react-icons/ti";

const ReviewCard = (props) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");

  useEffect(() => {
    dispatch(getUser(props.user)).then((data) => {
      setUser(data.payload.user.fullname);
    });
  }, []);

  return (
    <>
      <div className="my-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://i.pinimg.com/originals/8c/88/5c/8c885c7e1f0b7f6beb3813b591eec52b.jpg"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{user}</h3>
              <small className="text-gray-500">
                5 Reviews &#8226; 3 Followers
              </small>
            </div>
          </div>
          <button className="text-zomato-400 border border-zomato-400 py-2 rounded-lg px-4">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
              {props.rating} <TiStarFullOutline />
            </span>
            <h5 className="font-regular uppercase">
              {props.isRestaurantReview ? "Dining" : "Delivery"}
            </h5>
            <small className="text-gray-500">
              {dayjs(props.createdAt).format("DD MMM YYYY")}
            </small>
          </div>
          <div className="w-full">
            <p className="w-full text-gray-600 font-light text-base">
              {props.reviewText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;