
import { createUser, findUserByEmail } from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorHandler.js";
import { signToken } from "../utils/helper.js";

export const registerUser = async (name, email, password) => {
  const user = await findUserByEmail(email);
  if (user) {
    throw new ConflictError("User already exists");
  }
  const newUser = await createUser(name, email, password);
  const token = await signToken({ id: newUser._id });
  return token;
};

export const loginUser = async (email, password) => {
    console.log(email, password);
    const user = await findUserByEmail(email);
    console.log(user)
    if(!user || user.password !== password) {
        throw new ConflictError("Invalid credentials");
    }
    const token = await signToken({ id: user._id });
    return token;
}
