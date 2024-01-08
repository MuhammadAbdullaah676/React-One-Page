import React from "react";
import Header from "./Header";
import UserList from "./UserList";
import RowCards from "./RowCards";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Footer from "./Footer";

const InterviewAssignment = () => {
  return (
    <div className="flex flex-col gap-[100px] bg-[#EBF0FF] h-[100%] m-auto px-8 md:px-[160px] py-[60px] relative">
      <div className="hidden lg:block bg-custom-radial w-[634px] h-[634px] absolute left-[-20%] top-[18%]"></div>
      <div className="hidden lg:block bg-custom-radial w-[334px] h-[334px] absolute left-[45%] top-[10%]"></div>
      <div className="hidden lg:block bg-custom-radial w-[434px] h-[434px] absolute left-[52%] top-[45%] opacity-45"></div>
      <Header link1="About us" link2="Registeration" link3="Careers" />
      <UserList />
      <RowCards />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};

export default InterviewAssignment;
