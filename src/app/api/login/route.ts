import { mongoConect } from "lib/mongo-conect";
import User from "models/User";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user = await req.json();
  await mongoConect();
  const newUser = await User.find({
    email: user.email,
  });
  if (newUser[0] != undefined) {
    console.log(newUser);
    redirect("/");
  } else {
    console.log("ERROR");
    redirect("/login");
  }
}
