import { findUserByEmail, findUserById } from "../dao/user.dao.js";
import { verifyToken } from "../utils/helper.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log("Auth Middleware", token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = await verifyToken(token);
    const user = await findUserById(decoded); 
     console.log("sdfsd",decoded.email)
     console.log(user)
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user; // Attach user to request object
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
