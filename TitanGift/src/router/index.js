import HomePage from "pages/HomePage";
import React from "react";
import { Switch, Route } from "react-router-dom";

const RouterUrl = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

export default RouterUrl;
