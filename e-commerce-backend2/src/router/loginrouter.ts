import express from 'express'
import {loginController } from '../controller/logincontroller'
const loginRouter = express.Router()
loginRouter
.post("/login", loginController)

export {loginRouter}