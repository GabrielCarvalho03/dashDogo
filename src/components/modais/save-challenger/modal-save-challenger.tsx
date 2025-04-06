"use-client";

import Modal from "react-modal";
import { objStyle } from "./obj-style";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LessonSchema, LessonData } from "@/hook/use-Challanger/schema";
import { useUseLesson } from "@/hook/use-Challanger/use-challanger";
import { lessonObject, moduleProps } from "@/hook/use-Challanger/types";
import { toast } from "react-toastify";
import { Trash } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ModalSaveChallenger() {
  const [showCreateModule, setShowCreateModule] = useState(false);
  const [phrases, setPhrases] = useState<string>("");
  const [module, setModule] = useState<moduleProps[]>([]);
  const {
    handleSaveLesson,
    ModalSaveLesson,
    setModalSaveLesson,
    setloadingGetLesson,
    loadingGetLesson,
    handleGetLesson,
  } = useUseLesson();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LessonData>({
    mode: "all",
    resolver: zodResolver(LessonSchema),
  });

  const AddModule = () => {
    let aux = [...module];
    const randomId = Math.floor(Math.random() * 1000000);
    //@ts-ignore
    aux.push({
      lessons: [
        {
          id: randomId.toString(),
          phrases: [],
        },
      ],
    });
    console.log("modules", aux);
    setModule(aux);
  };

  const AddLesson = (indexModule: number) => {
    let aux = [...module];
    const randomId = Math.floor(Math.random() * 1000000);
    aux[indexModule].lessons.push({
      id: randomId.toString(),
      phrases: [],
    });
    setModule(aux);
  };

  const AddFrase = (
    phraseText: string,
    indexModule: number,
    indexLesson: number
  ) => {
    let auxModules = [...module];
    auxModules[indexModule].lessons[indexLesson].phrases.push(phraseText);
    console.log("phraseText", auxModules);
    setModule(auxModules);
  };

  const DeleteFrase = (
    moduloIndex: number,
    lessonIndex: number,
    phraseIndex: number
  ) => {
    const updatedModules = [...module];
    updatedModules[moduloIndex].lessons[lessonIndex].phrases.splice(
      phraseIndex,
      1
    );
    setModule(updatedModules);
  };
  console.log("erros", errors);

  const sendData = async (data: LessonData) => {
    setloadingGetLesson(true);
    const randomId = Math.floor(Math.random() * 1000000);
    const obj = { ...data, id: randomId.toString(), modules: module };
    await handleSaveLesson(obj);
    toast.success("Desafio salvo!");
    setModalSaveLesson(false);
    setloadingGetLesson(false);
    await handleGetLesson();
  };

  return (
    <Modal
      isOpen={ModalSaveLesson}
      style={objStyle}
      onRequestClose={() => setModalSaveLesson(false)}
    >
      <main className="w-[30rem] min-h-[500px] bg-[#1A1818] rounded-lg  z-50 ">
        <div className="w-full   flex flex-col items-center justify-center pt-5">
          <h1 className="text-white  text-center ">Salvar um novo desafio</h1>
        </div>

        <form
          onSubmit={handleSubmit(sendData)}
          className="w-full flex flex-col items-center gap-10 mt-5 z-50"
        >
          <div className="w-10/12 flex flex-col gap-3">
            <Label htmlFor="Título" className="text-white">
              Título
            </Label>
            <Input
              {...register("title")}
              type="Título"
              id="Título"
              placeholder="Título"
              className=" border-0.5 border-bg-gray-ligth text-white "
            />
          </div>

          <div className="w-10/12 flex flex-col gap-3">
            <Label htmlFor="Título" className="text-white">
              Nível
            </Label>
            <select
              {...register("nivel")}
              className="border-0.5 border-bg-gray-ligth bg-transparent text-white h-8 rounded-md font-light"
            >
              <option value="basic" className="bg-bg-primary">
                basic
              </option>
              <option value="intermediate" className="bg-bg-primary">
                intermediate
              </option>
              <option value="advanced" className="bg-bg-primary">
                advanced
              </option>
            </select>
          </div>

          {showCreateModule && (
            <>
              {module.length > 0 && (
                <div className="w-10/12 flex flex-col gap-3">
                  {module?.map((item, index) => (
                    <>
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full text-white"
                      >
                        <AccordionItem value="item-1" className="w-full">
                          <AccordionTrigger>
                            #Módulo {index + 1}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="w-full flex flex-col gap-3">
                              {item.lessons.map((lessonItem, indexLesson) => (
                                <>
                                  <Accordion
                                    type="single"
                                    collapsible
                                    className="w-12/12 text-white ml-5"
                                  >
                                    <AccordionItem
                                      value="item-1"
                                      className="w-full"
                                    >
                                      <AccordionTrigger>
                                        #aula {indexLesson + 1}
                                      </AccordionTrigger>
                                      <AccordionContent>
                                        {lessonItem.phrases.length > 0 && (
                                          <h1 className=" text-center text-white text-sm">
                                            Frases adicionadas
                                          </h1>
                                        )}

                                        {lessonItem.phrases.map(
                                          (phraseItem, indexPhrase) => (
                                            <div className="w-full flex justify-between items-center border-[0.5px] px-2 py-1 rounded-md border-bg-gray-ligth my-2">
                                              <p className="text-white">
                                                {phraseItem}
                                              </p>

                                              <Trash
                                                onClick={() =>
                                                  DeleteFrase(
                                                    index,
                                                    indexLesson,
                                                    indexPhrase
                                                  )
                                                }
                                                className="cursor-pointer text-red-300"
                                              />
                                            </div>
                                          )
                                        )}

                                        <div className="w-full flex flex-col gap-3 my-10">
                                          <Label
                                            htmlFor="Descrição"
                                            className="text-white"
                                          >
                                            Frase
                                          </Label>

                                          <Input
                                            onChange={(e) =>
                                              setPhrases(e.target.value)
                                            }
                                            type="text"
                                            id="Frase"
                                            placeholder="Frase"
                                            className=" border-0.5 border-bg-gray-ligth text-white outline-none "
                                          />
                                          <button
                                            type="button"
                                            onClick={() =>
                                              AddFrase(
                                                phrases,
                                                index,
                                                indexLesson
                                              )
                                            }
                                            className="px-2 text-white border-[0.5px] h-10 bg-bg-blue-ocean border-bg-gray-ligth rounded-lg"
                                          >
                                            Adicionar Frase
                                          </button>
                                        </div>
                                      </AccordionContent>
                                    </AccordionItem>
                                  </Accordion>
                                  <button
                                    type="button"
                                    onClick={() => AddLesson(index)}
                                    className="ml-5 mt-2 px-2 py-1 text-white border-[0.5px] border-bg-gray-ligth rounded-lg"
                                  >
                                    + Adicionar Aula
                                  </button>
                                </>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </>
                  ))}
                </div>
              )}
            </>
          )}

          <div className="w-10/12 flex items-center justify-between">
            <Label htmlFor="Descrição" className="text-white">
              Criar novo módulo
            </Label>

            <button
              type="button"
              onClick={() => {
                setShowCreateModule(true);
                AddModule();
              }}
              className=" px-2 text-white border-[0.5px] border-bg-gray-ligth rounded-lg"
            >
              +
            </button>
          </div>

          <div className="w-full flex justify-center items-center mt-5 pb-10">
            <button
              disabled={loadingGetLesson}
              type="submit"
              className="w-6/12 h-10 bg-bg-blue-ocean rounded-lg text-white"
            >
              Enviar
            </button>
          </div>
        </form>
      </main>
    </Modal>
  );
}
