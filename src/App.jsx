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

import { PiUsersThree } from "react-icons/pi";
import { PiMoneyLight } from "react-icons/pi";
import { PiProjectorScreenChart } from "react-icons/pi";
import { PiKanban } from "react-icons/pi";

const lists = [
  {
    id: 1,
    name: "Partner with us",
    point: "300+",
    icon: <PiUsersThree />,
  },
  {
    id: 2,
    name: "Cumulative trending",
    point: "$3.2b+",
    icon: <PiMoneyLight />,
  },
  {
    id: 3,
    name: "Successfull projects",
    point: "860k",
    icon: <PiProjectorScreenChart />,
  },
  {
    id: 4,
    name: "Low interest rate",
    point: "1.6%",
    icon: <PiKanban />,
  },
];

import download1 from "./assets/download1.png";
import download2 from "./assets/download2.png";
import download3 from "./assets/download3.png";
import download4 from "./assets/download4.png";
import Download from "./components/Download";
import Email from "./components/Email";
import Footer from "./components/Footer";

const footerLinks = [
  {
    id: 1,
    title: "Solutions",
    links: ["Freelancer", "Data Analytics", "Small Business"],
  },
  {
    id: 2,
    title: "Company",
    links: ["About", "Career", "Contact"],
  },
  {
    id: 3,
    title: "Resource",
    links: ["Customers", "Strategic Finance", "Ebooks & Guides"],
  },
  {
    id: 4,
    title: "Features",
    links: ["Freelancer", "Data Analytics", "Small Business"],
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
      <Testimonials testimonials={testimonials} lists={lists} />
      <Download
        title="Pave your path to triumph with XB innovation."
        subtitle="X equips you with the essential tools to craft a genuinely professional SaaS website."
        image={download1}
        lists={[
          "Effortless Browsing",
          "Secure Top 5% Industry Experts for Your Project",
          "Secure Transaction Platform",
        ]}
        button="More About Us"
      />
      <Download
        title="Download our mobile app"
        subtitle="X provides you with the essential toolkit to develop a genuinely polished website"
        image={download2}
        lists={[
          "Effortless Browsing",
          "Secure Top 5% Industry Experts for Your Project",
          "WeChat & live chat",
        ]}
        classNameHeader="bg-[#F6F6F9]"
        downloads={[download3, download4]}
      />
      <Email />
      <Footer footerLinks={footerLinks} />
    </>
  );
};

export default App;
