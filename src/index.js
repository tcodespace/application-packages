import { fileURLToPath } from "url";
import { dirname, join } from "path";
import express from "express";

const __filename = fileURLToPath(import.meta.url);

const app = express();

app.use("/release", express.static(join(__filename, "../../packages")));

app.listen(3000, () => {
  console.log("server is running");
});
