// src/index.ts
import express, { Request, Response, text } from 'express';
import connectDB from "../config/db"
import { postProduct } from './model/postproductmodel';


const app = express();
const port = 4000;

const cors = require('cors')
app.use(cors())
app.use(express.json());

connectDB()

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express123!');
});

app.post('/postProducts', async (req: Request, res: Response) => {
  try {
    const { name, text, barCode } = req.body
    const postProducts = await postProduct.create({
      name: name,
      text: text,
      BarCode: barCode
    })
    console.log(postProducts)
    res.send(postProducts);
  } catch (error) {
    console.error(error)
    res.sendStatus(404)
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});