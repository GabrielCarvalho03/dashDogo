import { create } from "zustand";
import { IUserDetails } from "./types";
import { userObject } from "../useUser/types";
import UserDetails from "@/app/dashboard/user-details/page";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const UseUserDetails = create<IUserDetails>((set) => ({
  userObj: {} as userObject,
  setUserObj: (userObj: userObject) => set({ userObj }),

  handleChangeUserObj: (userObj: userObject, router: AppRouterInstance) => {
    const { setUserObj } = UseUserDetails.getState();

    console.log("userObjfucntion", userObj);

    setUserObj(userObj);
    router.push("/dashboard/user-details");
  },
}));
