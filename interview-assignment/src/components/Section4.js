import React from "react";
import ImageView from "./ImageView";
import images from "../config/images";
import RegistrationForm from "./RegistrationForm";

const Section4 = () => {
  const handleSubmit = () => {};
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full justify-between items-center">
      <ImageView src={images.group2.default} alt="group2" className="w-full lg:w-[45%]" />
      <RegistrationForm />
    </div>
  );
};

export default Section4;
