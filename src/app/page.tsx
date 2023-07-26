import { TbBulb } from "react-icons/tb";
import { PiBookOpenThin } from "react-icons/pi";
import { CiGps } from "react-icons/ci";

import Connect from "./components/connect/Connect";
import Courses from "./components/courses/Courses";
import HeroSection from "./components/hero/HeroSection";

export default function Home() {
  return (
    <>
      <section className="bg-slate-50">
        <HeroSection />
      </section>

      <section className="bg-slate-50 mb-20">
        <ul className="flex flex-col md:flex-row  w-[90%] lg:w-[900px] mx-auto justify-between items-center text-black font-bold p-10">
          <li className="text-red-400 text-center mb-5 md:mb-0">
            <p className="text-3xl md:text-4xl text-center">8K+</p>
            <small>students</small>
          </li>
          <li className="text-red-400 text-center mb-5 md:mb-0">
            <p className="text-3xl md:text-4xl text-center">20+</p>
            <small>Quality courses</small>
          </li>
          <li className="text-red-400 text-center mb-5 md:mb-0">
            <p className="text-3xl md:text-4xl text-center">10+</p>
            <small>Experience mentors</small>
          </li>
        </ul>
      </section>

      <section className="bg-white w-[90%] lg:w-[1000px] mx-auto p-5 mb-20">
        <h3 className="text-4xl text-center text-black font-bold">
          What we do
        </h3>
        <p className="text-center text-xs mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          <section className="border rounded-lg p-5">
            <div className="flex items-center mb-5">
              <i className="mr-3 text-xl">
                <PiBookOpenThin />
              </i>
              <p className="text-xl font-bold">Mission</p>
            </div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At velit
            dolorum nemo adipisci id voluptatem corrupti dignissimos. Debitis
            iure, dolorum minima officiis, laborum animi impedit sit, eaque nisi
            quaerat amet.
          </section>
          <section className="border rounded-lg p-5">
            <div className="flex items-center mb-5">
              <i className="mr-3 text-xl">
                <TbBulb />
              </i>
              <p className="text-xl font-bold">Vision</p>
            </div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At velit
            dolorum nemo adipisci id voluptatem corrupti dignissimos. Debitis
            iure, dolorum minima officiis, laborum animi impedit sit, eaque nisi
            quaerat amet.
          </section>
          <section className="border rounded-lg p-5">
            <div className="flex items-center mb-5">
              <i className="mr-3 text-xl">
                <CiGps />
              </i>
              <p className="text-xl font-bold">Target</p>
            </div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At velit
            dolorum nemo adipisci id voluptatem corrupti dignissimos. Debitis
            iure, dolorum minima officiis, laborum animi impedit sit, eaque nisi
            quaerat amet.
          </section>
        </div>
      </section>

      <Courses />
      <Connect />
    </>
  );
}
