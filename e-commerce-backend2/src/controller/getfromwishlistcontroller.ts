import { Request, Response } from "express"
import { savedProduct } from "../model/saveproductmodel"

const getfromwishlistcontroller = async (req:Request, res:Response) =>
    {
      try{
        const data = await savedProduct.find()
        res.json(data)
      }
      catch(error) {
        console.log(error)
        res.status(401).send("Could not get saved products")
      }
    }
export {getfromwishlistcontroller}