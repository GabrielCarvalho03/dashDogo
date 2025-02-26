import { db } from "@/services/firebase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const data = await db.collection("challenger").get();

    return NextResponse.json(data.docs.map((doc) => doc.data()));
  } catch (err) {
    console.log("erro ao pegar desafios", err);
  }
}
