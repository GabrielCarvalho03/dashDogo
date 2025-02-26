import { db } from "@/services/firebase";
import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

export const dynamic = "force-dynamic";

interface RouteContext {
  params: {
    userNumber: string;
  };
}

export async function GET(request: NextRequest, context: RouteContext) {
  // Adicionando uma asserção de tipo explícita
  const { userNumber } = context.params as unknown as { userNumber: string };

  try {
    const conversationSnapshot = await db
      .collection("conversations")
      .where("phone", "==", userNumber)
      .get();

    const conversationData = conversationSnapshot.docs.map((doc) => doc.data());

    if (conversationData.length === 0) {
      const conversationSnapshotFallback = await db
        .collection("conversations")
        .where("phone", "==", userNumber)
        .get();

      const conversationDataFallback = conversationSnapshotFallback.docs.map(
        (doc) => doc.data()
      );
      return NextResponse.json(conversationDataFallback);
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
