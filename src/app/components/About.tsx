"use client";

import React from "react";
import Image from "next/image";
import './style.css'

import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="relative w-full bg-black text-white py-24 px-6 md:px-12 lg:px-16 overflow-hidden " id="about">
      
      {/* Background animation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Purple Blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full "
        />
        {/* Pink/Red Blob */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-rose-900/20 blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
           className="text-purple-400 text-lg font-medium mb-4 block"
          >
            About Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl  text-white mb-6 md:mb-8 tracking-tight leading-tight max-w-2xl"
          >
            Building Blocks For Open Science
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mb-8"
          >
            We've seen quality research die in desk drawers, brilliant minds give away credit just to get published, geographic bias beers good researchers, curators plagued by perverse incentives and as distributors they are often paywalled. Here researchers publish without intermediaries, control their work, secure authorship with
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            Publish now
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
            >
              <path 
                d="M6 12L10 8L6 4" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>

      {/* Grid Layout - Masonry Style */}
       {/* Grid Layout - Masonry Style */}
      {/* Grid Layout - Masonry Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Large Card - Our Story (spans 2 rows on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative lg:row-span-2 droo"
          >
            {/* Border wrapper with padding */}
            <div className="relative p-4">
              {/* Left Border */}
              <div className="absolute left-0 top-4 bottom-6 w-[1px] bg-white/25 md:h-[760px] lg:h-[770px] "></div>
              
              {/* Right Border */}
              <div className="absolute right-0 top-4 bottom-6 w-[1px] bg-white/25 md:h-[760px] lg:h-[770px] "></div>
              
              {/* Decorative dots */}
              <div className="absolute left-0 top-4 w-1.5 h-1.5 rounded-full bg-white/100 -translate-x-[2px] "></div>
              <div className="absolute right-0 top-4 w-1.5 h-1.5 rounded-full bg-white/100 translate-x-[2px]"></div>
              <div className="absolute left-0 bottom-4 w-1.5 h-1.5 rounded-full bg-white/100 -translate-x-[2px]   "></div>
              <div className="absolute right-0 bottom-4 w-1.5 h-1.5 rounded-full bg-white/100 translate-x-[2px] md:hidden lg:block"></div>
              
              {/* Actual Card */}
              <div className="relative h-[500px] md:h-[350px] lg:h-[772px] overflow-hidden group ">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/40 to-black/20 bgcolor">
                  <Image
                    src="/images/story.png"
                    alt="Our Story"
                    fill
                    className="object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="relative h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    Our Story
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
                    We're committed to making knowledge universally accessible, committed to making knowledge universally accessible. We're committed to making knowledge universally accessible.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Border wrapper with padding */}
            <div className="relative p-4">
             {/* Left Border */}
              <div className="absolute left-0 top-4 bottom-6 w-[1px] bg-white/25 md:h-[760px] "></div>
              
              {/* Right Border */}
              <div className="absolute right-0 top-4 bottom-6 w-[1px] bg-white/25 md:h-[760px] lg:h-[350px]"></div>
              
              {/* Decorative dots */}
              <div className="absolute left-0 top-4 w-1.5 h-1.5 rounded-full bg-white/100 -translate-x-[2px] "></div>
              <div className="absolute right-0 top-4 w-1.5 h-1.5 rounded-full bg-white/100 translate-x-[2px]"></div>
              <div className="absolute left-0 bottom-3 w-1.5 h-1.5 rounded-full bg-white/100 -translate-x-[2px] md:hidden"></div>
              <div className="absolute right-0 bottom-4 w-1.5 h-1.5 rounded-full bg-white/100 translate-x-[2px] md:hidden lg:block"></div>
              
              {/* Actual Card */}
              <div className="relative h-[300px] md:h-[350px] overflow-hidden group ">
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/5 bgcolor">
                  <Image
                    src="/images/mission.png"
                    alt="Our Mission"
                    fill
                    className="object-cover mix-blend-overlay opacity-50 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="relative h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                    Our mission
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We're committed to making knowledge universally accessible. More.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Border wrapper with padding */}
            <div className="relative p-4">
              {/* Left Border */}
              <div className="absolute left-0 top-4 bottom-6 w-[1px] bg-white/25 md:h-[350px] md:hidden lg:block"></div>
              
              {/* Right Border */}
              <div className="absolute right-0 top-4 bottom-6 w-[1px]  bg-white/25   md:h-[760px] dottwdo md:hidden lg:block"></div>
              
              {/* Decorative dots */}
              <div className="absolute left-0 top-4 w-1.5 h-1.5 rounded-full bg-white/100 -translate-x-[2px] md:hidden lg:block"></div>
              <div className="absolute right-0 top-4 w-1.5 h-1.5 rounded-full bg-white/100 translate-x-[2px] md:hidden lg:block"></div>
              <div className="absolute left-0 bottom-4 w-1.5 h-1.5 rounded-full bg-white/100 -translate-x-[2px]"></div>
              <div className="absolute right-0 bottom-4 w-1.5 h-1.5 rounded-full bg-white/100 translate-x-[2px] lg:hidden"></div>
              
              {/* Actual Card */}
              <div className="relative h-[300px] md:h-[350px] overflow-hidden group ">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 to-black/10 bgcolor">
                  <Image
                    src="/images/vision.png"
                    alt="Our Vision"
                    fill
                    className="object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="relative h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                    Our vision
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We're committed to making knowledge universally accessible, making knowledge.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Value Card (spans 2 columns on medium+ screens) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative md:col-span-1 lg:col-span-2"
          >
            {/* Border wrapper with padding */}
            <div className="relative p-4">
              {/* Top Border - ONLY for this card */}
              <div className="absolute left-2 right-2 top-0 h-[2px] bg-white/25 dotp"></div>
              
              {/* Left Border */}
              <div className="absolute left-0 top-4 bottom-6 w-[1px] bg-white/25 md:hidden "></div>
              
              {/* Right Border */}
              <div className="absolute right-0 top-4 bottom-6 w-[1px] bg-white/25 md:hidden"></div>
              
              {/* Decorative dots - with top corners included */}
              <div className="absolute left-2 -top-4 w-1.5 h-1.5 rounded-full bg-white/100 -translate-y-[2px]"></div>
              <div className="absolute right-2 -top-4 w-1.5 h-1.5 rounded-full bg-white/100 -translate-y-[2px]"></div>
              <div className="absolute left-0 top-4 w-1.5 h-1.5 rounded-full bg-white/100 -translate-x-[2px] md:hidden "></div>
              <div className="absolute right-0 top-4 w-1.5 h-1.5 rounded-full bg-white/100 translate-x-[2px] md:hidden "></div>
              <div className="absolute left-0 bottom-4 w-1.5 h-1.5 rounded-full bg-white/100 -translate-x-[2px]"></div>
              <div className="absolute right-0 bottom-4 w-1.5 h-1.5 rounded-full bg-white/100 translate-x-[2px]"></div>
              
              {/* Actual Card */}
              <div className="relative h-[300px] md:h-[350px] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10 bgcolor">
                  <Image
                    src="/images/value.png"
                    alt="Our Value"
                    fill
                    className="object-cover mix-blend-overlay opacity-50 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="relative h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                    Our Value
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
                    We're committed to making knowledge universally accessible. We're committed to making knowledge universally accessible. We're committed to making knowledge universally accessible.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;