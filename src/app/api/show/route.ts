import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json("Massage");
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  return NextResponse.json(data);
}
