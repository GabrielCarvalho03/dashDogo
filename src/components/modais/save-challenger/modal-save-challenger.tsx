"use-client";

import Modal from "react-modal";
import { objStyle } from "./obj-style";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChallengerData, ChallengerSchema } from "@/hook/use-Challanger/schema";
import { useUseChallenger } from "@/hook/use-Challanger/use-challanger";
import { challengeObject } from "@/hook/use-Challanger/types";
import { toast } from "react-toastify";

export function ModalSaveChallenger() {
  const {
    handleSaveChallenger,
    ModalSaveChallenger,
    setModalSaveChallenger,
    setloadingGetChallanger,
    loadingGetChallanger,
    handleGetChallangers,
  } = useUseChallenger();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChallengerData>({
    mode: "all",
    resolver: zodResolver(ChallengerSchema),
  });

  const [xp, setXp] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove não números
    setXp(value);
  };

  const sendData = async (data: ChallengerData) => {
    setloadingGetChallanger(true);
    const randomId = Math.floor(Math.random() * 1000000);
    console.log(data);
    const obj = { ...data, id: randomId.toString() };

    await handleSaveChallenger(obj);
    toast.success("Desafio salvo!");
    setModalSaveChallenger(false);
    setloadingGetChallanger(false);
    await handleGetChallangers();
  };

  return (
    <Modal
      isOpen={ModalSaveChallenger}
      style={objStyle}
      onRequestClose={() => setModalSaveChallenger(false)}
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
            <Label htmlFor="Descrição" className="text-white">
              Descrição
            </Label>
            <Textarea
              {...register("description")}
              id="Descrição"
              placeholder="Título"
              className=" border-0.5 border-bg-gray-ligth text-white "
            />
          </div>

          <div className="w-10/12 flex flex-col gap-3">
            <Label htmlFor="Xp" className="text-white">
              XP ( pontos )
            </Label>
            <Input
              {...register("xp")}
              type="text"
              id="Xp"
              placeholder=" XP"
              className=" border-0.5 border-bg-gray-ligth text-white "
              value={xp}
              onChange={handleChange}
            />
          </div>

          <div className="w-10/12 flex flex-col gap-3 ">
            <Label htmlFor="type" className="text-white">
              Tipo de desafio
            </Label>

            <select
              {...register("type")}
              className="border-0.5 border-bg-gray-ligth bg-transparent text-white h-8 rounded-md font-light"
            >
              <option value="audio" className="bg-bg-primary">
                Áudio
              </option>
              <option value="video" className="bg-bg-primary">
                Vídeo
              </option>
              <option value="text" className="bg-bg-primary">
                Texto
              </option>
            </select>
          </div>

          <div className="w-full flex justify-center items-center mt-5 pb-10">
            <button
              disabled={loadingGetChallanger}
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
