import { listJSON } from "../data/list.mjs";
import { decodeToken } from "../utils/tokens.mjs";

export const listController = (req, res) => {
  const { token } = req.headers;
  const userData = decodeToken(token);
  res.json(listJSON);
};
