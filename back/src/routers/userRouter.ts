import { Router, Request, Response, NextFunction } from "express";

const userRouter = Router();

userRouter.get(
  "/user",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const msg: String = "testing...";

      res.status(200).send(msg);
    } catch (err) {
      next(err);
    }
  },
);

export default userRouter;
