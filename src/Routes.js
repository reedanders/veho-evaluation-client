import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";

export default function Routes() {
  return (
    <Switch>
      <Route path="/:page?" render={(props) => <Landing {...props} />} />
    </Switch>
  );
}
