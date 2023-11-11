"use client";

import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section id="hero">
      {/* Hero Container */}
      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:items-start max-w-lg  lg:space-x-10 lg:max-w-8xl px-4">
        {/* column 1 */}
        <div className="flex flex-col lg:max-w-5xl justify-start">
          {/* Images container */}
          <div className="w-full">
            <Image
              priority
              src="/images/image-web-3-desktop.jpg"
              width={1460}
              height={600}
              alt="hero image"
              className="hidden lg:block"
            />
            <Image
              src="/images/image-web-3-mobile.jpg"
              width={686}
              height={600}
              alt="hero image"
              className="lg:hidden"
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:space-y-0 text-left lg:space-x-10 mt-10">
            <h1 className="text-5xl  lg:text-6xl xl:text-7xl font-bold lg:w-1/2">
              The Bright Future of Web 3.0?
            </h1>
            <div className="lg:w-1/2 lg:pr-10 flex flex-col justify-between space-y-4 lg:space-y-0 mt-8 lg:mt-0">
              <p className="text-gray-500 ">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <Button className="uppercase w-fit bg-soft-red xl:p-8 p-6  text-white rounded-none transition hover:bg-very-dark-blue tracking-widest lg:tracking-[0.3em] text-base px-8">
                Read more
              </Button>
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="bg-very-dark-blue text-off-white  mt-12 lg:mt-0">
          <div className="flex flex-col  px-8 py-12 space-y-10 ">
            <h2 className="text-5xl text-soft-orange">New</h2>

            <div className="">
              <h3 className="text-white font-bold text-xl mb-2 cursor-pointer hover:text-soft-orange transition">
                Hydrogen VS Electric Cars
              </h3>
              <p className="text-grayish-blue text-sm leading-7 tracking-wider lg:max-w-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              </p>
            </div>
            <Separator className="bg-dark-grayish-blue h-[1px] " />

            <div className="">
              <h3 className="text-white font-bold text-xl mb-2 cursor-pointer hover:text-soft-orange transition">
                Hydrogen VS Electric Cars
              </h3>
              <p className="text-grayish-blue text-sm leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                ullam perspiciatis fugit
              </p>
            </div>
            <Separator className="bg-dark-grayish-blue h-[1px] " />

            <div className="">
              <h3 className="text-white font-bold text-xl mb-2 cursor-pointer hover:text-soft-orange transition">
                Hydrogen VS Electric Cars
              </h3>
              <p className="text-grayish-blue text-sm leading-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                temporibus accusamus recusanda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
