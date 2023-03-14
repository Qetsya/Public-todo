import express from "express";
import { listController } from "./controllers/listController.mjs";

const app = express();

app.get("/api/list", listController);

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
});