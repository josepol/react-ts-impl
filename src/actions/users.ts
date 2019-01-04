import { ISaveUser } from "interfaces";
import { Dispatch } from "redux";
import Api from "../api";

export enum USER {
  SET = "USER_SET",
  SAVE_USER_REQUESTED = "SAVE_USER_REQUESTED",
  SET_USER = "SET_USER",
  GET_REPOS = "GET_REPOS"
}

export interface UserAction {
  payload: any;
  type: USER;
}

export function getUser(name: string) {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const user = await Api.default.userGet(name);
      dispatch(saveUserRequested(mapSavedUser(user)));
    } catch (err) {
      console.log(err);
    }
  };
}

export function getUserRepos(name: string) {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const repos = await Api.default.getUserRepos(name);
      dispatch(getRepos(repos));
    } catch (err) {
      console.log(err);
    }
  }
}

export function saveUserRequested(savedUser: any) {
  return {
    type: USER.SAVE_USER_REQUESTED,
    payload: savedUser
  };
}

export function setUser(user: ISaveUser) {
  return {
    type: USER.SET_USER,
    payload: user
  }
}

export function getRepos(repos: Array<any>) {
  return {
    type: USER.GET_REPOS,
    payload: repos
  }
}

function mapSavedUser(res: any) {
  return {
    name: res.login,
    status: res.status,
    id: res.id,
    repos: [],
    type: res.type,
    bio: res.bio,
    createdAt: res.created_at,
    updatedAt: res.updated_at
  }
}
