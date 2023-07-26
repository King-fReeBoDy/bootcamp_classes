import React from "react";
import Image from "next/image";
import { FcGraduationCap } from "react-icons/fc";

const HeroSection = () => {
  return (
    <div className="p-7 flex flex-1 w-[90%] lg:w-[900px] mx-auto pt-14">
      <section className="w-full">
        <div className="mb-3 text-red-500 flex">
          <span className="mr-3">
            <FcGraduationCap />
          </span>
          <small>Best Learning platform</small>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold my-5 text-black">
          Getting Best <br />
          Quality education <br />
          Is Now More Easier
        </h1>

        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisi</p>

        <a
          href="/assets/Bootcamp_Application_Letter_123036.pdf"
          download="Bootcamp_Application_Letter"
          className="bg-red-500 px-5 py-3 rounded-full mb-5 text-white"
        >
          Enroll Now
        </a>
      </section>

      <div className="hidden md:flex w-[50%]">
        <Image
          src="/assets/3d-business-young-women-standing-and-smiling.png"
          alt="image"
          className="w-full"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default HeroSection;
