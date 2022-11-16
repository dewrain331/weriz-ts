/* eslint-disable */
import { Request, Response, NextFunction } from "express";

const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errorMsg: any = {
    errorMessage: error.message,
  };

  if (errorMsg === "error.unAuthroized") {
    res.status(401).json(errorMsg);
  }

  res.status(400).json(errorMsg);
};

export default errorMiddleware;
