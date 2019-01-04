import { ISaveUser } from "interfaces";
import { UserAction, USER } from "../actions/users";

export interface IReduxStateUsers {
  users: Array<ISaveUser>;
  user?: ISaveUser;
}

const INITIAL_STATE: IReduxStateUsers = {
  users: [],
  user: undefined
};

export default function(
  state = INITIAL_STATE,
  action: UserAction
): IReduxStateUsers {
  switch (action.type) {
    case 'SAVE_USER_REQUESTED': // difficulties to import USER enum...
      state.users.push(action.payload)
      return {
        ...state,
        users: [
          ...state.users
        ]
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'GET_REPOS':
      return {
        ...state,
        user: {
          ...state.user!,
          repos: action.payload
        }
      }
    default:
      return state;
  }
}
