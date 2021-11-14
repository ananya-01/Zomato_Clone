import React,{useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import Slider from 'react-slick';
import ReactStars from "react-rating-stars-component";

//Icons
import { IoMdArrowDropright } from "react-icons/io";

//components
import MenuCollection from "../../components/restaurant/MenuCollection";
import MenuSimilarRestaurantcard from "../../components/restaurant/MenuSimilarRestaurantcard";
import { NextArrow, PrevArrow } from "../../components/CarousalArrow";
import ReviewCard from '../../components/restaurant/Reviews/reviewCard';
import Mapview from '../../components/restaurant/Mapview';

const Overview = () => {
    const {id} = useParams();

    const [menuImage, setMenuImage] = useState([
       "https://b.zmtcdn.com/data/pictures/0/18930190/8b41602a27ac441ba909237947be73ec.jpg",
       "https://b.zmtcdn.com/data/reviews_photos/faf/e76d6bc3df21781ca49c93dd4d4edfaf_1624699914.jpg",
       "https://b.zmtcdn.com/data/dish_photos/e56/c6942fc1a954329fe4ed8bdf9a481e56.jpg",

    ]);
    const [Reviews, setReviews] = useState([
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

    const cuisines = ["North Indian", "chinese", "Italian"];
    const averageCost = 100;

    const ratingChanged = (newRating) => {
        console.log(newRating);
    }

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToScroll: 3,
              slidesToShow: 3,
              infinite: false,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
              dots: false,
            },
          },
        ],
      };
    return (
        <>
        <div className="flex flex-col md:flex-row relative gap-6">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See all menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
           <MenuCollection menuTitle='Menu' pages='3' image="https://th.bing.com/th/id/OIP.v8DBoOobRR4GPlHtGNVEggHaKd?w=182&h=257&c=7&r=0&o=5&dpr=1.25&pid=1.7"/>
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
           {cuisines.map(data => (
               <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">{data}</span>
           ))}
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>${averageCost} for one order (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and service charges, if any
            </small>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Slider {...settings}>
              <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
              </Slider>
            </div>
          </div>
          <div className="mb-4 mt-8">
              <h4 className="text-lg font-medium">Rate your delivery experience</h4>
              <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
               {Reviews.map((reviewData) => (
              <ReviewCard {...reviewData} />
            ))}
          </div>
          <div className="my-4 w-full md:hidden flex flex-col gap-4">
              <Mapview title="McDonald's" phno="+919899786756" mapLocation={[28.6812933768556, 77.20791895432784]
} address="41, Block UA, Jawahar Nagar, Bungalow Road, Near Kamla nagar, New Delhi"/>
          </div>
          </div> 
          <aside style={{height: 'fit-content'}} className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-5 shadow-md flex-col gap-4">
              <Mapview title="McDonald's" phno="+919899786756" mapLocation={[28.6812933768556, 77.20791895432784]
} address="41, Block UA, Jawahar Nagar, Bungalow Road, Near Kamla nagar, New Delhi"/>
          </aside>

        </div>  
        
        </>
    );

};

export default Overview;