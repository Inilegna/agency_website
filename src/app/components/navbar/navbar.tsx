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
    <div className="w-full flex justify-between items-center text-white uppercase font-HKMedium py-6">
      <p className="font-bold z-40">Anaël Angelini</p>

      {/* Menu burger pour mobile */}
      <button
        onClick={toggleMenu}
        className="sm:hidden focus:outline-none z-40"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Navigation et bouton - cachés sur mobile */}
      <div className="hidden sm:flex space-x-12">
        {Object.entries(DATA.navbar.navitems).map(([key, item]) => (
          <a
            key={key}
            href={item.url}
            target="_blank"
            className="text-xs flex items-center"
          >
            {item.name}
          </a>
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

      {/* Menu déroulant mobile avec animation */}
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="absolute z-30 top-14 left-0 w-full bg-primaryColor bg-opacity-60 backdrop-blur-md text-white flex flex-col space-y-4 p-6 border-b-[1.5px] border-white/10 navbarBreakpoint:hidden"
        >
          {Object.entries(DATA.navbar.navitems).map(([key, item]) => (
            <motion.a
              key={key}
              href={item.url}
              variants={itemVariants}
              className="text-sm flex items-center"
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
