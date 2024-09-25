// src/index.ts
import express from 'express';
import connectDB from "../config/db"
const app = express();
const port = 4000;

connectDB()

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express123!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});