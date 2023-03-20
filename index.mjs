import express from "express";
import { listController } from "./controllers/listController.mjs";
import { createTodoController } from "./controllers/createTodoController.mjs";
import { removeTodoController } from "./controllers/removeTodoController.mjs";
import { editTodoController } from "./controllers/editTodoController.mjs";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); //turi buti paciame virsuje

const app = express();
const port = process.env.PORT;


app.use(express.json()); // padaro matoma tik body
const corsMiddleware = cors(); //nuima cors errora narsyklese

app.use(corsMiddleware);
app.get("/api/list", listController);
app.post("/api/todo", createTodoController);
app.delete("/api/todo", removeTodoController);
app.put("/api/todo", editTodoController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});