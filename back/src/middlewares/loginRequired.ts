import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";

import { publicKey } from "../../config/jwt";

const loginRequired = async (req: any, res: Response, next: NextFunction) => {
  const userToken: any = req.headers["authorization"]?.split(" ")[1];

  if (!userToken) {
    res.status(403).send("error.noToken");
    return;
  }

  try {
    const jwtDecoded: any = jwt.verify(userToken, publicKey);
    const userId: any = jwtDecoded.userId;

    req.currentUserId = userId;
    next();
  } catch (err) {
    res.status(401).send("error.unvalidToken");
    return;
  }
};

export default loginRequired;
