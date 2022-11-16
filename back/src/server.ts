import "module-alias/register";

import app from "@src/app";
import { db } from "@src/db";

const PORT = process.env.PORT || 5002;

db.on("connected", () => console.log(`DB connected...`));
db.on("error", (err) => {
  console.error(`DB connection error : ${err}`);
});

app.listen(PORT, () => {
  console.log(`${PORT} Port is listening...`);
});
