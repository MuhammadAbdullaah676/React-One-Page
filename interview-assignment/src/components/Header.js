import React from "react";
import images from "../config/images";
import "../styles/header.css";
const Header = ({ link1, link2, link3 }) => {
  return (
    <div className="flex w-full flex-col sm:flex-row gap-4 justify-between items-center">
      <img
        src={images.logo}
        alt="i2c logo"
        className="w-[55px] h-[34px] md:mr-[35px]"
      />
      <div className="flex flex-col sm:flex-row items-center gap-8 text-[#515151] font-inter text-base whitespace-nowrap items-center">
        <a className="cursor-pointer">{link1}</a>
        <a className="cursor-pointer">{link2}</a>
        <a className="cursor-pointer">{link3}</a>
        <button className="bg-[#46B0E6] px-8 py-4 contact-us">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
