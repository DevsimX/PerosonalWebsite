"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from "next/image";
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      {/* Background handled globally; remove local blobs to avoid seams */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 border bg-[rgba(46,125,50,0.2)] text-[#8ECAE6] border-[rgba(46,125,50,0.3)]">
                👋 Hello, I&apos;m
              </span>
            </motion.div>

            <motion.h1 
              className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-[#2E7D32] via-[#FFB703] to-[#8ECAE6] bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Yutian Xia
            </motion.h1>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl lg:text-3xl text-[#E2E8F0] font-light">
                Fullstack Developer
              </h2>
              <p className="text-lg text-[#94A3B8] max-w-lg leading-relaxed">
                Crafting digital experiences with modern technologies and creative solutions. 
                Passionate about building scalable applications that make a difference.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <CTA />
            </motion.div>

            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <HeaderSocials />
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 rounded-full blur-xl bg-[linear-gradient(to_right,rgba(46,125,50,0.7),rgba(255,183,3,0.7))]"></div>
              <div className="absolute -inset-2 rounded-full bg-[linear-gradient(to_right,rgba(142,202,230,0.7),rgba(46,125,50,0.7))]"></div>
              
              {/* Main Image Container */}
              <motion.div 
                className="relative w-80 h-96 lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden border-2 border-[rgba(46,125,50,0.3)] bg-[linear-gradient(to_bottom_right,rgba(46,125,50,0.1),rgba(142,202,230,0.1))] backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/half.jpeg" 
                  alt="Yutian Xia - Fullstack Developer" 
                  fill
                  className="object-cover object-top"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#FFB703] rounded-full flex items-center justify-center text-white font-bold text-xs"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              >
                💻
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-12 left-0 right-0 mx-auto w-fit flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a 
            href="#about"
            className="flex flex-col items-center space-y-2 text-[#E2E8F0] drop-shadow group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium bg-[rgba(15,23,42,0.5)] px-3 py-1 rounded-full">Scroll Down</span>
            <ChevronDown className="w-6 h-6 text-[#FFB703]" />
          </motion.a>
        </motion.div>
      </div>
    </header>
  )
}

export default Header