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
        <p className="text-[30px] text-[#1C1C1C]/60 font-bold text-center">
          Join over 55,000 businesses that have achieved their goals.
        </p>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-8 px-6 py-8 bg-white rounded-full shadow-md shadow-[#F5C084]">
          <img src={apps1} alt="apps1" className="w-20" />
          <img src={apps2} alt="apps2" className="w-20" />
          <img src={apps3} alt="apps3" className="w-20" />
          <img src={apps4} alt="apps4" className="w-20" />
          <img src={apps5} alt="apps5" className="w-20" />
          <img src={apps6} alt="apps6" className="w-20" />
        </div>
      </div>
    </div>
  );
};

export default Apps;
