import express from 'express'
import { getUsers } from '../controller/signupcontroller'
const signupRouter = express.Router()
signupRouter
.post("/signup", getUsers)

export {signupRouter}