import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={withRouter(Home)} />
      </Switch>
    </div>
  );
};

export default Routes;
