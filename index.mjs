import express from "express";
import { listController } from "./controllers/listController.mjs";
import { createTodoController } from "./controllers/createTodoController.mjs";
import { removeTodoController } from "./controllers/removeTodoController.mjs";
import { editTodoController } from "./controllers/editTodoController.mjs";
import { registerController } from "./controllers/registerController.mjs"
import { loginController } from "./controllers/loginController.mjs"
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;


app.use(express.json());
const corsMiddleware = cors();

app.use(corsMiddleware);
app.get("/api/list", listController);
app.post("/api/todo", createTodoController);
app.delete("/api/todo/:todoItemId", removeTodoController);
app.put("/api/todo", editTodoController);
app.post("/api/register", registerController);
app.post("/api/login", loginController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});