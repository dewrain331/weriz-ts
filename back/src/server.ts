import "module-alias/register";

import app from "@src/app";

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`${PORT} Port is listening...`);
});
