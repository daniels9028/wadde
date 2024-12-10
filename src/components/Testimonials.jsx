import React from "react";
import backtick1 from "../assets/backtick1.png";
import backtick2 from "../assets/backtick2.png";

const Testimonials = ({ testimonials, lists }) => {
  return (
    <section className="container mx-auto lg:px-10 px-4 mt-20">
      <div className="flex lg:flex-row flex-col justify-center items-start lg:gap-8 gap-20 w-full">
        <div className="lg:w-1/3 w-full flex flex-col justify-center gap-4">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className={`flex flex-row items-center gap-4 cursor-pointer px-4 py-2 ${
                testi.show && "rounded-full overflow-hidden  bg-[#1C1C1C]/20"
              }`}
            >
              <img src={testi.image} alt={testi.id} />
              <div>
                <p className="font-medium text-lg">{testi.name}</p>
                <p className="text-[#1C1C1C]/60">{testi.position}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-2/3 w-full">
          {testimonials.map((testi) => (
            <div className="relative">
              {testi.show && (
                <>
                  <img
                    src={backtick1}
                    alt="backtick1"
                    className="-top-8 left-0 absolute"
                  />
                  <p className="lg:text-[36px] text-[20px] font-bold">
                    {testi.comment}
                  </p>
                  <img
                    src={backtick2}
                    alt="backtick2"
                    className="absolute right-0 -bottom-8"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-center items-center mt-10 gap-12 w-full">
        {lists.map((list) => (
          <div key={list.id} className="text-center">
            <p className="text-[#2B71FA] font-bold text-[50px]">{list.point}</p>
            <div className="flex flex-row items-center justify-center gap-2">
              {list.icon}
              <p className="text-[16px] text-[#1C1C1C]/60">{list.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
