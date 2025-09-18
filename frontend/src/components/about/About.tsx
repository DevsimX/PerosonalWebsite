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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[rgba(46,125,50,0.7)] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgba(255,183,3,0.7)] rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 border bg-[rgba(46,125,50,0.2)] text-[#8ECAE6] border-[rgba(46,125,50,0.3)]">
            Get To Know
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#2E7D32] via-[#FFB703] to-[#8ECAE6] bg-clip-text text-transparent mb-6">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-8 rounded-full blur-2xl bg-[linear-gradient(to_right,rgba(46,125,50,0.7),rgba(255,183,3,0.7))]"></div>
              <div className="absolute -inset-4 rounded-full bg-[linear-gradient(to_right,rgba(142,202,230,0.7),rgba(46,125,50,0.7))]"></div>
              
              {/* Main Image Container */}
              <motion.div 
                className="relative w-80 h-96 lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden border-2 border-[rgba(46,125,50,0.3)] bg-[linear-gradient(to_bottom_right,rgba(46,125,50,0.1),rgba(142,202,230,0.1))] backdrop-blur-sm mx-auto"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/half.jpeg" 
                  alt="Yutian Xia - About" 
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </motion.div>

              {/* Floating Skill Icons */}
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`absolute w-12 h-12 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                  style={{
                    top: `${20 + index * 20}%`,
                    left: index % 2 === 0 ? '-2rem' : 'auto',
                    right: index % 2 === 1 ? '-2rem' : 'auto'
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
                  <skill.icon className="w-6 h-6" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-300 font-medium">{stat.title}</p>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <motion.div
              className="prose prose-lg prose-invert max-w-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                Accomplished IT developer who holds Master of Software Engineering in The University of Melbourne and Bachelor of Computer Science in University of Arizona in designing, developing, and deploying scalable, highly available, and secure applications on the web technology stack with expertise in programming using Django and React.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mt-4">
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
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2E7D32] to-[#FFB703] text-white font-semibold rounded-full hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Let&apos;s Talk
                <div className="absolute inset-0 rounded-full bg-[linear-gradient(to_right,rgba(46,125,50,0.7),rgba(255,183,3,0.7))] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;