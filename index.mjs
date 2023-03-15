import express from "express";
import { listController } from "./controllers/listController.mjs";
import { createTodoController } from "./controllers/createTodoController.mjs";
import { removeTodoController } from "./controllers/removeTodoController.mjs";

const app = express();
const port = 3000;

app.use(express.json()); // padaro matoma tik body

app.get("/api/list", listController);
app.post("/api/todo", createTodoController);
app.delete("/api/todo", removeTodoController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});