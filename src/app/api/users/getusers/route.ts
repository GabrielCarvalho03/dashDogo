import { db } from "@/services/firebase";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const user = await db.collection("users").get();

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user.docs.map((doc) => doc.data()));
}
