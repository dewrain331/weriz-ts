import express from "express";
import cors from "cors";

import { errorMiddleware, badRequest } from "@src/middlewares";
import { userRouter } from "@src/routers";
import { swaggerUi, specs } from "@src/swagger";

const app = express();

// default app.use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// swagger api
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
);

// routers : always userRouter should be the highest one.
app.use(userRouter);

// error Middleware
app.use(errorMiddleware);

// 404 not found
app.use(badRequest);

export default app;
