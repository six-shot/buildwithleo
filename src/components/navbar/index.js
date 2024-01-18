import React from "react";
import Header from "@/components/Header"

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h5 className="uppercase text-white text-[24px] font-bold ">
          Workwithleo
        </h5>
        <nav>
          <ul className="flex gap-5 text-white">
            <li>About Us</li>
            <li>What we do</li>
            <li>Or work</li>
            <li>Contact us</li>
          </ul>
        </nav>
       
      </div>
    </div>
  );
}


