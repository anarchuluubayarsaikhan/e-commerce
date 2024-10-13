import { Usermodel } from "../model/user";
import express, { Request, Response } from "express";
const bcrypt = require("bcryptjs");

const getUsers = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;
      if (name.lenght< 1){
        return res.status(400).json("Хамгийн багадаа 2 үсэг орсон байх")
      }
      if (!/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email)){
         return res.status(400).json("Имэйл буруу байна")
      }
      if (password.lenght<8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[ !@#$%^&*(),.?":{}|<> ]/.test(password)){
         return res.status(400).json("Нууц үг шаардлага хангахгүй байна")
      }
      const salt = await bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hashSync(password, salt);
      const user = await Usermodel.create({
        name,
        email,
        password: hashedPassword,
      });

      
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(401);
    }
  }

  export {getUsers}