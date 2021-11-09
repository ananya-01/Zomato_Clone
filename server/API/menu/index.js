//libraries
import express from "express";

//database modal
import {MenuModel, ImageModel} from "../../database/allModel";

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


export default Router;