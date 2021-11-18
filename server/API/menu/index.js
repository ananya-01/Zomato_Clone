//libraries
import express from "express";

//database modal
import {MenuModel, ImageModel} from "../../database/allModels";

const Router = express.Router();

/* 
Route           /list
Desc            Get all list of menu based on id
Params          _id
Access          public
Method          GET
*/
Router.get("/list/:_id", async (req,res) => {
    try{
        const {_id} = req.params;
        const menus = await MenuModel.findById(_id);

        return res.json({menus});
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
});

/* 
Route           /image
Desc            Get all menu image based on id
Params          _id
Access          public
Method          GET
*/
Router.get("/image/:_id", async (req,res) => {
    try{
        const {_id} = req.params;
        const menus = await ImageModel.findOne(_id);

        return res.json({menus});
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route       /new
Desc        add new menu
Access      PUBLIC
method      POST
params      none
*/
Router.post("/new", async (req, res) => {
    try {
      const { menuData } = req.body;
  
      if (menuData._id) {
        const updateMenu = await MenuModel.findByIdAndUpdate(
          menuData._id,
          {
            $push: {
              menus: { $each: menuData.menus },
            },
          },
          { new: true }
        );
  
        return res.json({ menu: updateMenu });
      }
  
      const createNewMenu = await MenuModel.create(menuData);
  
      return res.json({ menu: createNewMenu });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});
  
/*
Route       recommendation/new
Desc        add new recommendation
Access      PUBLIC
method      POST
params      none
*/
Router.post("/recommendation/new", async (req, res) => {
    try {
      const { menuData } = req.body;
  
      const updateMenu = await MenuModel.findByIdAndUpdate(
        menuData._id,
        {
          $push: {
            recommended: { $each: menuData.recommended },
          },
        },
        { new: true }
      );
  
      return res.json({ menu: updateMenu });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});
  
/* 
Route       /update
Desc       update new menu
Access     PUBLIC
method     PATCH
params     none
*/
Router.patch("/update", async (req, res) => {
    try {
      const { menuData } = req.body;
      const updateMenu = await MenuModel.findOneAndUpdate(
        { _id: menuData._id, "menus._id": menuData.menu_id },
        {
          $set: {
            "menus.$.name": menuData.name,
          },
          $push: { "menus.$.items": { $each: menuData.items } },
        },
        { new: true }
      );
  
      return res.json({ menu: updateMenu });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});
  
/*
Route         /delete/single
Desc          deletes a single menu
Access        PUBLIC
method        DELETE
params        none
*/
Router.delete("/delete/single", async (req, res) => {
    try {
      const { menuData } = req.body;
  
      const updateMenu = await MenuModel.findByIdAndUpdate(
        menuData._id,
        {
          $pull: { menus: { _id: menuData.menu_id } },
        },
        { new: true }
      );
  
      return res.json({ menu: updateMenu });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});
  
/*
Route        /item/delete/single
Desc         deletes a single menu
Access       PUBLIC
paramns      none
method       DELETE
*/
Router.delete("/item/delete/single", async (req, res) => {
    try {
      const { menuData } = req.body;
  
      const updateMenu = await MenuModel.findOneAndUpdate(
        { _id: menuData._id, "menus._id": menuData.menuId },
        {
          $pull: { "menus.$.items": menuData.deleteItem },
        },
        { new: true }
      );
  
      return res.json({ menu: updateMenu });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});
  
/*
Route         /recommendation/delete/single
Desc          deletes a single menu
Access        PUBLIC
method        DELETE
params        none
*/
Router.delete("/recommendation/delete/single", async (req, res) => {
    try {
      const { menuData } = req.body;
  
      const updateMenu = await MenuModel.findByIdAndUpdate(
        menuData._id,
        {
          $pull: { recommended: menuData.recommended_id },
        },
        { new: true }
      );
  
      return res.json({ menu: updateMenu });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});

export default Router;