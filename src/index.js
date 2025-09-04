import { join } from "path";
import express from "express";
import { getLocalIPv4 } from "./utils/index.js";

const app = express();

app.use("/release", express.static(join(import.meta.dirname, "../packages")));

app.listen(3000, () => {
  const ip = getLocalIPv4();
  console.log(`server is running at http://${ip}:3000/release`);
});
