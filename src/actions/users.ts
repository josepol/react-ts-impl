import { IUser } from "interfaces";
import { Dispatch } from "redux";
import Api from "../api";

export enum USER {
  SET = "USER_SET"
}

export interface SetUserAction {
  user: IUser;
  type: USER.SET;
}

export function getUser(name: string) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const user = await Api.default.userGet(name);
      console.log(user);
      // TODO replace with proper state management
    } catch (err) {
      console.log(err);
    }
  };
}

export type Action = SetUserAction;
