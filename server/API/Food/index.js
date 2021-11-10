//Libraries
import express from "express";

//database Model
import {FoodModel} from "../../database/allModels";

//validation 
import {ValidateRestaurantId, Validatecategory} from "../../validation/food";


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
        await ValidateRestaurantId(req.params);

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
        await Validatecategory(req.params);

        const {category} = req.params;
        const foods = await FoodModel.find({category: {$regex: category, $options:'i'},
    });
        res.json({foods});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
});

export default Router;