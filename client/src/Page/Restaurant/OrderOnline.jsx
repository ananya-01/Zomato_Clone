import React, { useState } from "react";

//Icons
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

//components
import FloatMenuBtn from "../../components/restaurant/Order-Online/FloatMenuBtn";
import FoodList from "../../components/restaurant/Order-Online/FoodList";
import MenuListContainer from "../../components/restaurant/Order-Online/MenuListContainer";

const OrderOnline = () => {

  const [menu, setMenu] = useState([{
    name:"Recommended",
    items:[{
      image:"https://b.zmtcdn.com/data/dish_photos/008/a478c69ce492f319690d96c16dd38008.jpg",
      name:"Paneer Butter Masala",
      price:"₹210",
      rating:"4",
      descript:"Bestseller",
      
    },{
        image:"https://b.zmtcdn.com/data/dish_photos/008/a478c69ce492f319690d96c16dd38008.jpg",
        name:"Paneer Butter Masala",
        price:"₹210",
        rating:"4",
        descript:"Bestseller",
        
      },{
        image:"https://b.zmtcdn.com/data/dish_photos/008/a478c69ce492f319690d96c16dd38008.jpg",
        name:"Paneer Butter Masala",
        price:"₹210",
        rating:"4",
        descript:"Bestseller",
        
      }],
  },
  {
    name:"Combos",
    items:[{
        image:"https://b.zmtcdn.com/data/dish_photos/008/a478c69ce492f319690d96c16dd38008.jpg",
        name:"Paneer Butter Masala",
        price:"₹210",
        rating:"4",
        descript:"Bestseller",
        
      },{
        image:"https://b.zmtcdn.com/data/dish_photos/008/a478c69ce492f319690d96c16dd38008.jpg",
        name:"Paneer Butter Masala",
        price:"₹210",
        rating:"4",
        descript:"Bestseller",
        
      },{
        image:"https://b.zmtcdn.com/data/dish_photos/008/a478c69ce492f319690d96c16dd38008.jpg",
        name:"Paneer Butter Masala",
        price:"₹210",
        rating:"4",
        descript:"Bestseller",
        
      }],
  },
  {
    name:"Half and Half Combos",
    items:[{
        image:"https://b.zmtcdn.com/data/dish_photos/008/a478c69ce492f319690d96c16dd38008.jpg",
        name:"Paneer Butter Masala",
        price:"₹210",
        rating:"4",
        descript:"Bestseller",
        
      },{
        image:"https://b.zmtcdn.com/data/dish_photos/008/a478c69ce492f319690d96c16dd38008.jpg",
        name:"Paneer Butter Masala",
        price:"₹210",
        rating:"4",
        descript:"Bestseller",
        
      }],
  },]);
  const [selected, setSelected] = useState("Recommended");

  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };

 return (
    <>
      <div className="w-full h-screen flex">
        <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
          {menu.map((item) => (
            <MenuListContainer
              {...item}
              key={item._id}
              onClickHandler={onClickHandler}
              selected={selected}
            />
          ))}
        </aside>
        <div className="w-full px-3 md:w-3/4">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45min
            </h4>
          </div>
          <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
            {/* Component FoodList */}
            {menu.map((item) => (
              <FoodList {...item} key={item._id} />
            ))}
          </section>
        </div>
      </div>
      <FloatMenuBtn
        menu={menu}
        onClickHandler={onClickHandler}
        selected={selected}
      />
    </>
  );
}

export default OrderOnline;