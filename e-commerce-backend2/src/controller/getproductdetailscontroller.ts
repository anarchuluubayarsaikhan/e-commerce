import { postProduct } from "../model/postproductmodel"
import express, { Request, Response } from "express";
const getproductdetailsController = async(req:Request, res:Response) =>
    {try{
      const data = await postProduct.find()
      res.status(200).json(data)
    }
    catch(error) {
      console.log(error)
      res.sendStatus(404)
    }
  }

  export {getproductdetailsController}