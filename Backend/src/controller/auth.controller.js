import { cookieOptions } from "../config/config.js";
import { findUserByEmail } from "../dao/user.dao.js";
import { loginUser, registerUser } from "../services/auth.service.js";
import wrapAsync from "../utils/tryCatchRapper.js";

export const register = wrapAsync(async (req, res) => {
  //register logic
  const { name, email, password } = req.body;
  const token= await registerUser(name, email, password);
  res.cookie("accessToken", token, cookieOptions);
    return res.status(200).json({message: "successfully registered"});
});

export const login = wrapAsync(async (req, res) => {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.cookie("accessToken", token, cookieOptions);
    return res.status(200).json({message: "successfully logged in"});
});
