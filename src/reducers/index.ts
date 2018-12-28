import { combineReducers } from 'redux';
import users, { IReduxStateUsers } from './users';

export interface IReduxState {
  users: IReduxStateUsers;
}
export const allReducers = {};

export default combineReducers({users});
