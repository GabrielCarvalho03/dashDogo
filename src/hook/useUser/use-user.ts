import { create } from "zustand";
import { IUser, userObject } from "./types";

export const useUser = create<IUser>((set) => ({
  loadingGetUser: false,
  setLoadingGetUser: (loading: boolean) => set({ loadingGetUser: loading }),
  customers: [],
  setCustomers: (customers: userObject[]) => set({ customers }),

  handleGetUser: async () => {
    const { setCustomers, setLoadingGetUser } = useUser.getState();
    setLoadingGetUser(true);
    try {
      const response = await fetch("/api/users/getusers");
      const data = await response.json();
      setCustomers(data);
      console.log("deu certo", data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoadingGetUser(false);
    }
  },
}));
