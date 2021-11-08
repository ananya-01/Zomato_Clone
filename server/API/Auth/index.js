//Library
import express from "express";
import bcyptjs from "bcryptjs";
import jwt from "jsonwebtoken";

//Models
import { UserModel } from "../../database/user";

const Router = express.Router();

/*
Route     /signup
Des       Signup with email and pasword
Params    none
Access    Public
Method    Post
*/

Router.post("/signup",async(req,res) => {
    try{
        const {email,password, fullname, phoneNumber} = req.body.credentials;
        //check whether email exists
        const checkUserByEmail = await UserModel.findOne({email});
        const checkUserByPhone = await UserModel.findOne({phoneNumber});

        if(checkUserByEmail || checkUserByPhone){
            return res.json({error: "User already exits"});
        }
        //hash password
        const bcryptSalt =  await bcrypt.genSalt(8);

        const hashedPassword = await bcrypt.hash(password, bcryptSalt);
        //generate JWT auth token
        const token = jwt.sign({user:{fullname,email}},"ZomatoAPP");
      
    }catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;