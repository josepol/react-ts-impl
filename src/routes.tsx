import Home from "./screens/home";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes: React.SFC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={"/"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
