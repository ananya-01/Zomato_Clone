//env variable
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

//Microservice Routes
import Auth from "./API/Auth";

//Database connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

//Application Routes
zomato.use("/auth",Auth);

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