import { NextFunction, Request, Response } from "express";
import { handleUpload } from "../../config/cloudinary";


const uploadController = async (req: Request,res:Response,next:NextFunction) => {
    const files = req.files as Express.Multer.File[]
    console.log (req.files)
    if (!req.files) {
        return res.status(400).send("No file found")
    }
    try {
        const promises :Promise<string>[] = []
        const fileurl = files.forEach((file) =>{
            const b64 = Buffer.from(file.buffer).toString('base64')
            const dataURI = `data:${file.mimetype};base64,${b64}`
            promises.push(handleUpload(dataURI)) 
        }    
        )
        const uploadImages: string[] =await Promise.all(promises)
        res.json(uploadImages);
        console.log (promises)

    } catch (error) {
        console.error(error);
        res.status(500).send('Error uploading the file.');
    }
}


export {uploadController}
