import { IUser, ISaveUser } from "interfaces";
import { Dispatch } from "redux";
import Api from "../api";

export enum USER {
  SET = "USER_SET",
  SAVE_USER_REQUESTED = "SAVE_USER_REQUESTED"
}

export interface UserAction {
  payload: ISaveUser;
  type: USER;
}

export function getUser(name: string) {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const user = await Api.default.userGet(name);
    } catch (err) {
      console.log(err);
    }
  };
}

export function saveUserRequested(savedUser: ISaveUser) {
  return {
    type: USER.SAVE_USER_REQUESTED,
    payload: savedUser
  };
}
