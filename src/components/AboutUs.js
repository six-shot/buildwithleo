import React from "react";

export default function AboutUs() {
  return (
    <div className=" px-[5%] py-[5%] 2xl:px-0">
      <div className="grid sm:grid-cols-8 items-center gap-[10px]">
        <div className="sm:col-span-2">
          <h4 className="text-[#000021] text-[22px] font-bold">
            We are a creative powerhouse dedicated to shaping remarkable brands
          </h4>
        </div>
        <div className="sm:col-span-6">
          <p className="sm:p-[2%] text-[#000021] text-sm font-semibold">
            At our core, we believe that a strong brand is the heartbeat of any
            successful enterprise. It is the essence that capture
            attention,build trust, and forges lsting connetions with customers.
            With our deep understanding of branding and a passion for innovative
            solutions, we are here to help you unleash the full potential of
            your brand.
          </p>
        </div>
      </div>
    </div>
  );
}
