import React from "react";

//components
import RestaurantNavbar from "../components/Navbar/restaurantNavbar";
import ImageGrid from "../components/restaurant/ImageGrid";

const RestaurantLayout = () => {
    return(
        <>
        <RestaurantNavbar />
        <div className="container mx-auto px-4 lg:px-20">
            <ImageGrid 
            images={[
                "https://th.bing.com/th/id/OIP.b-6A7J2ZuL4tyP33bRUfUgHaEw?w=273&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                "https://th.bing.com/th/id/OIP.b-6A7J2ZuL4tyP33bRUfUgHaEw?w=273&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                "https://th.bing.com/th/id/OIP.b-6A7J2ZuL4tyP33bRUfUgHaEw?w=273&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                "https://th.bing.com/th/id/OIP.b-6A7J2ZuL4tyP33bRUfUgHaEw?w=273&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
                "https://th.bing.com/th/id/OIP.b-6A7J2ZuL4tyP33bRUfUgHaEw?w=273&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"

            ]}/>
       </div>
        </>
    );
};

export default RestaurantLayout;