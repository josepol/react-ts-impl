import { IRepositorie, IUser } from "interfaces";
import { Action } from "../actions/users";

export interface IReduxStateUsers {
  users: Array<IUser>;
}

const INITIAL_STATE: IReduxStateUsers = {
  users: []
};

export default function(
  state = INITIAL_STATE,
  action: Action
): IReduxStateUsers {
  switch (action.type) {
    default:
      return state;
  }
}
