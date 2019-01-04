import { IUser, ISaveUser } from "interfaces";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import Store from './store';
import { displaySpinner, hideSpinner, handleHttpError, handleHttpSuccess } from './actions/layout';

export default class Api {

  public static default: Api;
  public instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL, timeout: 6000 });
    Api.default = this;
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        this.dispatchHideSpinner();
        this.dispatchHttpSuccess();
        return new Promise(resolve => {
          return resolve(response);
        });
      },
      (err: AxiosError) => {
        console.log(err);
        this.dispatchHttpError();
        return new Promise((resolve) => {
          return resolve(err);
        });
      }
    );
  }

  private dispatchHideSpinner() {
    Store.dispatch(hideSpinner());
  }

  private dispatchDisplaySpinner() {
    Store.dispatch(displaySpinner());
  }

  private dispatchHttpError() {
    Store.dispatch(handleHttpError());
  }

  private dispatchHttpSuccess() {
    Store.dispatch(handleHttpSuccess());
  }

  // --------------------------------------
  // Users
  // --------------------------------------

  public async userGet(name: string): Promise<IUser> {
    this.dispatchDisplaySpinner();
    const res = await this.instance.get(`/users/${name}`);
    if (res.status === 200) {
      return {
        ...res.data,
        status: res.status
      }
    } else {
      return {
        login: name,
        status: 404
      } as IUser;
    }
  }

  public async getUserRepos(name: string): Promise<Array<any>> {
    this.dispatchDisplaySpinner();
    const res = await this.instance.get(`/users/${name}/repos`);
    return res.data;
  }
}
