import express, { Request, Response } from "express";
import connectDB from "../config/db";
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express();
const port = 4000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
connectDB();


import { signupRouter } from "./router/signuprouter";
import { loginRouter } from "./router/loginrouter";
import { uploadRouter } from './router/uploadrouter';
import { getproductdetailsRouter } from "./router/getproductdetailsrouter";
import { addtowishlistrouter } from "./router/addtowishlistrouter";
import { removefromwishlistrouter } from "./router/removefromwishlistrouter";
import { postproductrouter } from "./router/postproductsrouter";
import { getfromwishlistrouter } from "./router/getfromwishlistrouter";
import { getoneproductrouter } from "./router/getoneproductrouter";
import { productfilterrouter } from "./router/productfilterrouter";
import { sendOTProuter } from "./router/sendOTProuter";
import { getsignedupuserrouter } from "./router/getsignedupuserrouter";




app.use(getsignedupuserrouter)
app.use(signupRouter)
app.use(loginRouter)
app.use(uploadRouter)
app.use(getproductdetailsRouter)
app.use(addtowishlistrouter)
app.use(removefromwishlistrouter)
app.use(postproductrouter)
app.use(getfromwishlistrouter)
app.use(getoneproductrouter)
app.use(productfilterrouter)
app.use (sendOTProuter)


























// app.get("/search",checkAuth, async (req:Request, res:Response) =>
//   {
//     try{
//       await client.connect();
//         const database = client.db("ecommerce");
//         const coll = database.collection("postproducts");
//       const{searchvalue} = req.query
//       console.log(searchvalue)
//       const data = await postProduct.find({$search: {
//         index: "index",
//         text: {
//           query: searchvalue,
//           path: {
//             wildcard: "*"
//           }
//         }}})
//       console.log(data)
//       res.send("hi")
//     }
//     catch(error) {
//       console.log(error)
//       res.status(400).send("Could not get saved products")
//     }
//   }
// )


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

