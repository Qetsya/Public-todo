import { listJSON } from "../data/list.mjs";
import { v4 as createId } from "uuid"

export const createTodoController = (req, response) => {

    const id = createId();

    const { title, description, completed } = req.body;

    const isTitleValid = typeof title === "string" && title.length > 5;
    const isDescriptionValid = typeof description === "string" && description.length > 5;
    const isCompletedValid = typeof completed === "boolean";

    if (!isTitleValid || !isCompletedValid || !isDescriptionValid) {
        response.status(400).json({
            message: "Invalid data",
        })
        return;
    };

    const todo = {
        _id: id,
        title,
        description,
        completed,
    };
    listJSON.documents.push(todo);

    response.json({
        insertedId: id,
    })
};
