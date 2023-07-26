"use client";
import { navigation } from "@/app/context/NavigationContext";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext } from "react";

const links = ["Home", "About", "Courses", "Contact"];

const Navbar = () => {
  const { path, setPath } = useContext(navigation);
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <nav className="flex p-5 justify-between items-center w-[90%] mx-auto">
        <Link href="/">
          <Image src="/assets/IMG_1924.PNG" alt="Logo" width={40} height={40} />
        </Link>

        <div className="lg:hidden" onClick={() => setToggleNav(!toggleNav)}>
          <p
            className={`w-8 h-[2px] bg-black mb-1 transition-all duration-300 ${
              toggleNav ? "opacity-0 mb-0" : ""
            }`}
          ></p>
          <p
            className={`w-8 h-[2px] bg-black mb-1 transition-all duration-300 ${
              toggleNav ? "-rotate-45 -mb-0" : ""
            }`}
          ></p>
          <p
            className={`w-8 h-[2px] bg-black transition-all duration-300 ${
              toggleNav ? "rotate-45" : ""
            }`}
          ></p>
        </div>

        <ul className="hidden lg:flex items-center justify-between">
          {links.map((link, idx) => {
            return (
              <Link
                href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                key={idx}
                className="relative mx-3"
              >
                <motion.p
                  onClick={() => setPath(idx)}
                  className="relative z-10 py-1 px-4 text-red-500 hover:cursor-pointer"
                >
                  {link}
                </motion.p>
                <AnimatePresence>
                  {path === idx && (
                    <motion.p
                      layoutId="border"
                      className="w-full h-full bg-red-100 absolute top-0 left-0 rounded-full px-5"
                    ></motion.p>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </ul>

        <a
          href="/assets/Bootcamp_Application_Letter_123036.pdf"
          download="Bootcamp_Application_Letter"
          className="hidden lg:flex border border-red-500 rounded-full px-5 py-2 text-red-500 hover:text-white hover:bg-red-500 transition-all duration-300"
        >
          Download Form
        </a>
      </nav>

      {toggleNav && (
        <div className="lg:hidden absolute inset-x-0 w-full h-full bg-slate-50 z-50">
          <div className="mt-10">
            {links.map((link, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => setPath(idx)}
                  className="text-center mb-5"
                >
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className={`mb-5 text-2xl text-center ${
                      path === idx
                        ? "text-red-500 bg-red-200  px-5 py-2 rounded-full"
                        : ""
                    }`}
                  >
                    {link}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <a
              href="/assets/Bootcamp_Application_Letter_123036.pdf"
              download="Bootcamp_Application_Letter"
              className="border border-red-500 rounded-full px-5 py-2 text-red-500 hover:text-white hover:bg-red-500 transition-all duration-300"
            >
              Download Form
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
