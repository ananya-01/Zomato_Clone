// Libraries
import express from "express";
import multer from "multer";

//Database Modal
import { ImageModel } from "../../database/allModels";


//upload to s3
import {s3Upload} from '../../Utils/AWS/s3';

const Router = express.Router();

// multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route           /
Des             Uploads given image to S3 bucket, and saves file link to mongodb
Params          none
Access          Public
Method          POST
*/
Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        //s3 bucket options
        const bucketOptions = {
            Bucket: "zomatoclone01",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read", //Access Control List
        };

        const uploadImage = await  s3Upload(bucketOptions);
        await ImageModel.create({images: [{ location:uploadImage.Location}]});
        return res.status(200).json({uploadImage});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;