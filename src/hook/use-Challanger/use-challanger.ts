import { create } from "zustand";
import { lessonObject, IUserLesson } from "./types";
import axios from "axios";
import { toast } from "react-toastify";

export const useUseLesson = create<IUserLesson>((set) => ({
  lesson: [] as lessonObject[],
  setLesson: (lesson) => set({ lesson: lesson }),
  loadingGetLesson: false,
  setloadingGetLesson: (loading) => set({ loadingGetLesson: loading }),

  ModalSaveLesson: false,
  setModalSaveLesson: (value) => set({ ModalSaveLesson: value }),
  handleSaveLesson: async (challenger: lessonObject) => {
    console.log("data", challenger);

    const response = await axios.post("/api/lesson/add", challenger);
  },

  handleGetLesson: async () => {
    const { setLesson, setloadingGetLesson } = useUseLesson.getState();

    setloadingGetLesson(true);
    const response = await axios.get("/api/lesson/get");

    setloadingGetLesson(false);
    setLesson(response.data);
  },

  handleDeleteLesson: async (id: string) => {
    const { handleGetLesson } = useUseLesson.getState();

    const response = await axios.post(`/api/lesson/delete`, { id });
    console.log(response.data);

    await handleGetLesson();
    toast.success("Desafio deletado com sucesso!");
  },
}));
