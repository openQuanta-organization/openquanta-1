"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import './style.css'
const logos = [
  // { id: 1, name: "Sorare", src: "/icons/sorare.svg" },
  // { id: 2, name: "Visa", src: "/icons/visa.svg" },
  // { id: 3, name: "Ness", src: "/icons/ness.svg" },
  // { id: 4, name: "Unqork", src: "/icons/unqork.svg" },
  { id: 1, name: "Superteam", src: "/icons/mainsuperteam.png" },
  // { id: 6, name: "Stitch", src: "/icons/stitch.svg" },
  { id: 2, name: "Solana", src: "/icons/solanatwo.png" },
  // { id: 8, name: "Vital", src: "/icons/vital.svg" },
  // { id: 9, name: "Resly", src: "/icons/resly.svg" },
  // { id: 10, name: "Humaans", src: "/icons/humaans.svg" },
  { id: 3, name: "Research", src: "/icons/research.png" },
  { id: 4, name: "College", src: "/icons/college.png" },
  { id: 5, name: "Cyreneai", src: "/icons/cyreneai.png" },
];

const mobileScrollData = [...logos, ...logos];

const LogosSlider = () => {
  return (
    <section className="relative w-full py-20 md:py-32 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- DESKTOP VIEW: STATIC GRID (Hidden on mobile) --- */}
        {/* <div className="hidden md:grid grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center">
          {logos.map((logo) => (
            <div key={logo.id} className="w-full flex justify-center group">
               <div className="relative h-8 w-40 transition-all duration-300 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 flex items-center justify-center"> 
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={20}
                    className="object-contain"
                  />
               </div>
            </div>
          ))}
        </div> */}
        <div className="flex items-center pb-10">
          {" "}
          <h3 className="text-xl mx-auto font-semibold text-gray-500 group-hover:text-white transition-colors">
            Our Partners
          </h3>
        </div>

        <div className="relative w-full overflow-hidden py-4">
          {/* Gradients for smooth fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />

          <motion.div
            className="flex gap-16 w-max items-center"
            style={{ willChange: "transform" }}
            animate={{ x: -(logos.length * 128) }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {mobileScrollData.map((logo, index) => (
              <div
                key={`${logo.id}-mobile-${index}`}
                className="relative h-10 w-32 flex-shrink-0 opacity-80 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={228}
                  height={80}
                  className="object-contaidn dottwo"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogosSlider;
