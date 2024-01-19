import { listJSON } from "../data/list.mjs";

export const removeTodoController = (req, res) => {
  const { documents } = listJSON;
  const requestedDeleteId = req.params.todoItemId;

  const isRequestedIdValid = typeof requestedDeleteId === "string";

  if (!isRequestedIdValid) {
    res.status(400).json({
      message: "Invalid delete ID",
    });
    return;
  }

  const newDocuments = documents.filter(({ _id }) => _id !== requestedDeleteId);
  const deletedCount = documents.length - newDocuments.length;
  listJSON.documents = newDocuments;

  res.json({
    deletedCount,
  });
};
