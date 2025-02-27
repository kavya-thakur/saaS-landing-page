import React from "react";
import { BRAND_LOGOS, HERO_CONTENT } from "../constants/index";
import heroImage from "../assets/hero.jpg"
import {motion}from "framer-motion"
const Herosection = () => {
  return (
    <section className="pt-28 lg:pt-36">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-8 border-neutral-800 px-3 py-2 rounded-full text-sm ">
          {HERO_CONTENT.badgeText}
        </div>
        <h1 className="text-6xl lg:text-8xl my-4 font-bold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">
          {HERO_CONTENT.mainHeading.split("\n").map((text, index) => {
            return (
              <span key={index}>
                {text} <br />
              </span>
            );
          })}
        </h1>
        <p className="mt-6 text-neutral-400 max-w-xl">
          {HERO_CONTENT.subHeading}
        </p>
        <div className="mt-8 space-x-4">
          <a
            href=""
            className="px-5 py-2 hover:px-4 ease-in duration-150 bg-white text-black font-normal rounded-lg "
          >
            {HERO_CONTENT.callToAction.primary}
          </a>
          <a
            href=""
            className="px-5 py-2 hover:px-4 ease-in duration-150 border border-gray-400 text-white font-normal  rounded-lg "
          >
            {HERO_CONTENT.callToAction.secondary}
          </a>
        </div>
        <div className="py-10">
          <p className="text-gray-400 text-center mb-8">
            {HERO_CONTENT.trustedByText}
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {BRAND_LOGOS.map((log, index) => {
              return <img className="h-8" key={index} src={log.src} alt={log.alt} />;
            })}
          </div>
        </div>
            <div className="mt-12 ">
                <img src={heroImage} alt="streamerz" className="w-full h-auto rounded-3xl mb-20 " />
            </div>

      </div>
    </section>
  );
};

export default Herosection;
