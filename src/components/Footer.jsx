import React from "react";
import logo from "../assets/logo.png";

const Footer = ({ footerLinks }) => {
  return (
    <section className="mt-20 bg-[#F6F6F9] w-full">
      <footer className="container mx-auto lg:px-10 px-4 py-20">
        <div className="flex lg:flex-row justify-center gap-8 flex-col w-full">
          <div className="lg:w-1/3 flex flex-col">
            <div className="flex flex-row items-center gap-4">
              <img src={logo} alt="logo footer" />
              <p className="font-bold text-xl">Logoipsum</p>
            </div>
            <p className="text-[#1C1C1C]/60 mt-6 font-medium">
              XB gives you the blocks needed to create a truly professional
              website for your SaaS.
            </p>
            <p className="text-[#1C1C1C]/60 mt-12 font-medium">
              Copyright © 2023 All Rights Reserved by XB
            </p>
          </div>
          <div className="lg:w-2/3 flex lg:flex-row flex-col items-center lg:text-left text-center justify-center gap-16">
            {footerLinks.map((link) => (
              <div className="flex flex-col gap-6 cursor-pointer">
                <p className="text-[#1C1C1C]/80 font-medium" key={link.id}>
                  {link.title}
                </p>
                <ul className="space-y-3">
                  {link.links.map((item, index) => (
                    <li key={index} className="text-[#1C1C1C]/60 font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
