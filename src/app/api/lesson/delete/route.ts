import { db } from "@/services/firebase";
import { NextRequest, NextResponse } from "next/server";

// Alterando para pegar o parâmetro da URL corretamente com `params`
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { id } = body;
  try {
    if (!id) {
      return NextResponse.json({ error: "ID não fornecido" }, { status: 400 });
    }

    // Buscando o desafio no banco de dados
    const data = await db.collection("lesson").where("id", "==", id).get();
    const docId = data.docs[0]?.id;
    if (docId) {
      await db.collection("lesson").doc(docId).delete();
      return NextResponse.json({ message: "Desafio deletado com sucesso!" });
    }

    return NextResponse.json(
      { error: "Desafio não encontrado" },
      { status: 404 }
    );
  } catch (err) {
    console.error("Impossível deletar o desafio", err);
    return NextResponse.json(
      { error: "Erro ao deletar o desafio" },
      { status: 500 }
    );
  }
}
