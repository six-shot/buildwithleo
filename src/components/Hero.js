import React from "react";
import Navbar from "./navbar";
import Header from "@/components/Header"

export default function Hero() {
  return (
    <div className="bg-[#0000DB] p-8  w-full h-[70vh] max-w-[1440px] mx-auto">
      {/* <div>
        <Navbar />
        <div className="flex justify-center h-[50vh] items-center">
            <div className="flex gap-20 items-center text-[32px] font-bold text-white">
                <h5>Ideas</h5>
                <h5>People</h5>
                <h5>Technology</h5>

            </div>
        </div>
      </div> */}
      <Header/>
    </div>
  );
}
