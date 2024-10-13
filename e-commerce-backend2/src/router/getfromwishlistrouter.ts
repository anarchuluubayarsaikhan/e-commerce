import express from 'express'
import { checkAuth } from '../controller/checkauth'
import { getfromwishlistcontroller } from '../controller/getfromwishlistcontroller'
const getfromwishlistrouter = express.Router()
getfromwishlistrouter.get("/savedproducts", checkAuth ,getfromwishlistcontroller)
export {getfromwishlistrouter}