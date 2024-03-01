import { mongoConect } from "lib/mongo-conect";
import User from "models/User";
import { UserType } from "models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cretentials = await req.json();
  await mongoConect();
  const user = await User.findOne<UserType>({
    email: cretentials.email,
  });
  if (!user) return NextResponse.json({ error: "User is not found" });
  if (user.password != cretentials.password)
    return NextResponse.json({ error: "Password is wrong" });
  return NextResponse.json(user);
}
