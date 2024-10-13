import { Request, Response } from "express"
import { savedProduct } from "../model/saveproductmodel"

const removefromwishlistcontroller = async (req:Request, res:Response) => {
    try{
      const {_id} =req.params
      const data = await savedProduct.deleteOne({_id:_id})
      res.status(200).send("Successfully deleted")
    }
    catch (error){
      console.error(error)
      res.status(400).send("Unable to delete")
    }
  }

export {removefromwishlistcontroller}