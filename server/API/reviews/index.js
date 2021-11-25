//libraries
import express from "express";
import passport from "passport";

//database modal
import {ReviewModel} from "../../database/allModels";

const Router = express.Router();

/* 
Route           /:resid
Desc            get all review of a particular restaurant
Params          resid
Access          public
Method          GET
*/
Router.get("/:resid", async (req, res) => {
    try{
        const {resid} = req.params;
        const reviews = await ReviewModel.find({restaurant:resid});
        return res.json({reviews});
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route           /new
Des             Add new food review/rating
Params          none
BODY            review object
Access          Public
Method          POST
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { _id } = req.session.passport.user._doc;
      const { reviewData } = req.body;
  
      await ReviewModel.create({ ...reviewData, user: _id });
  
      return res.json({ review: "Sucessfully Created Review." });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

/*
Route           /delete/:_id
Des             Delete food review/rating
Params          _id
BODY            none
Access          Public
Method          DELETE
*/
Router.delete("/delete/:_id", async (req, res) => {
    try {
        const { _id } = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({ review: "Successfully Deleted the Review." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;