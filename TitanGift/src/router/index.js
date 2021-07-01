import HomePage from "pages/HomePage";
import ProductDetail from "pages/ProductDetail";
import React from "react";
import { Switch, Route } from "react-router-dom";

const RouterUrl = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/product/:productId" component={ProductDetail} />
    </Switch>
  );
};

export default RouterUrl;
