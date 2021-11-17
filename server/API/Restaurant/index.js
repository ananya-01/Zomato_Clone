//libraries
import express from "express";
import passport from "passport";

//database Model
import {RestaurantModel} from "../../database/allModels";

const Router = express.Router();

/* 
Route           /
Desc            Get all restaurant based on city name
Params          none
Access          public
Method          GET
*/
Router.get("/", async (req, res) => {
    try{
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city }); 
        return res.json({restaurants});
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
});

/* 
Route    /new
Desc     add new restaurant
Params   none
Access   private
Method   POST
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const newRestaurant = await RestaurantModel.create(req.body.restaurantData);
      return res.json({ restaurants: newRestaurant });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});
  
/* 
Route   /update
Desc    update exisitng restaurant data
Params  _id
Access  Private
Method  PATCH
*/
  Router.patch("/update", passport.authenticate("jwt"), async (req, res) => {
    try {
      const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(
        req.body.restaurantData._id,
        { $set: req.body.restaurantData },
        { new: true }
      );
      if (!updatedRestaurant)
        return res.status(404).json({ restaurants: "Restaurant Not Found!!!" });
  
      return res.json({ restaurants: updatedRestaurant });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});
  
/* 
Route    /delete
Desc     deleting exisitng restaurant data
Access   private
Params   _id
Method   DELETE
*/
  Router.delete("/delete", passport.authenticate("jwt"), async (req, res) => {
    try {
      const deleteRestaurant = await RestaurantModel.findByIdAndRemove(
        req.body.restaurantData._id
      );
      return res.json({ restaurants: Boolean(deleteRestaurant) });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});

/* 
Route           /:_id
Desc            Get individual restaurant details based on id
Params          _id
Access          public
Method          GET
*/
Router.get("/:_id", async (req, res) => {
    try{
        const {_id} = req.params;
        const restaurant = await RestaurantModel.findById(_id);
        if(!restaurant){
            return res.status(404).json({error: "Restaurant not found"});
        }
        return res.json({restaurant});
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
});

/* 
Route           /search
Desc            Get restaurant details based on searched string
Params          none
Access          public
Method          GET
*/
Router.get("/search",async (req, res) => {
    try{
        const {searchString } = req.body;
        const restaurants = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" },
        });
        if(!restaurants){
            return res.status(404).json({error: `No Restaurants matched with ${searchString}`})
        }
        return res.json({restaurants});
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;