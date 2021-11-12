import React,{useState} from "react";

//components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";


const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id:"123456",
            photos:["https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",],
            name:"Samosa Party",
            cuisine:["Street Food","Tea"],
            averageCost:100,
            isPro: true,
            isOff:80,
            durationOfdelivery:42,
            restaurantReviewValue:4.1,
        },
        {
            _id:"1234506",
            photos:["https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",],
            name:"Samosa Party",
            cuisine:["Street Food","Tea"],
            averageCost:100,
            isPro: true,
            isOff:80,
            durationOfdelivery:42,
            restaurantReviewValue:4.1,
        },
        {
            _id:"12345896",
            photos:["https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",],
            name:"Samosa Party",
            cuisine:["Street Food","Tea"],
            averageCost:100,
            isPro: true,
            isOff:80,
            durationOfdelivery:42,
            restaurantReviewValue:4.1,
        }
    ]);

    return ( 
        <>
        <DeliveryCarousal />
        {/* <Brand /> */}
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in Bhubaneswar
      </h1>
        <div className="flex justify-between flex-wrap">
            {restaurantList.map((restaurant) => (
                <RestaurantCard {...restaurant} key={restaurant._id} />
            ))}
        </div>
        </>
    );
};

export default Delivery;