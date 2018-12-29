import { LayoutAction, LAYOUT } from "../actions/layout";

export interface IReduxStateLayout {
    isSpinnerLoading: boolean;
    httpError: boolean;
    httpSuccess: boolean;
}

const INITIAL_STATE: IReduxStateLayout = {
  isSpinnerLoading: false,
  httpError: false,
  httpSuccess: false
};

export default function(
  state = INITIAL_STATE,
  action: LayoutAction
): IReduxStateLayout {
  switch (action.type) {
    case LAYOUT.SHOW:
        return {
            ...state,
            isSpinnerLoading: true
        };
    case LAYOUT.HIDE:
        return {
            ...state,
            isSpinnerLoading: false
        };
    case LAYOUT.ERROR:
        return {
            httpError: true,
            httpSuccess: false,
            isSpinnerLoading: false,
        }
    case LAYOUT.SUCCESS:
        return {
            httpSuccess: true,
            httpError: false,
            isSpinnerLoading: false,
        }
    default:
      return state;
  }
}
