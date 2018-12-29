import { IUser } from "interfaces";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import Store from './store';
import { displaySpinner, hideSpinner, handleHttpError, handleHttpSuccess } from './actions/layout';
import { saveUserRequested } from './actions/users';

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
        this.dispatchSaveUserRequested(this.mapSavedUser(response));
        return new Promise(resolve => {
          return resolve(response);
        });
      },
      (err: AxiosError) => {
        console.log(err);
        this.dispatchHttpError();
        return new Promise((resolve, reject) => {
          return reject(err);
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

  private dispatchSaveUserRequested(savedUser: any) {
    Store.dispatch(saveUserRequested(savedUser));
  }

  // --------------------------------------
  // Users
  // --------------------------------------

  public async userGet(name: string): Promise<IUser> {
    this.dispatchDisplaySpinner();
    const res = await this.instance.get(`/users/${name}`);
    if (res.status !== 200)
      throw new Error(`Could not get user: response code: ${res.status}`);
    return res.data;
  }

  private mapSavedUser(res: any) {
    return {
      name: res.data.login,
      status: res.status
    }
  }
}
