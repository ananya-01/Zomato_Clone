import React from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

//components
import RestaurantNavbar from "../components/Navbar/restaurantNavbar";
import ImageGrid from "../components/restaurant/ImageGrid";
import InfoButtons from "../components/restaurant/InfoButtons";
import RestaurantInfo from "../components/restaurant/RestaurantInfo";
import TabContainer from "../components/restaurant/Tabs";

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
            <RestaurantInfo 
            name="Mumbai Express"
            restaurantRating="3.8"
            deliveryRating="3.5"
            cuisine="Fast Food, North Indian,Chinese,Street Food"
            address="bhubaneswar"/>
            <div className="my-4 flex flex-wrap gap-3">
                <InfoButtons isActive>
                    <TiStarOutline /> Add Review
                </InfoButtons>
                <InfoButtons>
                    <RiDirectionLine /> Direction
                </InfoButtons>
                <InfoButtons>
                    <BiBookmarkPlus /> Bookmark
                </InfoButtons>
                <InfoButtons>
                    <RiShareForwardLine /> Share
                </InfoButtons>
            </div>
            <div className="my-10">
                <TabContainer></TabContainer>
            </div>
        
       </div>
        </>
    );
};

export default RestaurantLayout;