import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/:page?"
        render={(props) => <Landing {...props} />}
      />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}