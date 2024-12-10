import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Apps from "./components/Apps";
import Plans from "./components/Plans";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Apps />
      <Plans />
      <About />
    </>
  );
};

export default App;
