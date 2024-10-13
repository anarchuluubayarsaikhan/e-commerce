import express from 'express'
import { getsignedupusercontroller } from '../controller/getsignedupusercontroller'
const getsignedupuserrouter = express.Router()
getsignedupuserrouter.get("/signup", getsignedupusercontroller)

export {getsignedupuserrouter}