import React from "react";
import { twMerge } from "tailwind-merge";

interface secondaryButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

export default function SecondaryButton({
  children,
  className,
  onClick,
}: secondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "relative overflow-hidden border-[1.5px] border-white uppercase h-12 sm:h-10 px-5 text-xs truncate w-fit group",
        className
      )}
    >
      <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
      <span className="relative z-10 text-white group-hover:text-primaryColor">
        {children}
      </span>
    </button>
  );
}
