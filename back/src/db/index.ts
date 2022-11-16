import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";

import userModel from "@src/db/models/userModel";

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: path.join(__dirname, "../../config/.env") });
}

const DB_URL: string =
  process.env.DB_URL || "Check whether .env file is or not.";

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", () => console.log(`DB connected...`));
db.on("error", (err) => {
  console.error(`DB connection error : ${err}`);
});

export { db };
export { userModel };
