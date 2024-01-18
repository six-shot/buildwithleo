import AboutUs from '@/components/AboutUs'
import Hero from '@/components/Hero'
import WhyWithUs from '@/components/WhyWithUs';
import Image from 'next/image'


export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Hero />
      <AboutUs />
      <WhyWithUs/>
    </main>
  );
}
