import express, { Request, Response } from "express";
import connectDB from "../src/config/db";
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
const app = express();
const port = 4000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
connectDB();
const { MongoClient } = require('mongodb')
const url = "mongodb+srv://anarchuluu:z83rM9IOqHvzRPKf@cluster0.ihy8c.mongodb.net/ecommmerce";
const client = new MongoClient(url);
const db = client.db("ecommerce");
const collection = db.collection('postProduct')


import { signupRouter } from "../src/router/signuprouter";
import { loginRouter } from "../src/router/loginrouter";
// import { uploadRouter } from '../src/router/uploadrouter';
import { getproductdetailsRouter } from "../src/router/getproductdetailsrouter";
import { addtowishlistrouter } from "../src/router/addtowishlistrouter";
import { removefromwishlistrouter } from "../src/router/removefromwishlistrouter";
import { postproductrouter } from "../src/router/postproductsrouter";
import { getfromwishlistrouter } from "../src/router/getfromwishlistrouter";
import { getoneproductrouter } from "../src/router/getoneproductrouter";
import { productfilterrouter } from "../src/router/productfilterrouter";
import { sendOTProuter } from "../src/router/sendOTProuter";
import { getsignedupuserrouter } from "../src/router/getsignedupuserrouter";
import { postProduct } from "../src/model/postproductmodel";
import { checkAuth } from "../src/controller/checkauth";
import { searchClient } from '@algolia/client-search'





app.use(getsignedupuserrouter)
app.use(signupRouter)
app.use(loginRouter)
// app.use(uploadRouter)
app.use(getproductdetailsRouter)
app.use(addtowishlistrouter)
app.use(removefromwishlistrouter)
app.use(postproductrouter)
app.use(getfromwishlistrouter)
app.use(getoneproductrouter)
app.use(productfilterrouter)
app.use (sendOTProuter)


























app.get("/search", checkAuth, async (req, res) => {
  try {
    const {searchvalue} = req.query
    console.log(searchvalue)
    const client = searchClient("MLKXEEH303", "dc3895feeae585b208d713220c7e40d8")
    const response = await client.searchSingleIndex({ indexName: 'ecommerce'})
    console.log(response.hits)
    res.send (response)
  }
  catch (error)
  {

  }
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

