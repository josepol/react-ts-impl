import reducers from './reducers';
import Api from './api';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const onError = {
  login: (status: number) => {
    if (status === 401 || status === 403) window.location.href = '/login';
  },
};

const composeEnhancers = composeWithDevTools({})(
  applyMiddleware(
    thunk
  ),
);

new Api('/');

export default createStore(reducers, composeEnhancers);
