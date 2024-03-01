import { Schema, models, model } from "mongoose";
export type UserType = {
  id: string;
  fullName: string;
  email: string;
  password: string;
  agreement: boolean;
};
const userSchema = new Schema({
  fullName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String || Number, required: true },
  agreement: Boolean,
});

export default models.User || model("User", userSchema);
