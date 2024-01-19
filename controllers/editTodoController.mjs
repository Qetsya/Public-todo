import { listJSON } from "../data/list.mjs";

export const editTodoController = (req, res) => {
  const { documents } = listJSON;

  const { _id, title, description, completed } = req.body;

  const isValidId = typeof _id === "string";
  const isTitleValid = typeof title === "string" && title.length >= 3;
  const isDescriptionValid =
    typeof description === "string" && description.length >= 3;
  const isCompletedValid = typeof completed === "boolean";

  if (!isValidId || !isTitleValid || !isCompletedValid || !isDescriptionValid) {
    res.status(400).json({
      message: "Invalid data",
    });
    return;
  }

  let replacedCount = 0;
  for (let i = 0; i < documents.length; i++) {
    const todo = documents[i];
    if (todo._id !== _id) continue;

    documents[i] = req.body;
    replacedCount++;
  }

  res.json({
    matchedCount: replacedCount,
    modifiedCount: replacedCount,
  });
};
