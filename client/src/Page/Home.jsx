import React,{useEffect} from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

//components
import Delivery from "../components/Delivery";
import Dining from "../components/Dining";
import NightLife from "../components/NightLife";
import Nutrition from "../components/Nutrition";

//redux action
import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";

const Home = () => {
    const {type} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getRestaurant());
    }, []);

    return(
    <>
    <div className="my-5">
      {type === "delivery" && <Delivery />}
      {type === "dining" && <Dining />}
      {type === "night" && <NightLife />}
      {type === "nutri" && <Nutrition />}
    </div>

    </>
    );

};

export default Home;