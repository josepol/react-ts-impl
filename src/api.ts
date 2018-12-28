import { IUser } from "interfaces";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export default class Api {
  public static default: Api;
  public instance: AxiosInstance;
  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL, timeout: 6000 });
    Api.default = this;
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return new Promise(resolve => {
          return resolve(response);
        });
      },
      (err: AxiosError) => {
        return new Promise((resolve, reject) => {
          return reject(err);
        });
      }
    );
  }

  // --------------------------------------
  // Users
  // --------------------------------------

  public async userGet(name: string): Promise<IUser> {
    const res = await this.instance.get(`/users/${name}`);
    if (res.status !== 200)
      throw new Error(`Could not get user: response code: ${res.status}`);
    return {
      id: res.data.id,
      nick: res.data.login,
      name: res.data.name
    };
  }
}
