import Footer from "layouts/Footer";
import Header from "layouts/Header";
import ScrollTopArrow from "layouts/ScrollTopArrow";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterUrl from "router";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <RouterUrl />
        <ScrollTopArrow />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
