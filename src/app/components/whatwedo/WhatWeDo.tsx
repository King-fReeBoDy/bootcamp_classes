import { TbBulb } from "react-icons/tb";
import { PiBookOpenThin } from "react-icons/pi";
import { CiGps } from "react-icons/ci";

const WhatWeDo = () => {
  return (
    <section className="bg-white w-[90%] lg:w-[1000px] mx-auto p-5 mb-20">
      <h3 className="text-4xl text-center text-black font-bold">What we do</h3>
      <p className="text-center text-xs mb-5">
        Our Mission, Our Vision and Our Values
      </p>

      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <section className="border rounded-lg p-5 w-full">
          <div className="flex items-center mb-5">
            <i className="mr-3 text-xl">
              <PiBookOpenThin />
            </i>
            <p className="text-xl font-bold">Our Mission</p>
          </div>
          Our mission is to provide a world-class learning experience and
          competitive academic assistance for students in High Schools, Colleges
          and Universities
        </section>
        <section className="border rounded-lg p-5 w-full">
          <div className="flex items-center mb-5">
            <i className="mr-3 text-xl">
              <TbBulb />
            </i>
            <p className="text-xl font-bold">Our Vision</p>
          </div>
          Our Vision is to be one of the leading academic service providers in
          Ghana, assisting learns to develop the knowledge, critical thinking
          skills, and character neccessary to succed in a technologicall
          advanced world
        </section>
        <section className="border rounded-lg p-5 w-full">
          <div className="flex items-center mb-5">
            <i className="mr-3 text-xl">
              <CiGps />
            </i>
            <p className="text-xl font-bold">Our Values</p>
          </div>
          Teamwork, Creativity,Integrity
        </section>
      </div>
    </section>
  );
};

export default WhatWeDo;
