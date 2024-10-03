const jwt = require("jsonwebtoken");
import express, { NextFunction, Request, Response } from "express";
const TOKEN_SECRET = process.env.TOKEN_SECRET;
const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers["accesstoken"];
  if (!accessToken) {
    return res.sendStatus(403);
  }
  if (!jwt.verify(accessToken, TOKEN_SECRET)) {
    return res.sendStatus(403);
  }
  next();
};

export { checkAuth };