import mongoose from "mongoose";
export async function mongoConect() {
  if (mongoose.connection.readyState === 1)
    return await mongoose.connection.asPromise();
  else {
    const uri = process.env.MONGO_URI ?? "";
    return await mongoose.connect(uri);
  }
}
