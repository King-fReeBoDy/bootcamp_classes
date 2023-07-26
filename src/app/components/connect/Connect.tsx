"use client";
import { navigation } from "@/app/context/NavigationContext";
import Link from "next/link";
import React, { useContext } from "react";

const Connect = () => {
  const { setPath } = useContext(navigation);
  return (
    <section className="w-[90%] lg:w-[900px] mx-auto bg-red-200 rounded-lg mb-20 p-5">
      <h3 className="text-4xl text-center text-black font-bold">
        Start learning today
      </h3>
      <p className="text-center text-xs text-gray-500">Connect with us</p>
      <p className="text-center my-5  text-white" onClick={() => setPath(3)}>
        <Link href="/contact" className="bg-red-500 px-5 py-2 rounded-full">
          Contact Us
        </Link>
      </p>
    </section>
  );
};

export default Connect;
