import { db } from "@/services/firebase";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params; // Pegando o ID da URL
    const data = await db.collection("challenger").where("id", "==", id).get();
    const docId = data.docs[0].id;
    await db.collection("challenger").doc(docId).delete();

    return NextResponse.json({ message: "Desafio deletado com sucesso!" });
  } catch (err) {
    console.error("Impossível deletar o desafio", err);
    return NextResponse.json(
      { error: "Erro ao deletar o desafio" },
      { status: 500 }
    );
  }
}
