import { create } from "zustand";
import { challengeObject, IUserChallanger } from "./types";
import axios from "axios";
import { toast } from "react-toastify";

export const useUseChallenger = create<IUserChallanger>((set) => ({
  challenger: [] as challengeObject[],
  setChallanger: (challanger) => set({ challenger: challanger }),
  loadingGetChallanger: false,
  setloadingGetChallanger: (loading) => set({ loadingGetChallanger: loading }),

  ModalSaveChallenger: false,
  setModalSaveChallenger: (value) => set({ ModalSaveChallenger: value }),
  handleSaveChallenger: async (challenger: challengeObject) => {
    console.log("data", challenger);

    const response = await axios.post("/api/challenger/add", challenger);
  },

  handleGetChallangers: async () => {
    const { setChallanger, setloadingGetChallanger } =
      useUseChallenger.getState();

    setloadingGetChallanger(true);
    const response = await axios.get("/api/challenger/get");

    setloadingGetChallanger(false);
    setChallanger(response.data);
  },

  handleDeleteChallenger: async (id: string) => {
    const { handleGetChallangers } = useUseChallenger.getState();

    const response = await axios.delete(`/api/challenger/${id}`);
    console.log(response.data);

    await handleGetChallangers();
    toast.success("Desafio deletado com sucesso!");
  },
}));
