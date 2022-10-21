import { Request, Response } from "express";

const badRequest = (req: Request, res: Response) => {
  res.status(404).json("error.noPage");
};

export default badRequest;
