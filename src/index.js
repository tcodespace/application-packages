import { join } from "path";
import express from "express";
import serveIndex from "serve-index";
import { getLocalIPv4 } from "./utils/index.js";

const app = express();

const packagesPath = join(import.meta.dirname, "../packages");

app.use("/release", express.static(packagesPath), serveIndex(packagesPath));

app.listen(3000, () => {
  const ip = getLocalIPv4();
  console.log(`server is running at http://${ip}:3000/release`);
});
