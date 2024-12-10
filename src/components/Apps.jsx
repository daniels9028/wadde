import React from "react";
import apps1 from "../assets/apps1.png";
import apps2 from "../assets/apps2.png";
import apps3 from "../assets/apps3.png";
import apps4 from "../assets/apps4.png";
import apps5 from "../assets/apps5.png";
import apps6 from "../assets/apps6.png";

const Apps = () => {
  return (
    <div className="container px-4 mx-auto mb-10 lg:px-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="lg:text-[30px] text-[25px] text-[#1C1C1C]/60 font-bold text-center">
          Join over 55,000 businesses that have achieved their goals.
        </p>
        <div className="flex border-2 lg:flex-row lg:w-fit w-full flex-col items-center justify-center lg:gap-8 gap-12 px-6 py-8 bg-white lg:rounded-full rounded-xl shadow-md shadow-[#F5C084] lg:mt-0 mt-8">
          <img src={apps1} alt="apps1" className="lg:w-20 w-32" />
          <img src={apps2} alt="apps2" className="lg:w-20 w-32" />
          <img src={apps3} alt="apps3" className="lg:w-20 w-32" />
          <img src={apps4} alt="apps4" className="lg:w-20 w-32" />
          <img src={apps5} alt="apps5" className="lg:w-20 w-32" />
          <img src={apps6} alt="apps6" className="lg:w-20 w-32" />
        </div>
      </div>
    </div>
  );
};

export default Apps;
