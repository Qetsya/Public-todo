import { listJSON } from "../data/list.mjs";

export const editTodoController = (request, response) => {
    const { documents } = listJSON;

    const { _id, title, description, completed } = request.body;

    const isValidId = typeof _id === "string";
    const isTitleValid = typeof title === "string" && title.length > 5;
    const isDescriptionValid = typeof description === "string" && description.length > 5;
    const isCompletedValid = typeof completed === "boolean";

    if (!isValidId || !isTitleValid || !isCompletedValid || !isDescriptionValid) {
        response.status(400).json({
            message: "Invalid data",
        })
        return;
    };

    let replacedCount = 0;
    for (let i = 0; i < documents.length; i++) {
        const todo = documents[i];
        if (todo._id !== _id) continue;

        documents[i] = request.body;
        replacedCount++;
    }

    response.json({
        matchedCount: replacedCount,
        modifiedCount: replacedCount,
    })
};

