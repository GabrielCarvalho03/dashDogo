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

      const filter = [...data].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setCustomers(filter);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoadingGetUser(false);
    }
  },

  handleOrderBy: ({ order }) => {
    const { customers, setCustomers } = useUser.getState();

    if (order === "Mais antigos") {
      const sortedAsc = [...customers].sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

      setCustomers(sortedAsc);
      return;
    }

    if (order === "Mais recentes") {
      const sortedDesc = [...customers].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setCustomers(sortedDesc);
      return;
    }
  },
}));
