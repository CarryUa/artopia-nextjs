import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String || Number, required: true },
  agreement: Boolean,
});

export default models.User || model("User", userSchema);
