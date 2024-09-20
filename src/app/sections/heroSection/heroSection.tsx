"use client";
import Banner from "@/app/components/banner/Banner";
import { DATA } from "@/app/content";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion, useTransform, useScroll } from "framer-motion";
import React from "react";

export default function HeroSection() {
  const imgClassName = "opacity-70 h-6";
  const { scrollYProgress } = useScroll();

  return (
    <section className="relative text-white uppercase text-center sm:text-start mt-14">
      {/* --- SUBHEADER ---- */}
      <p className="z-10 font-HKLight text-[0.625rem] sm:text-xs md:-mb-2">
        {DATA.heroSection.subheader}
      </p>
      {/* --- TITLE ---- */}
      <div className="z-10 font-HKBold tracking-widest flex flex-col -space-y-3 md:-space-y-6 navbarBreakpoint:-space-y-8">
        <h1>{DATA.heroSection.headerBold}</h1>
        <h1 className="text-primaryColor outlinetext">
          {DATA.heroSection.headerLine}
        </h1>
      </div>
      {/* --- PRIMARY BUTTON & LOGOS --- */}
      <div className="flex items-center gap-x-8 mt-5">
        <button
          className="relative bg-white text-primaryColor h-12 sm:h-16 sm:-ml-6 md:-ml-12 xl:-ml-0 md:pl-12 px-6 md:pr-6 xl:px-6 uppercase font-HKMedium text-xs text-start border-y-[1.5px] border-r-[1.5px] border-transparent overflow-hidden group" // Removed left border
        >
          <span className="flex items-center gap-x-2 relative z-10 group-hover:text-white">
            {DATA.heroSection.button}
            <ArrowRightIcon className="h-3 w-3 text-primaryColor group-hover:text-white stroke-[3px]" />
          </span>
          <span className="absolute inset-0 bg-primaryColor transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
        </button>

        {/* --- LOGOS ---- */}
        <div className="hidden sm:block">
          <p className="text-white/70 uppercase text-xs font-HKLight mb-2">
            {DATA.heroSection.logoText}
          </p>
          <ul className="flex items-center">
            {Object.values(DATA.logos).map((logo, index) => (
              <li key={index} className="relative flex items-center">
                <img src={logo.url} alt={logo.alt} className={imgClassName} />
                {index < Object.values(DATA.logos).length - 1 && (
                  <div className="rounded-full h-1 w-1 bg-white/70 mx-2" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <motion.div className="fixed bottom-0 right-0 bg-white h-40 w-1/2 md:w-72 p-6 z-0">
        <p className="text-primaryColor text-xs font-HKMedium uppercase truncate">
          {DATA.heroSection.seeServices}
        </p>
      </motion.div>
      <Banner />
    </section>
  );
}
