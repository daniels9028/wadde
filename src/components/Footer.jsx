import React from "react";

const Footer = () => {
  return (
    <section className="container mx-auto lg:px-10 px-4 my-20">
      <div className="flex flex-col justify-center items-center gap-8">
        <p className="font-bold text-4xl text-center">
          Accelerate Your Business Growth
        </p>
        <p className="text-[#1C1C1C]/60 text-lg text-center">
          FramerBite supplies the key components for assembling a top-tier
          website tailored to your SaaS needs.
        </p>
        <div className="border-2 border-[#BFBFC5] rounded-full flex flex-row justify-between items-center w-fit pl-6">
          <input
            type="text"
            placeholder="Enter your email"
            className="outline-none"
          />
          <button className="bg-[#F15757] py-2 px-4 text-white rounded-full m-[1px]">
            Email me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
