export type userObject = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  lastPayment: string;
  createdAt: string;
};

export interface IUser {
  loadingGetUser: boolean;
  setLoadingGetUser: (loading: boolean) => void;
  customers: userObject[];
  setCustomers: (customers: userObject[]) => void;
  handleGetUser: () => void;

  handleOrderBy: ({
    order,
  }: {
    order: "Mais recentes" | "Mais antigos";
  }) => void;
}
