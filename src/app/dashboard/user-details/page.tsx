"use client";

import { Menu } from "@/components/menu/manu";
import { UserPlan } from "@/components/user-plan/user-plan";
import { HistoricChat } from "@/components/historic-chat/historic-chat";
import { UseUserDetails } from "@/hook/use-user-details/use-user-details";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader/loader";

type Payment = {
  userNumber: string;
  createdAt: string;
  status: string;
  amount: number;
};

export type HistoricChat = {
  conversation: {
    content: string;
    role: "user" | "model";
    dateAt?: string;
  }[];
  userNumber: string;
};

export default function UserDetails() {
  const { userObj } = UseUserDetails();

  const [payment, setPayment] = useState<Payment[]>([]);
  const [historicChat, setHistoricChat] = useState<HistoricChat[]>([]);
  const [loading, setLoading] = useState(false);

  const messagesList = historicChat?.map(
    (item) => item.conversation[item.conversation?.length - 1]
  );

  useEffect(() => {
    getuserInf();
  }, []);

  const getuserInf = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/api/payment/getPayment/${userObj.phone}`
      );

      const responseHistoric = await axios.get(
        `/api/historic/getHistoricChat/${userObj.phone}`
      );

      if (response.data && responseHistoric.data) {
        setHistoricChat(responseHistoric.data);
        setPayment(response.data);
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full h-screen   bg-bg-primary flex">
      <Menu />

      {loading && (
        <div className="w-full h-full ml-[230px] flex items-center justify-center">
          <Loader />
        </div>
      )}

      {!loading && (
        <section className="w-full min-h-full overflow-y-auto ml-[230px] px-10 py-10 ">
          <section className="w-[95%] max-h-[450px]  overflow-y-auto  ml-10 mt-2  border-0.5 rounded-lg bg-black/40 border-bg-gray-ligth &::-webkit-scrollbar]:w-2 &::-webkit-scrollbar-thumb]:bg-bg-gray-ligth &::-webkit-scrollbar-thumb]:rounded-full &::-webkit-scrollbar-thumb]:border-2 &::-webkit-scrollbar-thumb]:border-bg-gray-ligth ">
            <HistoricChat historic={historicChat} />
          </section>

          <div className="w-full pt-10 flex flex-col  items-center justify-center gap-3">
            <h1 className="text-white text-2xl font-bold">Plano atual</h1>

            <UserPlan plan={userObj.plan} />
          </div>

          <div className="w-full flex justify-between items-center">
            <span
              className="px-4 py-2 rounded-full 
           bg-[#FF00B2]/10 text-white text-lg"
            >
              {messagesList.map((item) => {
                if (item.dateAt) {
                  return ` Ultima mensagem : ${moment(item.dateAt).format(
                    "DD MMM"
                  )} as
                ${moment(item.dateAt).format("HH:mm")}`;
                }
                return "Sem mensagens";
              })}
            </span>

            <span
              className="px-4 py-2 rounded-full text-lg 
           bg-[#344499]/10 text-white"
            >
              {userObj.lastPayment !== null &&
                ` Plano disponivel até :  
             ${moment(userObj.lastPayment).format("DD MMM")} as ${moment(
                  userObj.lastPayment
                ).format("HH:mm")}`}

              {userObj.lastPayment == null && `Sem plano contratado`}
            </span>
          </div>

          <h1 className="text-white text-xl  ml-10 mt-10">
            Histórico de pagamentos
          </h1>
          <div>
            <section className="w-[95%] max-h-[650px]  overflow-y-auto  ml-10 mt-2  border-0.5 rounded-lg border-bg-gray-ligth ">
              <div className="p-6 pb-10 max-h-[600px]">
                <table className="w-full bg-bg-primary rounded-lg overflow-hidden border-separate border-spacing-y-3 ">
                  <thead>
                    <tr className="">
                      <th className="  px-4 text-gray-400 font-light ">
                        Valor
                      </th>
                      <th className="  px-4 text-gray-400 font-light">
                        Status
                      </th>
                      <th className="   px-4 text-gray-400 font-light">Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payment.map((payment, index) => (
                      <tr
                        key={index}
                        className="h-16 bg-bg-gray-ligth hover:bg-[#252525] transition-colors "
                      >
                        <td className="p-4 text-white rounded-l-lg text-center ">
                          {Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(payment.amount)}
                        </td>
                        <td className="p-4 text-white text-center">
                          {"Aprovado"}
                        </td>
                        <td className="p-4 text-white  text-center  ">
                          {moment(payment.createdAt).format("DD/MM/YYYY")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </section>
      )}
    </main>
  );
}
