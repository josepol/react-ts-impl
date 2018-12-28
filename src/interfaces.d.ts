declare module "interfaces" {
  export interface IRepositorie {
    id: number;
    name: string;
    description: string;
    url: string;
  }

  export interface IUser {
    id: number;
    nick: string;
    name: string;
  }
}
