import { Request, Response } from "express"
import { postProduct } from "../model/postproductmodel"

const getoneproductcontroller = async (req:Request, res:Response) => {
    try{
      const {id} =req.params
      console.log (id)
      const data = await postProduct.find({_id:id})
      res.json(data)
    }
    catch (error){
      console.error(error)
      res.status(400).send("Unable to delete")
    }}
export {getoneproductcontroller}