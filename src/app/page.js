"use client";
import AboutUs from '@/components/AboutUs'
import Hero from '@/components/Hero'
import WhyWithUs from '@/components/WhyWithUs';
import ZoomParallax from "../components/ZoomParallax/index";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
   useEffect(() => {
     const lenis = new Lenis();

     function raf(time) {
       lenis.raf(time);
       requestAnimationFrame(raf);
     }

     requestAnimationFrame(raf);
   }, []);
  return (
    <main className="max-w-[1440px] mx-auto">
      <Hero />
      <AboutUs />
      <WhyWithUs/>
      <ZoomParallax/>
    </main>
  );
}
