import React from "react";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import banner5 from "../assets/banner5.png";

const Banner = () => {
  return (
    <section className="my-24">
      <div className="container flex flex-col-reverse items-center justify-between gap-4 pl-4 mx-auto lg:flex-row lg:pl-10">
        <div className="flex flex-wrap items-center w-full pr-4 space-x-2 lg:w-1/2 lg:pr-0">
          <p className="font-bold text-[50px]">Intelligent</p>
          <img
            src={banner1}
            alt="banner1"
            className="object-contain w-28 h-28"
          />
          <p className="font-bold text-[50px]">Tools</p>
          <p className="font-bold text-[50px]">for</p>
          <img
            src={banner2}
            alt="banner2"
            className="object-contain w-28 h-28"
          />
          <p className="font-bold text-[50px]">Savvy</p>
          <p className="font-bold text-[50px]">Businesses</p>
          <p className="text-2xl mt-6 text-[#1C1C1C]/60 font-medium">
            FramerBite provides the essential elements for crafting a top-tier
            website for your SaaS platform.
          </p>
          <div className="flex flex-col items-center justify-center w-full gap-8 mt-10 lg:mt-20 lg:flex-row lg:justify-between">
            <button className="bg-[#F15757] py-4 px-6 rounded-full text-white hover:bg-white hover:text-black border-2 hover:border-[#F15757] transition-all duration-200">
              Get Started Now
            </button>
            <div className="flex flex-row items-center">
              <img
                src={banner4}
                alt="banner4"
                className="z-[2] object-cover w-16 h-16"
              />
              <img
                src={banner5}
                alt="banner5"
                className="-ml-3 z-[3] object-cover w-16 h-16"
              />
              <span className="w-16 h-16 rounded-full bg-white border border-gray-400 text-5xl -ml-3 z-[4] flex justify-center items-center">
                +
              </span>
            </div>
            <div className="flex flex-col justify-center ml-8 text-center">
              <p className="font-bold text-[36px]">3.2m</p>
              <p className="text-[18px] text-[#1C1C1C]/60">Success clients</p>
            </div>
          </div>
        </div>
        <img
          src={banner3}
          alt="banner3"
          className="lg:w-1/2 h-[400px] object-cover w-full"
        />
      </div>
    </section>
  );
};

export default Banner;
