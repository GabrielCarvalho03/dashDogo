"use client";

import { HistoricChat as HistoricChatType } from "@/app/dashboard/user-details/page";
import moment from "moment";

type HistoricChatProps = {
  historic: HistoricChatType[];
};

export const HistoricChat = ({ historic }: HistoricChatProps) => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-start">
          `
          {historic.map((item) => (
            <div className="w-full">
              {item.conversation.map((item) => (
                <>
                  <h1
                    className={`text-white text-sm ${
                      item.role == "user" && "text-end"
                    }`}
                  >
                    {item.role == "user" ? "user" : "Dogo"}
                  </h1>
                  <section
                    className={` flex ${
                      item.role == "user" ? "justify-end" : "justify-start"
                    } py-3`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl relative flex flex-col ${
                        item.role === "user"
                          ? "rounded-br-none "
                          : "rounded-bl-none"
                      } bg-blue-500 px-4 py-2 text-white `}
                    >
                      {item.content}
                      {item.dateAt && (
                        <span className="text-[10px] text-gray-400 text-end ">
                          {moment(item.dateAt).format("DD/MM/YYYY HH:mm")}
                        </span>
                      )}
                    </div>
                  </section>
                </>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
