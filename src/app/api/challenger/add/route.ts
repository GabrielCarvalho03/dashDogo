import { challengeObject } from "@/hook/use-Challanger/types";
import { db } from "@/services/firebase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { description, id, title, type } = body as challengeObject;

  try {
    const saveChallenger = await db.collection("challenger").add({
      id,
      title,
      description,
      type,
    });

    return NextResponse.json(saveChallenger);
  } catch (err) {
    console.log("impossivel salvar o desafio", err);
  }
}
