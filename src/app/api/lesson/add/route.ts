import { lessonObject } from "@/hook/use-Challanger/types";
import { db } from "@/services/firebase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { id, title, nivel, modules } = body as lessonObject;

  try {
    const saveChallenger = await db.collection("lesson").add({
      id,
      title,
      nivel,
      modules,
    });

    return NextResponse.json(saveChallenger);
  } catch (err) {
    console.log("impossivel salvar o desafio", err);
  }
}
