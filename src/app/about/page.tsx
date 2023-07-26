"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { navigation } from "../context/NavigationContext";

const About = () => {
  const { setPath } = useContext(navigation);
  return (
    <div className=" bg-slate-50">
      <section className="w-[90%] lg:w-[900px] mx-auto pt-10">
        <h2 className="relative inline-block z-10 text-4xl md:text-5xl font-bold my-5 text-black">
          Overview
          <p className="absolute left-0 bottom-0 w-full h-4 bg-red-500/75"></p>
        </h2>
        <p>
          This Pre-SHS Vacation School is designed for JHS Graduates who are
          STEM enthusiasts and would want to offer General Science option in SHS
          • Selected students will be equipped with adequate skills and
          knowledge for success in their SHS experience • The Course Curriculum
          will focus on General Science elective subjects: Biology, Chemistry,
          Physics and Elective Mathematics • Other co-curricular activities will
          be included: Coding, Basic Science Research and Presentation, Health &
          Nutrition, University and Career Exploration, Seminar and Advisory
        </p>
      </section>

      <div className="grid md:grid-cols-2 w-[90%] lg:w-[900px] mx-auto my-10">
        <section className="">
          <h2 className="text-2xl md:text-xl font-bold mt-5 mb-2 text-red-400">
            Mathematics
          </h2>

          <ul>
            <li>Fuctions</li>
            <li>Linear Functions</li>
            <li>Quadratic Functions</li>
            <li> Logarithmic Functions</li>
            <li>Trigonometric Functions</li>
            <li>Statistics and Probability</li>
            <li>Calculus</li>
            <li>Geometry</li>
          </ul>
        </section>

        <section className="">
          <h2 className="text-2xl md:text-xl font-bold mt-5 mb-2 text-red-400">
            Chemistry
          </h2>

          <ul>
            <li>General overview of Chemistry</li>
            <li>Atomic Structure</li>
            <li>Overview of Organic Chemistry</li>
          </ul>
        </section>

        <section className="">
          <h2 className="text-2xl md:text-xl font-bold mt-5 mb-2 text-red-400">
            Physics
          </h2>

          <ul>
            <li>Overview of Physics</li>
            <li>Mechanics</li>
            <li>Vectors</li>
            <li>Motion</li>
            <li>Energy</li>
            <li>Properties of Matter</li>
            <li>Heat</li>
          </ul>
        </section>

        <section className="">
          <h2 className="text-2xl md:text-xl font-bold mt-5 mb-2 text-red-400">
            Biology
          </h2>

          <ul>
            <li>General Overview of Biology</li>
            <li>Cell Biology</li>
            <li>Taxonomy/Classification</li>
            <li>Interactions in the Environment</li>
            <li>Human Systems</li>
            <li>Animal Systems</li>
          </ul>
        </section>

        <section className="">
          <h2 className="text-2xl md:text-xl font-bold mt-5 mb-2 text-red-400">
            Coding
          </h2>

          <ul>
            <li>Introduction to basic programming concepts</li>
            <li>Web Design</li>
            <li>Python Programming</li>
          </ul>
        </section>
      </div>
      <p onClick={() => setPath(2)} className="text-center my-10">
        <Link
          href="/courses"
          className="bg-red-100 text-red-500 px-5 py-2 rounded-full"
        >
          View all courses
        </Link>
      </p>
    </div>
  );
};

export default About;
