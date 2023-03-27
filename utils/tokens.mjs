import jwt from "jsonwebtoken";
const jwtSecretKey = process.env.JWT_SECRET_KEY;

export function generateToken(userId) {

const data = {
    id: userId,
    time: new Date(),
    someVariables: "value",
};

const token = jwt.sign(data, jwtSecretKey);
return token;
}

export function decodeToken(token) {
    const data = jwt.verify(token, jwtSecretKey);
    return data;
}