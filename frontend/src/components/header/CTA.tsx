"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.a 
        href="/cv.pdf" 
        download 
        className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#2E7D32] to-[#FFB703] rounded-full hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
        Download CV
        <div className="absolute inset-0 rounded-full bg-[linear-gradient(to_right,rgba(46,125,50,0.7),rgba(255,183,3,0.7))] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </motion.a>
      
      <motion.a 
        href='#contact' 
        className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#2E7D32] to-[#FFB703] rounded-full hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-pulse" />
        Let&apos;s Talk
        <div className="absolute inset-0 rounded-full bg-[linear-gradient(to_right,rgba(46,125,50,0.7),rgba(255,183,3,0.7))] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </motion.a>
    </div>
  )
}

export default CTA
