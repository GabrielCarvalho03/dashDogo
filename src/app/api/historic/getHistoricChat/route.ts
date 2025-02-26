// src/app/api/historic/getHistoricChat/[userNumber]/route.ts
import { db } from "@/services/firebase";
import { NextRequest, NextResponse } from "next/server";

// Rota dinâmica para pegar o parâmetro `userNumber`
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { userNumber } = body;
  try {
    // Busca a conversa no Firestore usando o `userNumber`
    const conversationSnapshot = await db
      .collection("conversations")
      .where("phone", "==", userNumber)
      .get();

    const conversationData = conversationSnapshot.docs.map((doc) => doc.data());

    if (conversationData.length === 0) {
      return NextResponse.json(
        { message: "Nenhuma conversa encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(conversationData);
  } catch (e) {
    console.error("Erro ao buscar conversa:", e);
    return NextResponse.json(
      { error: "Erro ao buscar conversa" },
      { status: 500 }
    );
  }
}
