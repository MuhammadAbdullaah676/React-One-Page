import React from "react";
import images from "../config/images";
import ImageView from "./ImageView";
import Header from "./Header";
const Footer = () => {
  return (
    <footer className="flex flex-col py-2 gap-8">
      <ImageView src={images.separator.default} className="w-full" />
      <Header link1="FAQs" link2="Privacy Policy" link3="Other" />
      <h6 className="self-center md:self-start text-neutral-600 text-xs font-inter leading-5">
        Copyright © 2023 i2c inc. All rights reserved.
      </h6>
    </footer>
  );
};

export default Footer;
