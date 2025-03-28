"use client";

import ShareIcon from "@/assets/icons/share-icon";
import { useEffect, useState } from "react";

import { useModalSendMessage } from "@/hook/use-modal-send-message/use-modal-send-message";
import { useUser } from "@/hook/useUser/use-user";
import { useRouter } from "next/navigation";
import { UseUserDetails } from "@/hook/use-user-details/use-user-details";
import { UserPlan } from "../user-plan/user-plan";
import { Loader } from "../Loader/loader";
import { Filter } from "../filter/filter";
import moment from "moment";

type Customer = {
  name: string;
  userNumber: string;
  email: string;
  plan: string;
  lastPayment: string;
  createdAt: string;
};

export function Customers() {
  const router = useRouter();
  const {
    customers,
    setCustomers,
    loadingGetUser,
    handleGetUser,
    handleOrderBy,
  } = useUser();
  const { handleChangeUserObj } = UseUserDetails();
  // const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    if (!customers.length) {
      handleGetUser();
    }
  }, []);

  if (loadingGetUser) {
    return <Loader />;
  }

  return (
    <main className="w-full h-full bg-bg-primary overflow-y-auto pb-10 ">
      <div className="mt-10 pl-10">
        <h1 className="text-white text-2xl font-madefor font-bold">
          Bem-vindo ao seu <span className="text-bg-blue-ocean">dashboard</span>
        </h1>
      </div>

      <div className="w-full px-10 flex justify-between items-center">
        <h1 className="mt-10  text-2xl font-madefor  text-white">
          Clientes ({customers.length})
        </h1>
      </div>

      <section className="w-[95%] max-h-[650px]  overflow-y-auto  ml-10 mt-10  border-0.5 rounded-lg border-bg-gray-ligth ">
        <div className="px-6 py-2 flex justify-between">
          <Filter
            onChange={(e) => {
              //@ts-ignore
              handleOrderBy({ order: e.target.value });
            }}
            title="Ordernar por"
            options={["Mais recentes", "Mais antigos"]}
            defaultValue="Mais recentes"
          />
        </div>

        <div className="p-6 pb-10 max-h-[600px]">
          <table className="w-full bg-bg-primary cursor-pointer rounded-lg overflow-hidden border-separate border-spacing-y-3">
            <thead>
              <tr className="">
                <th className="text-left px-4 text-gray-400 font-light">
                  Nome
                </th>
                <th className="text-left px-4 text-gray-400 font-light">
                  Número
                </th>
                <th className="text-left px-4 text-gray-400 font-light">
                  Cadastro
                </th>
                <th className="text-left px-4 text-gray-400 font-light">
                  Plano
                </th>
                <th className="text-left px-4 text-gray-400 font-light">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr
                  key={index}
                  className="h-16 bg-bg-gray-ligth hover:bg-[#252525] transition-colors"
                  onClick={() => handleChangeUserObj(customer, router)}
                >
                  <td className="p-4 text-white rounded-l-lg ">
                    {customer.name}
                  </td>
                  <td className="p-4 text-white">{customer.phone}</td>
                  <td className="p-4 text-white">
                    {moment(customer.createdAt).format("DD/MM/YYYY")}
                  </td>
                  <td className="p-4">
                    <UserPlan plan={customer.plan} />
                  </td>
                  <td className="p-4 text-white rounded-r-lg ">
                    <div>
                      <button
                        className="text-blue-500 hover:underline text-sm flex items-center gap-2"
                        onClick={() =>
                          window.open(`https://wa.me/${customer.phone}`)
                        }
                      >
                        Enviar mensagem
                        <ShareIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
