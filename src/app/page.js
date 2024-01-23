"use client";
import AboutUs from '@/components/AboutUs'
import Hero from '@/components/Hero'
import WhyWithUs from '@/components/WhyWithUs';


// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
import SlidingImages from "../components/SlidingImages";

export default function Home() {
  //  useEffect(() => {
  //    const lenis = new Lenis();

  //    function raf(time) {
  //      lenis.raf(time);
  //      requestAnimationFrame(raf);
  //    }

  //    requestAnimationFrame(raf);
  //  }, []);
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <WhyWithUs/>

      <SlidingImages />
    </main>
  );
}
