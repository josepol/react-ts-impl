import reducers from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({})(
  applyMiddleware(
    thunk
  ),
);

export default createStore(reducers, composeEnhancers);
