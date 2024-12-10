import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Apps from "./components/Apps";
import Plans from "./components/Plans";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

import testi1 from "./assets/testi1.png";
import testi2 from "./assets/testi2.png";
import testi3 from "./assets/testi3.png";

const testimonials = [
  {
    id: 1,
    name: "Catherine Bennet",
    position: "Founder, Creative",
    image: testi1,
    comment:
      "Initially doubtful, the outcome surpassed all my anticipations. The powerful analytics and reporting features offered crucial perspectives on our business metrics, enabling us to implement informed",
    show: true,
  },
  {
    id: 2,
    name: "Tony Danza",
    position: "Designer, Creative",
    image: testi2,
    comment:
      "Initially doubtful, the outcome surpassed all my anticipations. The powerful analytics and reporting features offered crucial perspectives on our business metrics, enabling us to implement informed",
    show: false,
  },
  {
    id: 3,
    name: "Mike Torello",
    position: "AIGC, Creative",
    image: testi3,
    comment:
      "Initially doubtful, the outcome surpassed all my anticipations. The powerful analytics and reporting features offered crucial perspectives on our business metrics, enabling us to implement informed",
    show: false,
  },
];

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Apps />
      <Plans />
      <About />
      <Testimonials testimonials={testimonials} />
    </>
  );
};

export default App;
