import express from 'express'
import { checkAuth } from '../controller/checkauth'
import { addtowishlistcontroller } from '../controller/addtowishlistcontroller'
const addtowishlistrouter = express.Router()
addtowishlistrouter.post ("/saveproduct", checkAuth,addtowishlistcontroller)
export {addtowishlistrouter}
