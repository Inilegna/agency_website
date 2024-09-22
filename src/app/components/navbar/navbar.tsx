"use client";

import { DATA } from "@/app/content";
import React, { useState } from "react";
import {
  ArrowUpRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Variants, motion } from "framer-motion";
import SecondaryButton from "../buttons/SecondaryButton";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Variantes pour l'animation du menu déroulant
  const menuVariants: Variants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren", // Attendre que le conteneur soit visible avant d'animer les items
        staggerChildren: 0.1, // Décalage entre chaque item
      },
    },
  };

  // Variantes pour l'animation des items de navigation
  const itemVariants: Variants = {
    hidden: {
      filter: "blur(16px)",
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      scale: 1,
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "linear",
      },
    },
  };

  return (
    <div
      className={twMerge(
        "fixed inset-x-0 top-0 bg-primaryColor bg-opacity-80 backdrop-blur-lg w-full max-w-7xl mx-auto px-6 md:px-12 text-white uppercase font-HKMedium py-6 z-50",
        isOpen ? "border-b-[1.5px] border-white/10" : ""
      )}
    >
      <div
        className={twMerge(
          "w-full flex justify-between items-center",
          isOpen ? "mb-6" : ""
        )}
      >
        <p className="font-bold z-40">Anaël Angelini</p>

        {/* Menu burger pour mobile */}
        <button onClick={toggleMenu} className="sm:hidden focus:outline-none">
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Navigation et bouton - cachés sur mobile */}
        <div className="hidden sm:flex space-x-12">
          {Object.entries(DATA.navbar.navitems).map(([key, item]) => (
            <div key={key} className="nav flex items-center">
              <a href={item.url} target="_blank" className="text-xs">
                {item.name}
              </a>
            </div>
          ))}
          <SecondaryButton
            onClick={() =>
              window.open(DATA.navbar.buttons.secondaryUrl, "_blank")
            }
            className="hidden navbarBreakpoint:block text-inherit"
          >
            <span className="flex items-center gap-x-2">
              {DATA.navbar.buttons.secondaryButton}
              <ArrowUpRightIcon className="h-3 w-3 stroke-[3px]" />
            </span>
          </SecondaryButton>
        </div>
      </div>

      {/* Menu déroulant mobile avec animation */}
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={menuVariants}
          className="w-full text-white flex flex-col space-y-4 sm:hidden"
        >
          {Object.entries(DATA.navbar.navitems).map(([key, item]) => (
            <motion.a
              key={key}
              href={item.url}
              variants={itemVariants}
              className="text-sm flex items-center w-fit"
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
