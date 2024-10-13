import express from 'express'
import { checkAuth } from '../controller/checkauth'
import { getoneproductcontroller } from '../controller/getoneproductcontroller'
const getoneproductrouter = express.Router()
getoneproductrouter.get(`/products:id`, checkAuth, getoneproductcontroller)

export {getoneproductrouter}