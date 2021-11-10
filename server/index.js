//env variable
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs
import googleAuthConfig from "./config/google.config";
import routerConfig from './config/route.config';

//Microservice Routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import menu from "./API/menu";
import Image from "./API/Image";
import Order from "./API/orders";
import Reviews from "./API/reviews";
import User from "./API/User";

//Database connection
import ConnectDB from "./database/connection";

const zomato = express();

//Application Middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(cors());
zomato.use(helmet());
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport config
googleAuthConfig(passport);
routerConfig(passport);

//Application Routes
zomato.use("/auth",Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",menu);
zomato.use("/image",Image);
zomato.use("/order",Order);
zomato.use("/reviews",Reviews);
zomato.use("/user",User);

zomato.get("/", (req,res) => res.json({message: "Setup Success"}));

zomato.listen(4000, () =>
    ConnectDB()
        .then(() => console.log("Server is up and running"))
        .catch((error) => {
            console.log(error);
            console.log(
                "Server is running, but database connection failed ..."
            );
        })
);