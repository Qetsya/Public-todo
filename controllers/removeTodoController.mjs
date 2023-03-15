import { listJSON } from "../data/list.mjs";

export const removeTodoController = (req, res) => {
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

    const newDocuments = documents.filter(({ _id }) => _id !== requestedDeleteId);
    const deletedCount = documents.length - newDocuments.length;
    listJSON.documents = newDocuments;

    res.json({
        deletedCount,
    });
};
