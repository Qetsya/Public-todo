import jwt from "jsonwebtoken";

export function generateToken(userId) {
const jwtSecretKey = process.env.JWT_SECRET_KEY;

const data = {
    id: userId,
    time: new Date(),
    someVariables: "value",
};

const token = jwt.sign(data, jwtSecretKey);
return token;
}