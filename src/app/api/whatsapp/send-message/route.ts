import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { templateName, userNumber, language } = await request.json();
    const formattedNumber = userNumber.replace(/\D+/g, "");

    const messageModel = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: formattedNumber,
      type: "template",
      template: {
        name: templateName,
        language: {
          code: language,
        },
      },
    };

    const response = await fetch(
      `https://graph.facebook.com/v21.0/548746698317559/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageModel),
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem" },
      { status: 500 }
    );
  }
}
