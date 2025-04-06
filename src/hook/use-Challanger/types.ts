export type moduleProps = {
  lessons: {
    id: string;
    phrases: string[];
  }[];
};

export type lessonObject = {
  id: string;
  title: string;
  nivel: "basic" | "intermediate" | "advanced";
  modules: moduleProps[];
};

export interface IUserLesson {
  loadingGetLesson: boolean;
  setloadingGetLesson: (loading: boolean) => void;

  ModalSaveLesson: boolean;
  setModalSaveLesson: (value: boolean) => void;

  lesson: lessonObject[];
  setLesson: (Lesson: lessonObject[]) => void;
  handleSaveLesson: (Lesson: lessonObject) => Promise<void>;

  handleGetLesson: () => Promise<void>;
  handleDeleteLesson: (id: string) => Promise<void>;
}
