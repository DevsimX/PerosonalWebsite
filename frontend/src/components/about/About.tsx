"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, MapPin, MessageCircle, Code, Database, Cloud, Zap } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Award,
      title: "Experience",
      value: "1+ Years",
      description: "Working Experience",
      color: "from-[#2E7D32] to-[#8ECAE6]"
    },
    {
      icon: GraduationCap,
      title: "Education",
      value: "Master's",
      description: "Software Engineering",
      color: "from-[#FFB703] to-[#8ECAE6]"
    },
    {
      icon: MapPin,
      title: "Visa Status",
      value: "485 Visa",
      description: "Expires 2030",
      color: "from-[#2E7D32] to-[#FFB703]"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: Code, level: 90, color: "from-[#2E7D32] to-[#8ECAE6]" },
    { name: "Backend Development", icon: Database, level: 85, color: "from-[#FFB703] to-[#8ECAE6]" },
    { name: "Cloud & DevOps", icon: Cloud, level: 80, color: "from-green-500 to-emerald-500" },
    { name: "Performance Optimization", icon: Zap, level: 88, color: "from-[#FFB703] to-[#2E7D32]" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[rgba(46,125,50,0.7)] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgba(255,183,3,0.7)] rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 border bg-[rgba(46,125,50,0.2)] text-[#8ECAE6] border-[rgba(46,125,50,0.3)]">
            Get To Know
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#2E7D32] via-[#FFB703] to-[#8ECAE6] bg-clip-text text-transparent mb-4 sm:mb-6">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div 
            className="relative mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 rounded-full blur-2xl bg-[linear-gradient(to_right,rgba(46,125,50,0.7),rgba(255,183,3,0.7))]"></div>
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 rounded-full bg-[linear-gradient(to_right,rgba(142,202,230,0.7),rgba(46,125,50,0.7))]"></div>
              
              {/* Main Image Container */}
              <motion.div 
                className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[384px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[rgba(46,125,50,0.3)] bg-[linear-gradient(to_bottom_right,rgba(46,125,50,0.1),rgba(142,202,230,0.1))] backdrop-blur-sm mx-auto"
                whileHover={{ scale: 1.03, rotateY: 3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Image 
                  src="/half.jpeg" 
                  alt="Yutian Xia - About" 
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </motion.div>

              {/* Floating Skill Icons */}
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`absolute w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center text-white shadow-lg hidden sm:flex`}
                  style={{
                    top: `${20 + index * 20}%`,
                    left: index % 2 === 0 ? '-1.5rem' : 'auto',
                    right: index % 2 === 1 ? '-1.5rem' : 'auto'
                  }}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3 + index * 0.5, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <skill.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  className="relative p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-2 sm:mb-3`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">{stat.value}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium">{stat.title}</p>
                  <p className="text-xs text-gray-400">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <motion.div
              className="prose prose-sm sm:prose-base lg:prose-lg prose-invert max-w-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                Accomplished IT developer who holds Master of Software Engineering in The University of Melbourne and Bachelor of Computer Science in University of Arizona in designing, developing, and deploying scalable, highly available, and secure applications on the web technology stack with expertise in programming using Django and React.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg mt-3 sm:mt-4">
                Skilled in writing high-quality, efficient code using object-oriented methods, SQL, and data processing. A fast learner who excels in dynamic work environments and highly motivated to leverage skills to drive success in the next role.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="#contact" 
                className="relative inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#2E7D32] to-[#FFB703] text-white text-sm sm:text-base font-semibold rounded-full shadow-lg cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  filter: "brightness(1.1)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                </motion.div>
                Let&apos;s Talk
                <motion.div 
                  className="absolute inset-0 rounded-full bg-[linear-gradient(to_right,rgba(46,125,50,0.7),rgba(255,183,3,0.7))] opacity-0"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;