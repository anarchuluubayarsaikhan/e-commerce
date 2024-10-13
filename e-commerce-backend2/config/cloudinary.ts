import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
require('dotenv').config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

export const handleUpload = async (dataURI: string) => {
    const res = await cloudinary.uploader.upload(dataURI, {
        resource_type: 'auto'
    });

    return res.secure_url;
}