import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  select: false
  },
  avatar: {
    type: String,
    rquired: false,
    default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
  },
});

const User = mongoose.model("User", userSchema);
export default User;
