import { cookieOptions } from "../config/config.js";
import { findUserByEmail } from "../dao/user.dao.js";
import { loginUser, registerUser } from "../services/auth.service.js";
import wrapAsync from "../utils/tryCatchRapper.js";

export const register = wrapAsync(async (req, res) => {
  //register logic
  const { name, email, password } = req.body;
  const { token, user } = await registerUser(name, email, password);
  res.cookie("accessToken", token, cookieOptions);
  return res.status(200).json({user:user, message: "successfully registered" });
});

export const login = wrapAsync(async (req, res) => {
  const { email, password } = req.body;

  const { token, user } = await loginUser(email, password);
  req.user = user; // Attach user to request object
  res.cookie("accessToken", token, cookieOptions);
  return res
    .status(200)
    .json({ user: user, message: "successfully logged in" });
});

export const logout = wrapAsync(async (req, res) => {
  res.clearCookie("accessToken", cookieOptions);
  return res.status(200).json({ message: "successfully logged out" });
});

export const me = wrapAsync(async (req, res) => {
  return res.status(200).json({ user: req.user });
});
