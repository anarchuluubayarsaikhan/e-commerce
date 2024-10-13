import express from 'express'
import { postproductscontroller } from '../controller/postproductscontroller'
const postproductrouter = express.Router()
postproductrouter.post('/postProducts',postproductscontroller )
export {postproductrouter}