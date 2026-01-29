"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";

// helper component
const GridBeam = ({ left, delay, duration, color }: { left: string, delay: number, duration: number, color: string }) => (
    <motion.div
        initial={{ top: "-20%", opacity: 0 }}
        animate={{ top: "120%", opacity: [0, 1, 0] }}
        transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "linear",
        }}
        className={`absolute w-[1px] h-[200px] bg-gradient-to-b ${color} to-transparent z-0 opacity-50`}
        style={{ left: left }}
    />
);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePos({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                });
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center items-center bg-black"
        >
            {/*  Grid Background Code  */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:40px_40px]"
                    style={{
                        maskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                        WebkitMaskImage: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                    }}
                />
                <GridBeam left="10%" delay={0} duration={3} color="from-purple-500" />
                <GridBeam left="25%" delay={2} duration={4} color="from-blue-500" />
                <GridBeam left="50%" delay={1} duration={2.5} color="from-indigo-500" />
                <GridBeam left="75%" delay={3} duration={3.5} color="from-purple-500" />
                <GridBeam left="90%" delay={1.5} duration={4.5} color="from-blue-500" />
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-md mb-8 hover:bg-white/10 hover:border-purple-500/30 transition-all cursor-pointer group"
                >
                    <span className="flex h-2 w-2 rounded-full bg-purple-500 group-hover:animate-ping"></span>
                    <span>v2.0: Protocol Upgrade Live</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-4xl text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4 md:mb-6 leading-[1.1]"
                >
                    The future is Here! <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                        It's openQuanta.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-xl text-lg text-gray-400 mb-10 leading-relaxed"
                >
                    Here researchers publish without intermediaries, control their work, secure authorship with NFTs and monetize in an open market.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col items-center sm:flex-row gap-4 mb-20 w-full sm:w-auto"
                >
                    <button className="h-12 px-8 rounded-full w-80 bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]">
                        Get Started
                        <ChevronRight className="w-4 h-4" />
                    </button>
                    <button className="h-12 px-8 rounded-full justify-center w-fit bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Watch Demo
                    </button>
                </motion.div>

                {/* Floating Glass Interface */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="relative w-full max-w-5xl"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />
                    <div className="relative aspect-video rounded-xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden group">
                        <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-20">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="absolute inset-0 mt-10 flex items-center justify-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20">
                            <div className="relative group/play cursor-pointer">
                                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-75 group-hover/play:scale-100 transition-transform duration-500" />
                                <div className="relative w-20 h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center transition-transform duration-300 group-hover/play:scale-110">
                                    <Play className="w-8 h-8 text-white fill-white translate-x-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
