import React, { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom';
import Slider from 'react-slick';
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";

//Icons
import { IoMdArrowDropright } from "react-icons/io";

//components
import MenuCollection from "../../components/restaurant/MenuCollection";
import MenuSimilarRestaurantcard from "../../components/restaurant/MenuSimilarRestaurantcard";
import { NextArrow, PrevArrow } from "../../components/CarousalArrow";
import ReviewCard from '../../components/restaurant/Reviews/reviewCard';
import Mapview from '../../components/restaurant/Mapview';

//Redux
import { getImage } from "../../Redux/Reducer/Image/Image.action";
import { getReviews } from "../../Redux/Reducer/Reviews/review.action";

const Overview = () => {
  const [menuImage, setMenuImages] = useState({ images: [] });
  const [Reviews, setReviews] = useState([]);

  const { id } = useParams();

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

    const reduxState = useSelector(
      (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (reduxState) {
        dispatch(getImage(reduxState?.menuImages)).then((data) => {
          const images = [];
          data.payload.image.images.map(({ location }) => images.push(location));
          setMenuImages(images);
          console.log(images);
        });
        dispatch(getReviews(reduxState?._id)).then((data) => {
          setReviews(data.payload.reviews);
        })
      }
    }, [reduxState]);
  
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
  
    const getLatLong = (mapAddress) => {
      const data = mapAddress?.split(",").map((item) => parseFloat(item));
      return console.log(data);
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
           <MenuCollection menuTitle='Menu' pages='2' image={menuImage}/>
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            {reduxState?.cuisine.map((data) => (
              <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                {data}
              </span>
            ))}
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>₹{reduxState?.averageCost} for one order (approx.)</h6>
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
          <div className="mt-8">
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
          <Mapview
            title={reduxState?.name}
            phno={reduxState?.contactNumber}
            mapLocation={getLatLong(reduxState?.mapLocation)}
            address={reduxState?.address}
          />
          </div>
          </div> 
          <aside style={{height: 'fit-content'}} className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-5 shadow-md flex-col gap-4">
          <Mapview
            title={reduxState?.name}
            phno={reduxState?.contactNumber}
            mapLocation={getLatLong(reduxState?.mapLocation)}
            address={reduxState?.address}
          />
          </aside>

        </div>  
        
        </>
    );

};

export default Overview;