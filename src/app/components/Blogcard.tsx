"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, User } from "lucide-react";

export default function BlogCard({ post, index }: { post: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col h-full"
        >
            <div className="relative flex flex-col h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/10">
                <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>

                <div className="relative h-56 w-full overflow-hidden z-10">
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-50`} />

                    <div className="absolute top-4 left-4 z-20 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
                        <Calendar className="w-3 h-3 text-gray-300" />
                        <span className="text-xs font-medium text-gray-200 tracking-wide">{post.date}</span>
                    </div>
                </div>

                <div className="relative z-10 flex flex-col flex-grow p-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-purple-400 transition-colors duration-200">
                        {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                        {post.excerpt}
                    </p>

                    <div className="flex-grow" />

                    <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                                <User className="w-4 h-4 text-gray-300" />
                            </div>
                            <span className="text-xs font-medium text-gray-300">{post.author.name}</span>
                        </div>

                        <button className="flex items-center gap-2 text-white/70 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">
                            Read Article
                            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}