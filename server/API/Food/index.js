//Libraries
import express from "express";
import passport from "passport";

//database Model
import {FoodModel} from "../../database/allModels";

const Router = express.Router();

/* 
Route           /r/:_id
Desc            Get all food based on a particular restaurant
Params          id
Access          public
Method          GET
*/
Router.get("/r/:_id", async (req, res) => {
    try{
        const {_id} = req.params;
        const foods = await FoodModel.find({restaurant: _id});

        return res.json({foods});
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
});

/* 
Route           /c/:category
Desc            Get all food based on particular category
Params          category
Access          public
Method          GET
*/
Router.get("/c/:category", async (req, res) => {
    try{
        const {category} = req.params;
        const foods = await FoodModel.find({category: {$regex: category, $options:'i'},
    });
        res.json({foods});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
});

/*
Route       /new
Desc        add new food record to database
Access      PRIVATE
params      none
method      POST
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { foodData } = req.body;
      const newFood = await FoodModel.create(foodData);
      return res.json({ foods: newFood });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});
  
/* 
Route         /update
Desc          update exisiitng food data
Access        PRIVATE
params        none
Method        PATCH
*/
Router.patch("/update", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { foodData } = req.body;
      const updateFood = await FoodModel.findByIdAndUpdate(
        foodData._id,
        {
          $set: foodData,
        },
        { new: true }
      );
  
      if (!updateFood)
        return res.status(404).json({ foods: "Food record Not Found!!!" });
  
      return res.json({ foods: updateFood });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});
  
/*
Route         /delete
Desc          delete exisiitng food data
Access        PRIVATE
Params        none
method        DELETE
*/
Router.delete("/delete", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { foodData } = req.body;
      const deleteFood = await FoodModel.findByIdAndRemove(foodData._id);
  
      return res.json({ foods: Boolean(deleteFood) });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});

export default Router;