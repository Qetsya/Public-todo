import { listJSON } from "../data/list.mjs";

export const removeTodoController = (req, response) => {
    //ILGESNIS BUDAS
    // let deletedCount = 0;
    // const { documents } = listJSON;
    // const newDocuments = [];
    // const requestedDeleteId = req.body._id;

    // for (let i = 0; i < documents.length; i++) {
    //     const todo = documents[i];
    //     if (todo._id !== requestedDeleteId) {
    //         newDocuments.push(todo);
    //     } else {
    //         deletedCount++;
    //     }
    // };

    // listJSON.documents = newDocuments;

    //TRUMPESNIS BUDAS SU FILTER
    const { documents } = listJSON;
    const requestedDeleteId = req.body._id;

    const isRequestedIdValid = typeof requestedDeleteId === "string";

    if (!isRequestedIdValid) {
        response.status(400).json({
            message: "Invalid delete ID",
        });
        return;
    }

    const newDocuments = documents.filter(({ _id }) => _id !== requestedDeleteId);
    const deletedCount = documents.length - newDocuments.length;
    listJSON.documents = newDocuments;

    response.json({
        deletedCount,
    });
};
