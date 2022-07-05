import dotenv from "dotenv";
import { app } from "./src/app";
import path from "path";

if (process.env.NODE_ENV === "local") {
  dotenv.config({ path: path.join(__dirname, "../../.env.local") });
}

const PORT = +process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Port is listening... ${PORT}`);
});
