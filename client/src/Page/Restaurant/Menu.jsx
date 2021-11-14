import React, { useState } from "react";

//components
import MenuCollection from "../../components/restaurant/MenuCollection";


const Menu = () => {
  const [menus, setMenus] = useState([
    "https://b.zmtcdn.com/data/pictures/0/18930190/8b41602a27ac441ba909237947be73ec.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/faf/e76d6bc3df21781ca49c93dd4d4edfaf_1624699914.jpg",
    "https://b.zmtcdn.com/data/dish_photos/e56/c6942fc1a954329fe4ed8bdf9a481e56.jpg",
  ]);

  return (
    <>
    <div className="flex flex-wrap gap-3">
        <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
    </div>
    </>
  );
}

export default Menu;