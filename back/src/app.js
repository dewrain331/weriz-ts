import express from "express";
import cors from "cors";

import { swaggerUi, specs } from "./swagger/";
import { errorMiddleware, badRequest } from "./middlewares";

const app = express();

// default app.use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// swagger
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
);

// routers

// errorMiddleware
app.use(errorMiddleware);

// 404 not Found
app.use(badRequest);

export { app };
