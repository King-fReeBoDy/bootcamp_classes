"use client";
import { navigation } from "@/app/context/NavigationContext";
import Link from "next/link";
import React, { useContext } from "react";

const Courses = () => {
  const { setPath } = useContext(navigation);
  return (
    <div className="bg-slate-50 mb-20">
      <section className="w-[90%] lg:w-[900px] mx-auto py-20">
        <h3 className="text-4xl text-center text-black font-bold">
          Browse course by category
        </h3>
        <p className="text-xs text-gray-500 text-center">
          Our top courses recommended for you
        </p>

        <div className="flex flex-col lg:flex-row justify-between my-10 gap-5">
          <div className=" h-[200px] bg-black w-full rounded-lg"></div>
          <div className=" h-[200px] bg-black w-full rounded-lg"></div>
          <div className=" h-[200px] bg-black w-full rounded-lg"></div>
        </div>
        <p
          onClick={() => setPath(2)}
          className="text-center lg:text-right text-sm text-red-500 font-bold"
        >
          <Link href="/courses" className="bg-red-100 px-5 py-2 rounded-full">
            More courses
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Courses;
