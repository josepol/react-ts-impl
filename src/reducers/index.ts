import { combineReducers } from 'redux';
import users, { IReduxStateUsers } from './users';
import layout, { IReduxStateLayout} from './layout';

export interface IReduxState {
  users: IReduxStateUsers;
  layout: IReduxStateLayout;
}
export const allReducers = {};

export default combineReducers({users, layout});
