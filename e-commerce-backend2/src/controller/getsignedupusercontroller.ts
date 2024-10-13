import { Request, Response } from "express"
import { Usermodel } from "../model/user"

const getsignedupusercontroller = async (req:Request, res:Response) => {
    try{
      const signupuser = await Usermodel.find ()
      res.send (signupuser)
    }
    catch(error){
      res.sendStatus(401)
    };
  }
export {getsignedupusercontroller}