import express from 'express'
import { sendOTPcontroller } from '../controller/sendOTPcontroller'
const sendOTProuter= express.Router()
sendOTProuter.post ("/forgetpass", sendOTPcontroller)

export {sendOTProuter}