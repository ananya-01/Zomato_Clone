//Library
import express from "express";
import bcyptjs from "bcryptjs";
import jwt from "jsonwebtoken";

//Models
import { UserModel } from "../../database/user";

const Router = express.Router();

/*
Route     /signup
Des       Signup with email and pasword/Register a new user
Params    none
Access    Public
Method    POST
*/

Router.post("/signup", async (req, res) => {
    try{

        await UserModel.findByEmailAndPhone(req.body.credentials);

        const newUser = await UserModel.create(req.body.credentials);

        const token = newUser.generateJwtToken();

        return res.status(200).json({token, status:"success"});

    }catch(error){
        return res.status(500).json({error:error.message });
    }
});

/*
Route           /signin
Desc            Signin with email and password
Params          none
Access          public
Method          POST
*/
Router.post("/signin", async (req, res) => {
    try{

        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();

        return res.status(200).json({token, status:"success"});
    }
    catch(error){
        return res.status(500).json({error:error.message });
    }
});
export default Router;