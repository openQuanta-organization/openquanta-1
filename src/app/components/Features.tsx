"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import './style.css'

const Features = () => {
  const featureData = [
    {
      title: "Sharing with colleagues with collea",
      description: "Companies invest in security measures to ensure continuity, comply with legal requirements, and preserve customer trust.",
      imageSrc: "/images/imageone.png",
      width: 800,
      height: 600,
    },
    {
      title: "Paper Submitted for Review",
      description: "Companies invest in security measures ensure continuity, comply with legal requirements, and preserve customer trust However, these.",
      imageSrc: "/images/imagetwo.png",
      width: 800,
      height: 600,
    },
    {
      title: "Review analytics and data",
      description: "Companies invest in security measures to ensure continuity, comply with legal requirements, and preserve customer trust.",
      imageSrc: "/images/imagethree.png",
      width: 800,
      height: 600,
    },
    {
      title: "Dashboard customization",
      description: "Companies invest in security measures ensure continuity, comply with legal requirements, and preserve customer trust However, these.",
      imageSrc: "/images/imagefour.png",
      width: 800,
      height: 600,
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-24 px-6 md:px-12 overflow-hidden">

      {/*background animation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Purple Blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 1, 1],
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
            opacity: [1, 1, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/*header*/}
        {/* <div className="text-center mb-20 space-y-6">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            The modern standard
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-6 tracking-tight">
            Beautiful documentation <br className="hidden md:block" />
            that converts users
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto md:text-sm text-xs">
            A platform you can rely on to reach your audience
          </p>
        </div> */}
          <div className="mb-20">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-purple-400 text-lg font-medium mb-4 block"
                            >
                                How it works
                            </motion.span>
        
                            <div className="flex flex-col lg:flex-col gap-12 justify-between">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-5xl md:text-6xl text-white max-w-3xl tracking-tighter leading-[1.1]"
                                >
                                    what you can do what you
                                </motion.h2>
        
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="text-gray-400 text-lg max-w-xl leading-relaxed"
                                >
                                    Every layer of openQuanta is designed for scientific collaboration and transparent publishing.  Each piece plays a vital role in advancing open research. 
                                </motion.p>
                            </div>
                        </div>
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group "
            >

              {/* image container */}
              <div className=" relative w-full bg-[#0A0A0A]/50 backdrop-blur-sm border border-white/5 overflow-hidden mb-8 transition-all duration-300 group-hover:border-white/20 group-hover:shadow-2xl ">
                <Image
                  src={feature.imageSrc}
                  alt={feature.title}
                  width={feature.width}
                  height={feature.height}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500 myimg"
                />

              </div>

              {/* TEXT CONTENT */}
              <div className="text-center md:text-left space-y-3">
                <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0">
                  {feature.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
