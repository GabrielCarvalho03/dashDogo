export type challengeObject = {
  id: string;
  title: string;
  description: string;
  type: "audio" | "video" | "text";
};

export interface IUserChallanger {
  loadingGetChallanger: boolean;
  setloadingGetChallanger: (loading: boolean) => void;

  ModalSaveChallenger: boolean;
  setModalSaveChallenger: (value: boolean) => void;

  challenger: challengeObject[];
  setChallanger: (challanger: challengeObject[]) => void;
  handleSaveChallenger: (challenger: challengeObject) => Promise<void>;

  handleGetChallangers: () => Promise<void>;
  handleDeleteChallenger: (id: string) => Promise<void>;
}
