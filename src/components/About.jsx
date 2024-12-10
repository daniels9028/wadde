import React from "react";
import about from "../assets/about.png";

const About = () => {
  return (
    <section className="container mx-auto lg:px-10 px-4 mt-20">
      <div className="flex lg:flex-row flex-col justify-center w-full gap-8">
        <div className="flex flex-col justify-start lg:w-1/2 w-full">
          <p className="text-[#F15757] text-base font-medium leading-[26px]">
            ABOUT US
          </p>
          <p className="font-bold lg:text-[50px] text-[30px] mt-4">
            Embark On Your Digital
          </p>
          <p className="text-[#1C1C1C]/60 mt-8">
            FramerBite offers the key components to build a professional-grade
            website for your SaaS, a fact well-known to readers familiar with
            the industry.
          </p>
          <button className="text-[#F15757] border bg-white border-[#F15757] rounded-full w-44 py-3 px-4 mt-8">
            More About Us
          </button>
        </div>
        <div className="lg:w-1/2 w-full">
          <img src={about} alt="about us" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default About;
