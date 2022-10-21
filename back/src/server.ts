import "module-alias/register";
import dotenv from "dotenv";
import path from "path";

import app from "@src/app";

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: path.join(__dirname, "../config/.env") });
}

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`${PORT} Port is listening...`);
});
