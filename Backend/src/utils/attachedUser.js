import { findUserById } from "../dao/user.dao.js";
import { verifyToken } from "./helper.js";

export const attachedUser = async (req, res, next) => {
  console.log("Attached User Middleware", req.cookies.accessToken);
  const token = req.cookies.accessToken
  if (!token) return next();
  try
  {
    const decoded = verifyToken(token); 
    console.log("Decoded token:", decoded);
    const user =  await findUserById(decoded);
    if (!user) {
      return next();
    }
    req.user = user; 
    console.log("User attached to request:", req.user);
    next();
}catch (error) {
    console.log(error); 
 next();
  }
    } ;