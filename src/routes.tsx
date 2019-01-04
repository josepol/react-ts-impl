import Home from "./screens/home";
import Repository from "./screens/repository";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROOT_URL, REPOSITORIES_URL } from "./constants";

const Routes: React.SFC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={ROOT_URL} component={Home} />
        <Route exact={true} path={REPOSITORIES_URL} component={Repository} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
