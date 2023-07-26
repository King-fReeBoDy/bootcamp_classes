import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className=" bg-slate-50">
      <section className="w-[90%] lg:w-[900px] mx-auto pt-10">
        <h2 className="relative inline-block z-10 text-4xl md:text-5xl font-bold my-5 text-black">
          Contact
          <p className="absolute left-0 bottom-0 w-full h-4 bg-red-500/75"></p>
        </h2>
      </section>

      <section className="flex w-[90%] lg:w-[900px] mx-auto pt-10 py-20">
        <form action="" className="w-full">
          <div className="grid">
            <label htmlFor="" className="mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              className="px-3 py-2 border rounded-lg mb-5"
              placeholder="Enter your name"
            />
          </div>

          <div className="grid">
            <label htmlFor="" className="mb-2 text-sm">
              Email
            </label>
            <input
              type="text"
              className="px-3 py-2 border rounded-lg mb-5"
              placeholder="Enter your email"
            />
          </div>

          <div className="grid">
            <label htmlFor="" className="mb-2 text-sm">
              Message
            </label>
            <textarea
              name=""
              id=""
              cols={20}
              rows={10}
              className="border rounded-lg px-3 py-2"
              placeholder="Type your message..."
            ></textarea>
          </div>
        </form>

        <div className="hidden md:flex w-[50%] ml-20">
          <Image
            src={"/assets/3d-business-guy-with-backpack-and-laptop.png"}
            alt=""
            width={200}
            height={200}
            className="w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
