import { listJSON } from "../data/list.mjs";
import { v4 as createId } from "uuid";

export const createTodoController = (req, res) => {
  const id = createId();

  const { title, description, completed } = req.body;

  const isTitleValid = typeof title === "string" && title.length >= 3;
  const isDescriptionValid =
    typeof description === "string" && description.length >= 3;
  const isCompletedValid = typeof completed === "boolean";

  if (!isTitleValid || !isCompletedValid || !isDescriptionValid) {
    res.status(400).json({
      message: "Invalid data",
    });
    return;
  }

  const todo = {
    _id: id,
    title,
    description,
    completed,
  };
  listJSON.documents.push(todo);

  res.json({
    insertedId: id,
  });
};
