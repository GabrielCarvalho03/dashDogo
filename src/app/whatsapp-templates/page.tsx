"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { WhatsappTemplate } from "../api/whatsapp/templates/get-templates/route";
import { Card } from "@/components/card/card";
import { useModalSendMessage } from "@/hook/use-modal-send-message/use-modal-send-message";

export default function WhatsappTemplates() {
  const { isOpen, setIsOpen } = useModalSendMessage();
  const [templates, setTemplates] = useState<WhatsappTemplate[]>([]);

  useEffect(() => {
    const getTemplates = async () => {
      const response = await axios.get("/api/whatsapp/templates/get-templates");
      setTemplates(response.data);
      console.log(response.data);
    };

    getTemplates();
  }, []);

  return (
    <main className="w-full h-screen bg-bg-primary flex">
      <div className="w-full h-full bg-bg-primary flex flex-col mt-20">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-[300] ml-10 py-5">
            Lista de templates
          </h1>

          <button
            className="bg-bg-blue-ocean text-white px-4 py-2 rounded-md mr-16"
            onClick={() => setIsOpen(true)}
          >
            Adicionar template
          </button>
        </div>

        <section className="w-[95%] max-h-[650px]  overflow-y-auto  ml-10 mt-2  border-0.5 rounded-lg border-bg-gray-ligth p-5  ">
          <div className="w-full flex flex-wrap gap-10 justify-center items-center">
            {templates.map((item) => (
              <Card data={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
