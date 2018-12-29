import { ILayout } from "interfaces";

export enum LAYOUT {
  SHOW = "SHOW",
  HIDE = "HIDE",
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export interface LayoutAction {
  layout: ILayout;
  type: LAYOUT;
}

export function displaySpinner() {
    return {
        type: LAYOUT.SHOW
    };
}

export function hideSpinner() {
    return {
        type: LAYOUT.HIDE
    };
}

export function handleHttpError() {
    return {
        type: LAYOUT.ERROR
    }
}

export function handleHttpSuccess() {
    return {
        type: LAYOUT.SUCCESS
    }
}
