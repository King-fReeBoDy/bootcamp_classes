import React from "react";
import Image from "next/image";

const links = ["Home", "About", "Courses", "Contact"];

const Footer = () => {
  return (
    <footer className="bg-slate-300">
      <div className="md:flex justify-between w-[90%] mx-auto p-7">
        <section className="w-full mb-5 md:mb-0">
          <div>
            <Image
              src="/assets/IMG_1924.PNG"
              alt="Logo"
              width={40}
              height={40}
            />

            <p>
              pre-SHS stem vacation school <br />
              prism brook learning centre (PBLC)
            </p>
          </div>
        </section>

        <section className="w-full mb-5 md:mb-0 md:text-center">
          <h4 className="font-bold text-lg">Courses</h4>
          <ul>
            <li>Maths</li>
            <li>Science</li>
            <li>Coding</li>
          </ul>
        </section>
        <section className="w-full mb-5 md:mb-0 md:text-center">
          <h4 className="font-bold text-lg">Contact info</h4>
          <ul>
            <li>02333252656</li>
            <li>024487566</li>
          </ul>
        </section>
        <section className="w-full mb-5 md:mb-0 md:text-center">
          <h4 className="font-bold text-lg">Socials</h4>
          <ul>
            <li>Faceebook</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </section>
      </div>
      <div className="text-center bg-gray-900 p-4">
        &copy; {new Date().getFullYear()} Developed by DESi_dev
      </div>
    </footer>
  );
};

export default Footer;
