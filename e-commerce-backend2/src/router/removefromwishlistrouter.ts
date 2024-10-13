import express from 'express'
import { removefromwishlistcontroller } from '../controller/removefromwishlistcontroller'
import { checkAuth } from '../controller/checkauth'
const removefromwishlistrouter = express.Router()
removefromwishlistrouter.delete ("/saveproduct:_id", checkAuth,removefromwishlistcontroller)
export {removefromwishlistrouter}