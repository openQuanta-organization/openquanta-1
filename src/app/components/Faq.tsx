"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CornerDownRight, Plus, Minus } from "lucide-react";
import './style.css'
const FAQ = () => {
  // State to track which FAQ item is open (null = all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Toggle logic
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ Data
  const faqs = [
    {
      question: "How does the Reputation Layer work?",
      answer: "The Reputation Layer assigns dynamic scores to researchers based on their peer review history, citation impact, and on-chain activity. Unlike traditional metrics, this score is updated in real-time and stored on the blockchain, ensuring transparency and preventing manipulation."
    },
    {
      question: "What is an Authorship NFT?",
      answer: "An Authorship NFT is a unique digital asset minted when you publish a paper on openQuanta. It serves as immutable proof of ownership and timestamping for your intellectual property. These NFTs can also handle royalty distribution automatically via smart contracts."
    },
    {
      question: "Is openQuanta compatible with existing DOI systems?",
      answer: "Yes. While we use decentralized identifiers (DIDs) for on-chain referencing, we provide a bridge service that allows you to mint a DOI for your published work, ensuring compatibility with traditional academic citation tools like Zotero and Google Scholar."
    },
    {
      question: "Are there gas fees for submitting peer reviews?",
      answer: "We use a subsidized gas model for verified contributors. While interactions are recorded on-chain, the protocol covers standard transaction costs for peer reviews to encourage participation. You only pay gas fees for high-value transactions like minting NFTs or creating auctions."
    },
    {
      question: "How is data stored permanently?",
      answer: "We utilize decentralized storage networks like IPFS and Arweave. This ensures that your research papers and data sets are censorship-resistant and perpetually accessible, even if the openQuanta interface were to go offline."
    }
  ];

  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* 1. Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about our research protocols and platform.
          </p>
        </motion.div>

        {/* 2. THE SEARCH BAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative max-w-2xl mx-auto group mb-20"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-orange-500/20 to-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-500" />
          
          <div className="relative flex items-center w-full bg-[#0A0A0A] border border-white/10 rounded-full px-2 py-2 shadow-2xl">
            {/* Left Icon & Divider */}
            <div className="flex items-center pl-4 pr-3 gap-3 ">
              <Search className="w-5 h-5 text-gray-500" />
              <div className="h-6 w-px bg-gray-700/50" />
            </div>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Ask any question about openQuanta"
              className="flex-1 bg-transparent text-white placeholder-gray-600 focus:outline-none text-base md:text-lg py-3"
            />

            {/* Right Action Button */}
            <button className="roundbtn flex items-center justify-center w-12 h-12 rounded-full bg-gray-300 hover:bg-white transition-colors duration-200 group/btn">
              <CornerDownRight className="w-5 h-5 text-black transition-transform duration-200 group-hover/btn:-rotate-90" />
            </button>
          </div>
        </motion.div>

        {/* 3. FAQ ACCORDION LIST */}
        <div className="max-w-3xl mx-auto text-left space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index 
                  ? "bg-white/5 border-white/10 shadow-lg shadow-purple-900/5" 
                  : "bg-transparent border-transparent hover:bg-white/[0.02]"
              }`}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-6 text-left cursor-pointer focus:outline-none"
              >
                <span className={`text-lg font-medium transition-colors duration-300 ${
                  openIndex === index ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}>
                  {faq.question}
                </span>
                <span className="ml-4 shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 text-gray-400">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>

              {/* Expandable Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                      <div className="pt-4">
                         {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;