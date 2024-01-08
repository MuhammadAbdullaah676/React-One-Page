import React from "react";
import ImageView from "./ImageView";
import images from "../config/images";
import Card from "./Card";
import users from "../data/users";
const UserList = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-[14px] w-full lg:max-h-[669px]">
      <div className="flex flex-col lg:w-1/2 gap-4 overflow-hidden">
        <span className="text-black text-5xl font-bold font-inter mb-16">
          Lorem ipsum
          <span className="text-[#46B0E6] relative mx-2">
            dolor
            <ImageView
              src={images.dolorBottom.default}
              alt="dolor bottom"
              className="absolute right-0 bottom-[-4px]"
            />
          </span>
          sit amet yo 👋
        </span>
        <div className="flex flex-col gap-4 max-h-[500px] pr-3 overflow-auto">
          {users.map((user) => (
            <Card
              image={user.image}
              title={user.title}
              subTitle={user.subTitle}
            />
          ))}
        </div>
      </div>
      <ImageView
        src={images.mobileGroup}
        alt="mobile group"
        className="lg:w-1/2"
      />
    </div>
  );
};

export default UserList;
