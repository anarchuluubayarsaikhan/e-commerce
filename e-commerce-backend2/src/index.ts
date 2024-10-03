import express, { Request, Response } from "express";
import connectDB from "../config/db";
import { signupRouter } from "./router/signuprouter";
import { Usermodel } from "./models/user";
import { loginRouter } from "./router/loginrouter";
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


const app = express();
const port = 4000;
const cors = require("cors");
app.use(cors());
app.use(express.json());


const {User} = require("./models/user");
connectDB();

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/signup", async (req, res) => {
  try{
    const signupuser = await Usermodel.find ()
    res.send (signupuser)

  }
  catch(error){
    res.sendStatus(401)
  };
});

app.use(signupRouter)
app.use(loginRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});