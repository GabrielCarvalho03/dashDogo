import { db } from "@/services/firebase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { userNumber } = body;

  const payments = await db
    .collection("payments")
    .where("userNumber", "==", userNumber)
    .get();

  return NextResponse.json(payments.docs.map((doc) => doc.data()));
}
