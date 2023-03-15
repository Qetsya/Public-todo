import { listJSON } from "../data/list.mjs";
import { v4 as createId } from "uuid"

export const createTodoController = (req, response) => {

    const id = createId();
    console.log(id)

    // req.body =  {
    //     "title": "Todo Name 5",
    //     "description": "Todo Description",
    //     "completed": false
    // }

    const todo = {
        _id: id,
        ...req.body,
    };
    listJSON.documents.push(todo);

    response.json({
        insertedId: id,
    })
};
