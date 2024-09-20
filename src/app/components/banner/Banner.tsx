import React from "react";

export default function Banner() {
  const bannertext = Array(16).fill("Scrollez pour voir la suite");
  return (
    <div className="fixed bottom-2 z-10 flex items-center justify-start whitespace-nowrap">
      <div className="w-full inline-flex flex-nowrap">
        <div className="flex animate-infinite-scroll">
          {bannertext.map((text, index) => (
            <div
              key={index}
              className="flex items-center font-HKLight text-white/70 text-xs uppercase"
            >
              <span>{text}</span>
              <div className="w-1 h-1 bg-white/70 rounded-full mx-3" />
            </div>
          ))}
        </div>
        <div className="flex animate-infinite-scroll">
          {bannertext.map((text, index) => (
            <div
              key={index}
              className="flex items-center font-HKLight text-white/70 text-xs uppercase"
            >
              <span>{text}</span>
              <div className="w-1 h-1 bg-white/70 rounded-full mx-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
