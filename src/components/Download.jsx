import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const Download = ({
  title,
  subtitle,
  image,
  lists,
  classNameHeader,
  downloads,
  button,
}) => {
  return (
    <section
      className={`container mx-auto lg:px-10 px-4 mt-28 ${classNameHeader}`}
    >
      <div
        className={`grid lg:grid-cols-2 grid-cols-1 gap-12 place-items-center py-20`}
      >
        <img src={image} alt="" />
        <div className="flex flex-col gap-8">
          <p className="text-5xl font-bold">{title}</p>
          <p className="text-2xl text-[#1C1C1C]/60">{subtitle}</p>
          <ul className="space-y-4">
            {lists.map((list) => (
              <li className="flex flex-row gap-4 items-center text-lg">
                <IoCheckmarkSharp color="blue" />
                {list}
              </li>
            ))}
          </ul>
          {button && (
            <button className="w-fit bg-[#F15757] text-white py-4 px-6 rounded-full text-lg">
              {button}
            </button>
          )}
          {downloads && (
            <div className="flex flex-row items-center gap-4">
              {downloads.map((download) => (
                <img src={download} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Download;
