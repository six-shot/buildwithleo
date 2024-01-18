import React from "react";
import Navbar from "./navbar";
import Header from "@/components/Header"

export default function Hero() {
  return (
    <div className="bg-[#0000DB] px-[5%] py-[2%] w-full h-[70vh] max-w-[1440px] mx-auto">
      <div>
     <Header/>
        <div className="flex justify-center h-[50vh] items-center">
            <div className="flex sm:gap-20 justify-between items-center w-full px-[10%] sm:text-[32px] font-bold text-white">
                <h5>Ideas</h5>
                <h5>People</h5>
                <h5>Technology</h5>

            </div>
        </div>
      </div>
  
    </div>
  );
}
