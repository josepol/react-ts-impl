import { ISaveUser } from "interfaces";
import { UserAction, USER } from "../actions/users";

export interface IReduxStateUsers {
  users: Array<ISaveUser>;
}

const INITIAL_STATE: IReduxStateUsers = {
  users: []
};

export default function(
  state = INITIAL_STATE,
  action: UserAction
): IReduxStateUsers {
  switch (action.type) {
    case 'SAVE_USER_REQUESTED':
      state.users.push(action.payload)
      return {
        users: [
          ...state.users
        ]
      }
    default:
      return state;
  }
}
