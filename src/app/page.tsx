import Connect from "./components/connect/Connect";
import Courses from "./components/courses/Courses";
import HeroSection from "./components/hero/HeroSection";
import Rating from "./components/rating/Rating";
import WhatWeDo from "./components/whatwedo/WhatWeDo";

export default function Home() {
  return (
    <>
      <section className="bg-slate-50">
        <HeroSection />
      </section>
      <Rating />
      <WhatWeDo />
      <Courses />
      <Connect />
    </>
  );
}
