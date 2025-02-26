"use client";

import { Loader } from "@/components/Loader/loader";
import { ModalSaveChallenger } from "@/components/modais/save-challenger/modal-save-challenger";
import { useUseChallenger } from "@/hook/use-Challanger/use-challanger";
import { useEffect } from "react";
import { Trash, Pencil } from "lucide-react";

export default function Challenger() {
  const {
    challenger,
    setModalSaveChallenger,
    handleGetChallangers,
    loadingGetChallanger,
    handleDeleteChallenger,
  } = useUseChallenger();

  useEffect(() => {
    if (!challenger.length) {
      handleGetChallangers();
    }
  }, []);

  return (
    <>
      {loadingGetChallanger ? (
        <Loader />
      ) : (
        <main className="w-full h-full bg-bg-primary overflow-y-auto pb-10 ">
          <div className="w-full px-10 flex justify-between items-center my-10">
            <h1 className="  text-2xl font-madefor  text-white">Desafios</h1>

            <button
              className="bg-bg-blue-ocean text-white px-4 py-2 rounded-lg"
              onClick={() => setModalSaveChallenger(true)}
            >
              Adicionar desafio
            </button>
          </div>

          <section className="w-[95%] max-h-[650px]  overflow-y-auto  ml-10 mt-10  border-0.5 rounded-lg border-bg-gray-ligth ">
            <div className="p-6 pb-10 max-h-[600px]">
              <table className="w-full bg-bg-primary rounded-lg overflow-hidden border-separate border-spacing-y-3 ">
                <thead>
                  <tr className="">
                    <th className="  px-4 text-gray-400 font-light ">Título</th>
                    <th className="  px-4 text-gray-400 font-light">
                      Descrição
                    </th>
                    <th className="   px-4 text-gray-400 font-light">Tipo</th>
                    <th className="   px-4 text-gray-400 font-light">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {challenger?.map((chanllenger, index) => (
                    <tr
                      key={index}
                      className="h-16 bg-bg-gray-ligth hover:bg-[#252525] transition-colors "
                    >
                      <td className="p-4 text-white rounded-l-lg text-center ">
                        {chanllenger.title}
                      </td>
                      <td className="p-4 text-white text-center">
                        {chanllenger.description}
                      </td>
                      <td className="p-4 text-white  text-center  ">
                        {chanllenger.type}
                      </td>

                      <td className="p-4 text-white  text-center  ">
                        <section className="w-full  flex justify-center">
                          <div
                            className="cursor-pointer text-red-400"
                            onClick={() =>
                              handleDeleteChallenger(chanllenger.id)
                            }
                          >
                            <Trash />
                          </div>
                        </section>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      )}

      <ModalSaveChallenger />
    </>
  );
}
