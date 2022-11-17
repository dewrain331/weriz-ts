import { Router, Request, Response, NextFunction } from "express";

import UserService from "@src/services/userService";
import { ICanvas } from "@src/db/models/interface";

const userRouter = Router();

userRouter.get(
  "/user",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const msg = "testing...";

      res.status(200).send(msg);
    } catch (err) {
      next(err);
    }
  },
);

userRouter.get(
  "/user/canvas",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const userId = req.currentUserId;
      const userId = "test";
      const canvasFromDb = await UserService.getCanvas(userId);

      res.status(200).json(canvasFromDb);
    } catch (err) {
      next(err);
    }
  },
);

userRouter.put(
  "/user/canvas",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const userId = req.currentUserId;
      console.log(req.body);
      const userId = "test";
      const canvasData: ICanvas[] = req.body;
      const canvasIntoDb = await UserService.updateCanvas({
        id: userId,
        canvasData,
      });

      res.status(200).json(canvasIntoDb);
    } catch (err) {
      next(err);
    }
  },
);

export default userRouter;
