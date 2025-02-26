import { NextRouter } from "next/router";
import { userObject } from "../useUser/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface IUserDetails {
  userObj: userObject;
  setUserObj: (userObj: userObject) => void;

  handleChangeUserObj: (userObj: userObject, router: AppRouterInstance) => void;
}
