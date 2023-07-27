import React from "react";

const Rating = () => {
  return (
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
  );
};

export default Rating;
