import express from 'express'
import { getproductdetailsController } from '../controller/getproductdetailscontroller'
import { checkAuth } from '../controller/checkauth'
const getproductdetailsRouter = express.Router()
getproductdetailsRouter.get ("/getproductdetails", checkAuth, getproductdetailsController)

export {getproductdetailsRouter}