"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// ─── useCounter Hook ────────────────────────────────────────
const useCounter = (target: number, duration: number = 2800) => {
  const [count, setCount] = useState<number>(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const animate = useCallback(() => {
    if (!startTimeRef.current) startTimeRef.current = performance.now();
    const elapsed = performance.now() - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    setCount(Math.round(eased * target));

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [target, duration]);

  const startAnimation = useCallback(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    startTimeRef.current = null;
    setCount(0);
    animationRef.current = requestAnimationFrame(animate);
  }, [animate]);

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return { count, startAnimation };
};

// ─── Animated Stat Display ──────────────────────────────────
const AnimatedStat = ({ stat, isVisible }: { stat: string; isVisible: boolean }) => {
  const numericValue = parseInt(stat.replace(/[^0-9]/g, ""), 10);
  const suffix = stat.replace(/[0-9]/g, "");
  const { count, startAnimation } = useCounter(numericValue, 2800);

  useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <h3 className="text-6xl font-light text-white tracking-tighter tabular-nums">
      {count}{suffix}
    </h3>
  );
};

// ─── Main Component ─────────────────────────────────────────
const BuildingBlocks = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Intersection observer — restarts counter every time section enters view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(false);
                    const timeout = setTimeout(() => setIsVisible(true), 50);
                    return () => clearTimeout(timeout);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const blocks = [
        {
            stat: "72%",
            title: "Access Gap",
            problem: "Valuable academic research is inaccessible to most - we're committed to making knowledge universally accessible.",
            approach: "We use decentralized storage and token-gated access (QPT) to ensure research remains permanent, uncensorable, and affordable."
        },
        {
            stat: "5",
            title: "Oligopoly",
            problem: "Publishing conglomerates control nearly half of the global research output. We ensure equitable access to discovery.",
            approach: "By removing intermediaries, we return control to the scientists and the public, allowing market dynamics to price research fairly."
        },
        {
            stat: "90%",
            title: "Unpaid Labor",
            problem: "Researchers peer review without remuneration. We compensate peer reviewers fairly.",
            approach: "Our protocol automatically distributes QPT rewards to peer reviewers, creating a sustainable economy for quality assurance."
        }
    ];

    return (
        <section className="w-full bg-black py-24">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header Section */}
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-400 text-lg font-medium mb-4 block"
                    >
                        Why openQuanta
                    </motion.span>

                    <div className="flex flex-col lg:flex-col gap-12 justify-between">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl text-white max-w-3xl tracking-tighter leading-[1.1]"
                        >
                            Building Blocks For Open Science
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg max-w-xl leading-relaxed"
                        >
                            We've seen quality research die in desk drawers, brilliant minds give away credit just to get published, geographic bias beat good researchers, and curators plagued by perverse incentives.
                        </motion.p>
                    </div>
                </div>

{/* Stats Grid */}
<div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {blocks.map((block, index) => {
        const isOpen = openIndex === index;
        return (
            <div
                key={index}
                className={`
                  relative p-8 group transition-all duration-500 border border-white/10
                  bg-white/40
                  hover:bg-white/80
                  hover:border-purple-500/40
                  hover:shadow-[0_0_25px_rgba(139,92,246,0.15),inset_0_0_25px_rgba(139,92,246,0.05)]
                `}
            >
                {/* Top Row: Stat + Toggle */}
                <div className="flex justify-between items-start mb-6">
                    <AnimatedStat stat={block.stat} isVisible={isVisible} />
                    <span 
                       onClick={() => toggleIndex(index)}
                      className="ml-4 shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 text-gray-400 cursor-pointer">
                                  {openIndex === index ? (
                                    <Minus className="w-4 h-4" />
                                  ) : (
                                    <Plus className="w-4 h-4" />
                                  )}
                                </span>
                </div>

                {/* Title */}
                <p className="text-white text-lg font-semibold mb-3">
                    {block.title}
                </p>

                {/* Contents */}
                <div className="min-h-[140px]">
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        {block.problem}
                    </p>
                </div>

                {/* Approach Section */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-6">
                                <span className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-2 block">
                                    Our Approach
                                </span>
                                <p className="text-gray-300 leading-relaxed">
                                    {block.approach}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    })}
</div>
            </div>
        </section>
    );
};

export default BuildingBlocks;