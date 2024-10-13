import { Request, Response } from "express"
import { savedProduct } from "../model/saveproductmodel"

const addtowishlistcontroller = async (req:Request, res:Response) => {
    try{
      const{_id,imageurl,information,price} = req.body
      const data = await savedProduct.create({
        _id:_id,
        imageurl:imageurl,
        information:information,
        price:price})
      res.status(200).send("Successfully saved")
    }
    catch (error){
      console.error(error)
      res.status(400).send("Unable to save")
    }
  }
  export {addtowishlistcontroller}