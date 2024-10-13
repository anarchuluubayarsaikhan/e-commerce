const jwt = require('jsonwebtoken')

import express, { Request, Response } from "express";
import { Usermodel } from "../model/user";
import"dotenv/config"
const bcrypt = require("bcryptjs");
const TOKEN_SECRET = process.env.TOKEN_SECRET || ""
const loginController = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user =  await Usermodel.findOne({email})
      if (!user) {
        return res.sendStatus(401)
      } 
        const isValid = await bcrypt.compareSync(password, user.password)
        if (!isValid) return res.status(401).send("Wrong password")
        if (isValid) {
          const token = jwt.sign({userid:user._id, email: email }, TOKEN_SECRET, { expiresIn: '2h' })

          return res.status(200).json({token})
        }
        else {
          return res.status(401).send("Wrong email")
        }
      } 
      catch (error) {
        console.error(error);
        return res.sendStatus(401);
      }
      }
  


  export {loginController}