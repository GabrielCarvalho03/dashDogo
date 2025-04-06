"use client";

import { Loader } from "@/components/Loader/loader";
import { ModalSaveChallenger } from "@/components/modais/save-challenger/modal-save-challenger";
import { useEffect } from "react";
import { Trash, Pencil } from "lucide-react";
import { useUseLesson } from "@/hook/use-Challanger/use-challanger";

export default function Challenger() {
  const {
    lesson,
    setModalSaveLesson,
    handleGetLesson,
    handleDeleteLesson,
    loadingGetLesson,
  } = useUseLesson();

  useEffect(() => {
    if (!lesson.length) {
      handleGetLesson();
    }
  }, []);

  return (
    <>
      {loadingGetLesson ? (
        <Loader />
      ) : (
        <main className="w-full h-full bg-bg-primary overflow-y-auto pb-10 ">
          <div className="w-full px-10 flex justify-between items-center my-10">
            <h1 className="  text-2xl font-madefor  text-white">Lessons</h1>

            <button
              className="bg-bg-blue-ocean text-white px-4 py-2 rounded-lg"
              onClick={() => setModalSaveLesson(true)}
            >
              Adicionar desafio
            </button>
          </div>

          <section className="w-[95%] max-h-[650px]  overflow-y-auto  ml-10 mt-10  border-0.5 rounded-lg border-bg-gray-ligth ">
            <div className="p-6 pb-10 max-h-[600px]">
              <table className="w-full bg-bg-primary rounded-lg overflow-hidden border-separate border-spacing-y-3 ">
                <thead>
                  <tr className="">
                    <th className="  px-4 text-gray-400 font-light ">id</th>
                    <th className="  px-4 text-gray-400 font-light">Título</th>
                    <th className="  px-4 text-gray-400 font-light">Nível</th>
                    <th className="   px-4 text-gray-400 font-light">
                      módulos
                    </th>
                    <th className="   px-4 text-gray-400 font-light">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {lesson?.map((lesson, index) => (
                    <tr
                      key={index}
                      className="h-16 bg-bg-gray-ligth hover:bg-[#252525] transition-colors "
                    >
                      <td className="p-4 text-white rounded-l-lg text-center ">
                        {lesson.id}
                      </td>
                      <td className="p-4 text-white text-center">
                        {lesson.title}
                      </td>
                      <td className="p-4 text-white  text-center  ">
                        {lesson.nivel}
                      </td>
                      <td className="p-4 text-white  text-center  ">
                        {lesson.modules.length}
                      </td>

                      <td className="p-4 text-white  text-center  ">
                        <section className="w-full  flex justify-center">
                          <div
                            className="cursor-pointer text-red-400"
                            onClick={() => handleDeleteLesson(lesson.id)}
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
