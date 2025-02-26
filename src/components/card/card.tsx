"use client";
import { WhatsappTemplate } from "@/app/api/whatsapp/templates/get-templates/route";
import { useModalSendMessage } from "@/hook/use-modal-send-message/use-modal-send-message";

type CardProps = {
  data: WhatsappTemplate;
};

export function Card({ data }: CardProps) {
  const { handleSendMessage } = useModalSendMessage();
  return (
    <main
      key={data.id}
      className="w-[20rem] h-[25rem] bg-bg-primary  border-0.5 rounded-lg border-bg-gray-ligth relative"
    >
      <div className="absolute top-0 right-0">
        <div className="bg-bg-blue-ocean rounded-lg px-6 py-1 text-white ">
          <h1>{data.category.toLowerCase()}</h1>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-white text-2xl font-[300] text-center">
          {" "}
          {data.name}
        </h1>

        <div className="flex items-center justify-center gap-1 py-2">
          <h1 className="text-white text-sm font-[300] ">
            {" "}
            {data.status === "APPROVED"
              ? "Aprovado"
              : data.status === "PENDING"
              ? "Pendente"
              : "Rejeitado"}
          </h1>
          {data.status === "APPROVED" ? (
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          ) : data.status === "PENDING" ? (
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          ) : (
            <div className="w-3 h-3 bg-red-500 rounded-full" />
          )}
        </div>

        <div className="mt-10 px-4">
          <h1 className="text-white text-2xl font-[300] text-center">
            {" "}
            {data.components.map((item, index) => (
              <h1
                key={index}
                className="text-white/50 text-sm font-[300] text-center"
              >
                {item.type == "BODY" && item.text}
              </h1>
            ))}
          </h1>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="w-10/12 absolute bottom-2  bg-bg-blue-ocean text-white text-sm font-[400] px-4 py-2 rounded-lg"
            onClick={() =>
              handleSendMessage({
                templateName: data.name,
                language: data.language,
              })
            }
          >
            usar template
          </button>
        </div>
      </div>
    </main>
  );
}
