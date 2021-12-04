import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease",
      anchorPlacement: 'top-bottom',
    });
  });
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
