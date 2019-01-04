import * as React from "react";
import { Provider } from "react-redux";
import Routes from "./routes";
import store from "./store";
import Api from './api';
import './App.css';
import Spinner from "./components/spinner/spinner";
import { ROOT_URL } from "./constants";

new Api(ROOT_URL);

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <Spinner></Spinner>
    </Provider>
  );
}
