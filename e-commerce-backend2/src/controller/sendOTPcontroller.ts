import { Request, Response } from "express"
import { Usermodel } from "../model/user"
import { OTPModel } from "../model/forgotpassmodel"
const GOOGLE_SECRET = process.env.GOOGLE_SECRET
import nodeMailer from 'nodemailer'

const sendOTPcontroller = async(req:Request,res:Response)=>{
    const otp = Math.floor(Math.random()* 899999) +100000
    try{
      const {email} = req.body
      const dataofperson = await Usermodel.find({email:email})
      console.log(dataofperson)
      if (dataofperson.length===0) {
       res.status(401).send("You are not signed up. Please sign up")
       return
      }
      else {
        const otpdata= await OTPModel.create ({email:email,otp:otp})
        const transporter = nodeMailer.createTransport({
          service:'gmail',
          auth:{
            user: 'anarchulu@gmail.com',
            pass: GOOGLE_SECRET
          }
        })
        await transporter.sendMail({
          from:'anarchulu@gmail.com',
          to: email,
          subject:'OTP verification',
          html: `<h1>Your recovery OTP is ${otp} </h1>`
        })
        res.status(200).send("successful")

      }
    }
    catch (error) {
      res.status(404).send("error")
    }
  }

  export {sendOTPcontroller}