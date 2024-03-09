import { mongoConect } from "lib/mongo-conect";
import User from "models/User";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const user = await req.json();
  await mongoConect();
  const newUser = await User.create(user);
  return NextResponse.json(newUser);
}
