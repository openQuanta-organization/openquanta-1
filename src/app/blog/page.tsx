"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, User } from "lucide-react";
import BlogCard from "../components/Blogcard";

// dummy data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Essential for early-stage tumor development",
    excerpt: "SMARCA4 and other components of the SWI/SNF chromatin remodeling complex have been implicated in various cancers.",
    category: "Health",
    readTime: "5 min read",
    date: "Oct 12, 2025",
    author: { name: "Dr. Kenneth Dennis", avatar: "/path-to-avatar.jpg" },
    gradient: "from-red-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "The Future of Decentralized Science (DeSci)",
    excerpt: "Exploring how blockchain technology is revolutionizing the peer-review process and ensuring permanent open access.",
    category: "Technology",
    readTime: "8 min read",
    date: "Oct 08, 2025",
    author: { name: "Sharon Victor", avatar: "/path-to-avatar.jpg" },
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "Understanding Quantum Encryption Layers",
    excerpt: "A deep dive into the security protocols protecting authorship NFTs and the reputation layer on openQuanta.",
    category: "Security",
    readTime: "12 min read",
    date: "Sep 28, 2025",
    author: { name: "Prof. Mary Agunna", avatar: "/path-to-avatar.jpg" },
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
];

const BlogPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />

      {/*hero background animation*/}
      <div className="absolute top-0 left-0 w-full h-[80vh] pointer-events-none z-0 overflow-hidden">
        {/* Purple Blob */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-purple-900/30 blur-[120px]"
        />
        {/* Secondary Blob */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2], x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[10%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-rose-900/20 blur-[120px]"
        />
        
        {/* Fade to Black at bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
        
        {/*header*/}
        <div className="mb-24 text-center max-w-2xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white"
          >
            Insights & Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Latest research highlights, protocol updates, and deep dives into the future of open science.
          </motion.p>
        </div>

        {/*blog grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
