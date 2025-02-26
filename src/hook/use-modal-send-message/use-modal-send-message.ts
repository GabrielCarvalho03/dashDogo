"use client";

import { create } from "zustand";
import { IHandleSendMessage, IModalSendMessage } from "./types";
import { useUser } from "../useUser/use-user";
import axios from "axios";

export const useModalSendMessage = create<IModalSendMessage>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),

  handleSendMessage: async ({ templateName, language }: IHandleSendMessage) => {
    // const { customers } = useUser.getState();

    try {
      const customers = [
        {
          name: "Gabriel",
          userNumber: "5511994892766",
          email: "john.doe@example.com",
          plan: "free",
          lastPayment: "2024-01-01",
          createdAt: "2023-01-01",
        },
        {
          name: "Matheu",
          userNumber: "5511949515546",
          email: "john.doe@example.com",
          plan: "free",
          lastPayment: "2024-01-01",
          createdAt: "2023-01-01",
        },
      ];

      customers.map(async (item) => {
        try {
          const response = await axios.post("/api/whatsapp/send-message", {
            templateName,
            language,
            userNumber: item.userNumber,
          });
          return response.data;
        } catch (error) {
          console.error("Erro ao enviar mensagem:", error);
          throw error;
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
