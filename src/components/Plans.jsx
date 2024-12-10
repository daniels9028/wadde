import React from "react";
import plans1 from "../assets/plans1.png";
import plans2 from "../assets/plans2.png";
import plans3 from "../assets/plans3.png";
import plans4 from "../assets/plans4.png";
import plans5 from "../assets/plans5.png";
import plans6 from "../assets/plans6.png";
import plans7 from "../assets/plans7.png";

const Plans = () => {
  return (
    <section className="container px-4 mx-auto my-20 lg:px-10">
      <div className="flex flex-col">
        <h4 className="text-[40px] font-bold">
          We're here to assist you in creating, managing
        </h4>
        <div className="flex lg:flex-row flex-col items-center justify-center w-full gap-8 mt-10">
          <div className="bg-[#E1E1E9] overflow-hidden rounded-lg flex flex-col lg:w-1/3 w-full pt-4 px-6 h-[265px] justify-between">
            <div className="flex flex-row items-center justify-between pb-4 border-b border-[#1C1C1C]/20 border-dashed">
              <p className="text-[20px] font-bold">Invesment Fund</p>
              <img src={plans1} alt="plans1" className="w-8 h-8" />
            </div>
            <p className="text-sm text-[#1C1C1C]/60 my-4">
              FramerBite delivers the essential components to build a polished
              and professional website for your SaaS business.
            </p>
            <div className="flex items-center justify-center">
              <img src={plans3} alt="plans3" className="object-cover w-56 " />
            </div>
          </div>
          <div className="bg-[#E1E1E9] overflow-hidden rounded-lg flex flex-col lg:w-2/3 w-full pt-4 px-6 h-[265px] justify-between">
            <div className="flex flex-row items-center justify-between pb-4 border-b border-[#1C1C1C]/20 border-dashed">
              <p className="text-[20px] font-bold">Retirement Plan</p>
              <img src={plans2} alt="plans2" className="w-8 h-8" />
            </div>
            <p className="text-sm text-[#1C1C1C]/60 my-4">
              FramerBite offers the essential building blocks for developing a
              sophisticated website for your SaaS, a well-established fact
              recognized by numerous desktop publishing packages and web page
              editors.
            </p>
            <div className="flex items-center justify-center gap-6">
              <img
                src={plans4}
                alt="plans4"
                className="object-cover rounded-lg w-52 h-28"
              />
              <img
                src={plans5}
                alt="plans5"
                className="object-cover w-28 h-28"
              />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#F6F6F9] to-[#EEEEF5] overflow-hidden rounded-lg flex flex-col w-full py-8 px-6 mt-8">
          <img src={plans6} alt="plans6" className="w-8 h-8" />
          <div className="flex lg:flex-row flex-col items-center justify-center w-full gap-8 mt-10">
            <div className="lg:w-1/2 w-full">
              <p className="font-bold text-[25px]">
                Global Visa and Mastercard with Multi-Currency Support
              </p>
              <p className="text-sm text-[#1C1C1C]/60 my-4">
                FramerBite offers the essential building blocks for developing a
                sophisticated website for your SaaS, a well-established fact
                recognized by numerous desktop publishing packages and web page
                editors.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <img src={plans7} alt="plans7" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
