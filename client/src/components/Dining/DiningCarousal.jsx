import React from "react";
import Slider from "react-slick";

// components
import PictureCarousalCard from "../PictureCarousal";
import { NextArrow, PrevArrow } from "../CarousalArrow";

const DiningCarousal = () => {
    const categories = [
        {
          image:
            "https://th.bing.com/th/id/OIP.OHM-Uit1H_Xh8PMDzMw3ZwHaDz?w=348&h=179&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          title: "Trending This Week",
          subtitle:"30 Places",
        },
        {
          image:
            "https://th.bing.com/th/id/OIP.RvXI_qTij-WTF9m4HjXDjQHaEK?w=323&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          title: "Best of Bhubaneswar",
          subtitle:"19 Places",
        },
        {
          image:
            "https://th.bing.com/th/id/OIP.ULnXFb9_mRBp9oT_ompCLwHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          title: "Sweet Tooth",
          subtitle:"8 places",
        },
        {
          image:
            "https://th.bing.com/th/id/OIP.Cl_5Jp99SFiVcA2qRrghbAHaFt?w=219&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          title: "All-Day Dining",
          subtitle:"14 places",
        },
        {
          image:
            "https://th.bing.com/th/id/OIP.dZnh5W-sZ25WT2gc2UTsGgHaFj?w=268&h=201&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          title: "Rooftops",
          subtitle:"7 Places",
        },
        {
          image:
            "https://th.bing.com/th/id/OIP.-L7xEltzyYS95wou4kwEXgHaK3?w=182&h=267&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          title: "Pocket Friendly",
          subtitle:"7 places",
        },

    ];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
      {categories.map((food) => (
          <PictureCarousalCard {...food} />
        ))}
      </Slider>
    </div>
  );
};

export default DiningCarousal;