import React from "react";
import rowCards from "../data/rowCards";
import RowCard from "./RowCard";

const RowCards = () => {
  return (
    <div className="self-stretch shadow-2xl bg-stone-50 p-6 rounded-[10px] max-md:px-5">
      <div className="gap-5 flex flex-col lg:flex-row max-md:items-stretch max-md:gap-0">
        {rowCards.map(({ title, image, subTitle }) => (
          <RowCard title={title} image={image} subTitle={subTitle} />
        ))}
      </div>
    </div>
  );
};

export default RowCards;
