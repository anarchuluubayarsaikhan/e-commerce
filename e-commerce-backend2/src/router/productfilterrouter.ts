import express from 'express'
import { productfiltercontroller } from '../controller/productfiltercontroller'
const productfilterrouter = express.Router()
productfilterrouter.get ("/filterdedproducts",productfiltercontroller)
export {productfilterrouter}