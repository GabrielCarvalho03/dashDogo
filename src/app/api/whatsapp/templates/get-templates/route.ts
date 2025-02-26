import axios from "axios";
import { NextResponse } from "next/server";

export interface WhatsappTemplate {
  id: string;
  name: string;
  status: "APPROVED" | "PENDING" | "REJECTED";
  category: "MARKETING" | "UTILITY" | "AUTHENTICATION";
  language: string;
  components: Array<{
    type: string;
    format?: string;
    text?: string;
    image?: string;
    buttons?: Array<{
      type: string;
      text: string;
    }>;
  }>;
}

export async function GET(request: Request) {
  try {
    const response = await axios.get(
      "https://graph.facebook.com/v21.0/555219654336094/message_templates",
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
        params: {
          fields: "name,status,category,language,components",
        },
      }
    );

    return NextResponse.json(response.data.data as WhatsappTemplate[]);
  } catch (error) {
    console.log("Error to get templates", error);
  }
}
