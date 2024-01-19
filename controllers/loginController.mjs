import { usersList } from "../data/users.mjs";
import { comparePassword } from "../utils/hashing.mjs";
import { generateToken } from "../utils/tokens.mjs";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const isEmailValid = typeof email === "string";
  const isPasswordValid = typeof password === "string" && password.length >= 3;

  if (!isEmailValid || !isPasswordValid) {
    res.status(403).json({
      message: "Invalid credentials",
    });
    return;
  }

  const user = usersList.find((user) => user.email === email);
  if (!user) {
    res.status(403).json({
      message: "User not found",
    });
    return;
  }

  const userPassword = user.password;

  const isPasswordMatch = await comparePassword(password, userPassword);

  if (!isPasswordMatch) {
    res.status(403).json({
      message: "Invalid password",
    });
    return;
  }

  console.log(`login user`, user);
  const token = generateToken(user._id);

  res.json({
    _id: user._id,
    email: user.email,
    token: token,
  });
};
