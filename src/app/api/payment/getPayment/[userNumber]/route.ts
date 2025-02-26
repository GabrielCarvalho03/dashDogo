import { db } from "@/services/firebase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { userNumber: string } }
) {
  const { userNumber } = await params;

  const payments = await db
    .collection("payments")
    .where("userNumber", "==", userNumber)
    .get();

  return NextResponse.json(payments.docs.map((doc) => doc.data()));
}
