import React from "react";
import Navbar from "./navbar";
import Header from "@/components/Header";
import Idea from "./Idea";
import People from "./People";
import Technology from "./Technology";

export default function Hero() {
  return (
    <div className="h-[80vh]">
      <div className="bg-[#0000DB] px-[5%] py-[2%] w-full h-[70vh] ">
        <div>
          <Header />
          <div className="flex justify-center h-[50vh] items-center">
            <div className="flex sm:gap-20 justify-between sm:justify-center items-center w-full px-[10%] sm:px-0  uppercase font-bold text-[32px] text-white">
              <Idea />
              <People />
              <Technology />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
