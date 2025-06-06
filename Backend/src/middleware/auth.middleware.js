import { verifyToken } from "../utils/helper.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = await verifyToken(token);
    const user = await findUserByEmail(decoded); 
     
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user; // Attach user to request object
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
