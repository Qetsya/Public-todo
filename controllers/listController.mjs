import { listJSON } from "../data/list.mjs";
import { decodeToken } from "../utils/tokens.mjs";

export const listController = (req, response) => {
  const {token} = req.headers;
  const userData = decodeToken(token);
  console.log(req.headers.token)
  response.json(listJSON);
};
