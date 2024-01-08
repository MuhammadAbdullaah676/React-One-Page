import React from "react";
import images from "../config/images";

const Section3 = () => {
  return (
    <div className="items-center self-stretch flex flex-col justify-center px-16 max-md:px-5">
      <div className="flex w-full flex-col max-md:max-w-full">
        <div className="text-black text-4xl font-extrabold self-center whitespace-nowrap">
          Trusted by
        </div>
        <img
          loading="lazy"
          src={images.trusted.default}
          className="aspect-[23.22] object-contain object-center w-[209px] stroke-[4px] stroke-yellow-500 overflow-hidden self-center max-w-full"
        />
        <div className="text-neutral-600 text-center text-base font-medium self-center max-w-[441px] mt-4 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
          tristique senectus dui pharetra sit.
        </div>
        <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            src={images.chevronLeft.default}
            className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <div className="justify-between items-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
            <img
              loading="lazy"
              src={images.microsoft.default}
              className="aspect-[2] object-contain object-center w-full justify-center items-center overflow-hidden grow basis-[0%]"
            />
            <img
              loading="lazy"
              src={images.twiter.default}
              className="aspect-[1.22] object-contain object-center w-[88px] fill-amber-500 overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
            <img
              loading="lazy"
              src={images.cocacolla.default}
              className="aspect-[3.07] object-contain object-center w-[301px] overflow-hidden self-center my-auto"
            />
          </div>
          <img
            loading="lazy"
            src={images.chevronRight.default}
            className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
