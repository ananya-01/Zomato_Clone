import React, { useState, useEffect } from "react";

//components
import ReviewCard from "../../components/restaurant/Reviews/reviewCard";
import AddReviewCard from "../../components/restaurant/Reviews/AddReviewCard";


const Reviews = () => {
  const [reviews, setReviews] = useState([
      {
    userName:"Ira",
    isRestaurantReview: true,
    createdAt:"2020-06-01T12:00:00.0002",
    reviewText: "This is a must visit.",
},
{
    userName:"khushi",
    isRestaurantReview: false,
    createdAt:"2020-06-01T12:00:00.0002",
    reviewText: "This is a must visit.",
},
{
    userName:"Alexa",
    isRestaurantReview: true,
    createdAt:"2020-06-01T12:00:00.0002",
    reviewText: "This is a must visit.",
},
{
    userName:"Siri",
    isRestaurantReview: false,
    createdAt:"2020-06-01T12:00:00.0002",
    reviewText: "This is a must visit.",
},
]);
  return (
    <>
      <div className="w-full flex flex-col md:flex-row relative gap-6">
        <div className="w-full md:w-8/12 flex flex-col gap-3">
          <div className="md:hidden">
            <AddReviewCard />
          </div>
          {reviews.map((review) => (
            <ReviewCard {...review} />
          ))}
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex items-start md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex-col gap-3"
        >
          <AddReviewCard />
        </aside>
      </div>
    </>
  );
}

export default Reviews