import { DATA } from "@/app/content";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative text-white uppercase text-center sm:text-start overflow-hidden mt-8">
      <p className="z-10 font-HKLight text-[0.625rem] lg:text-xs">
        {DATA.heroSection.subheader}
      </p>
      <div className="z-10 font-HKBold tracking-widest flex flex-col -space-y-3 md:-space-y-6 navbarBreakpoint:-space-y-8">
        <h1 className="-ml-1">{DATA.heroSection.headerBold}</h1>
        <h1 className="text-primaryColor outlinetext">
          {DATA.heroSection.headerLine}
        </h1>
      </div>
    </section>
  );
}
