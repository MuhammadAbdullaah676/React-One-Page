import React from "react";
import ImageView from "./ImageView";

const RowCard = ({ image, title, subTitle }) => {
  return (
    <div className="flex gap-4 p-6 items-start w-full">
      <ImageView
        src={image}
        alt={title}
        className="rounded-[32px] overflow-hidden w-16 h-16"
      />
      <div className="items-stretch self-stretch flex grow basis-[0%] flex-col gap-2 max-md:max-w-full">
        <div className="text-[#F89D21] text-base font-medium">{title}</div>
        <div className="text-neutral-600 text-base font-medium">{subTitle}</div>
      </div>
    </div>
  );
};

export default RowCard;
