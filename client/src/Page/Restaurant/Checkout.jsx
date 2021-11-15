import React,{useState} from 'react'

//Icons
import { BsShieldLockFill } from "react-icons/bs";

// component
import FoodItem from "../../components/Cart/FoodItem";
import AddressList from "../../components/Checkout/AddressList";

const Checkout = () => {
    const [address] = useState([
        {
          name: "Home",
          address: "123 Main St, New York, NY 10001",
        },
        {
          name: "Work",
          address: "123243 Main St, NCR, New Delhi",
        },
        {
          name: "Gym",
          address: "123 Main St, New York, NY 10001",
        },
      ]);
      const [foods] = useState([
        {
            image:"https://b.zmtcdn.com/data/dish_photos/008/a478c69ce492f319690d96c16dd38008.jpg",
            name:"Paneer Butter Masala",
            price:"₹210",
            quantity:"4",
          },
          {
            image:"https://b.zmtcdn.com/data/dish_photos/008/a478c69ce492f319690d96c16dd38008.jpg",
            name:"Paneer Butter Masala",
            price:"₹210",
            quantity:"2",
          },
          {
            image:"https://b.zmtcdn.com/data/dish_photos/008/a478c69ce492f319690d96c16dd38008.jpg",
            name:"Paneer Butter Masala",
            price:"₹210",
            quantity:"1",
          }
    ]);
    
    return (
        
        <div className="my-3 flex flex-col gap-3 items-center">
        <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
        <div className="w-full md:w-3/5 rounded-lg py-3 pt-10 shadow-lg bg-white flex flex-col items-center border-2 border-black">
            <h3 className="text-lg font-semibold">Summary</h3>
            <div className="flex w-full flex-col gap-2 items-center">
            <h5 className="text-base tracking-wider">ORDER FROM</h5>
            <div className="flex w-full flex-col items-center text-gray-400">
                <h4>Domino's Pizza</h4>
                <small>
                5/76, West Ajmal Khan, Padam Singh, Karol Bagh, New Delhi
                </small>
            </div>
            <div className="my-4 h-32 px-4 h-full flex flex-col gap-2 w-full md:w-3/5">
                {foods.map((food) => (
                <FoodItem {...food} key={food._id} />
                ))}
            </div>
            <div className="flex flex-col gap-3 w-full md:w-3/5">
                <h4 className="text-xl font-semibold">Choose Address</h4>
                <AddressList address={address} />
            </div>
            </div>
            <button
            
            className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 px-0 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg"
            >
            Pay Securely <BsShieldLockFill />
            </button>
        </div>
        </div>
    );
     
    
}

export default Checkout;