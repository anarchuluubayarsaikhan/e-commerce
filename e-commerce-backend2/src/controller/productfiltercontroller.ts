import { Request, Response } from "express";
import { postProduct } from "../model/postproductmodel";

const productfiltercontroller = async (req:Request, res:Response) =>
    {
      try{
        const {subcategory, size} =req.query
        console.log(req.query)
        const filter: {subcategory?: string, size?:string} = {};
        if (subcategory){
          filter.subcategory= String(subcategory);
        }
        if (size){
          filter.size= String(size);
        }
        const filtereddata = await postProduct.find(filter)
        console.log(filtereddata)
        res.send(filtereddata)
      }
      catch(error) {
        console.error(error)
        res.status(404).send("Could not filter")
      }
    }
export {productfiltercontroller}