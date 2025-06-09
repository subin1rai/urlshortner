import {
  createUser,
  findUserByEmail,
  findUserByEmailandPassword,
} from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorHandler.js";
import { signToken, hashPassword, comparePassword } from "../utils/helper.js";

export const registerUser = async (name, email, password) => {
  const user = await findUserByEmail(email);
  if (user) {
    throw new ConflictError("User already exists");
  }

  // Hash password before storing
  const hashedPassword = await hashPassword(password);
  const newUser = await createUser(name, email, hashedPassword);

  const token = await signToken({ id: newUser._id });
   return { token, user };

};

export const loginUser = async (email, password) => {
  const user2 = await findUserByEmailandPassword(email);

  if (!user2) {
    throw new ConflictError("Invalid credentials");
  }

  // Compare password with stored hash
  const isPasswordValid = await comparePassword(password, user2.password);
  if (!isPasswordValid) {
    throw new ConflictError("Invalid credentials");
  }

  const user = await findUserByEmail(email);
  const token = await signToken({ id: user._id });
  return { token, user };
};
