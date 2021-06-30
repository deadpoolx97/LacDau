import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "layouts/Header";
import Footer from "layouts/Footer";
import RouterUrl from "router";
import ScrollTopArrow from "layouts/ScrollTopArrow";

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
