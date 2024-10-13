import express from 'express'
import { uploadController } from '../controller/uploadcontroller'
const uploadRouter = express.Router()
import Multer, { memoryStorage } from "multer"
const storage = memoryStorage()
const multer = Multer({ storage })
uploadRouter.post ("/uploadfile", multer.array("image"), uploadController)

export {uploadRouter}