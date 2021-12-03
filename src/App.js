import React from "react";

import {
  Footer,
  Blog,
  Products,
  Features,
  WhatTractian,
  Header,
} from "./containers";
import { CTA, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatTractian />
      <Features />
      <Products />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
