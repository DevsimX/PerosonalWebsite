"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  ExternalLink, 
  Code2, 
  Globe, 
  Zap,
  Star,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { FaGithub } from 'react-icons/fa';

const portfolioData = [
  {
    id: 1,
    title: "OnlineShoppingSystem",
    description: "Full-stack e-commerce app with Next.js frontend and Django + DRF backend. Features JWT authentication, product discovery with search and filtering, shopping cart with dual storage, Stripe payment integration, and order management.",
    website: "https://github.com/DevsimX/OnlineShoppingSystem",
    demo: "https://online-shopping-system-hv2v.vercel.app",
    jug: true,
    category: "Full-Stack Application",
    icon: Code2,
    color: "from-indigo-500 to-purple-500",
    technologies: ["Next.js", "React", "TypeScript", "Django", "Django REST Framework", "PostgreSQL", "Stripe", "Docker", "Tailwind CSS"],
    image: "/poplocal.png"
  },
  {
    id: 2,
    title: "Personal Website",
    description: "A modern, animated portfolio built with Next.js, Tailwind CSS, and Framer Motion. Features smooth scroll interactions, themed components with unified design tokens, projects grid with category filters, and contact form with EmailJS integration.",
    website: "https://github.com/DevsimX/PerosonalWebsite",
    demo: "https://perosonal-website-5d42.vercel.app",
    jug: true,
    category: "Portfolio",
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "react-icons", "EmailJS"],
    image: "/personal_website.png"
  }
];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());
  const categories = ["All", ...Array.from(new Set(portfolioData.map(item => item.category)))];

  const filteredProjects = selectedCategory === "All" 
    ? portfolioData 
    : portfolioData.filter(project => project.category === selectedCategory);

  const toggleExpand = (projectId: number) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const isExpanded = (projectId: number) => expandedProjects.has(projectId);
  const DESCRIPTION_LIMIT = 120;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <section id="project" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      {/* Background handled globally; remove local blobs to avoid seams */}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-[rgba(46,125,50,0.2)] text-[#8ECAE6] rounded-full text-sm font-medium mb-4 border border-[rgba(46,125,50,0.3)]">
            My Recent Work
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#8ECAE6] via-[#FFB703] to-[#2E7D32] bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of projects that showcase my skills in full-stack development, 
            mobile applications, and innovative solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#2E7D32] to-[#FFB703] text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          key={selectedCategory}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden flex flex-col"
              variants={itemVariants}
              transition={{ duration: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              style={{ transition: "background-color 0.2s ease-out, box-shadow 0.2s ease-out" }}
            >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <motion.div
                      className="relative w-full h-full"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                  ) : (
                    <div className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <project.icon className="w-8 h-8 text-white" />
                          </div>
                          <span className="text-gray-400 text-sm font-medium">Project Preview</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex space-x-4">
                      {project.jug && (
                        <motion.a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white pointer-events-auto"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaGithub className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white pointer-events-auto"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded-full`}>
                      {project.category}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <div className="mb-4">
                    <p 
                      className={`text-gray-300 text-sm leading-relaxed ${
                        !isExpanded(project.id) ? 'line-clamp-3' : ''
                      }`}
                    >
                      {project.description}
                    </p>
                    {project.description.length > DESCRIPTION_LIMIT && (
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="mt-2 text-[#8ECAE6] hover:text-[#FFB703] text-xs font-medium flex items-center gap-1 transition-colors duration-200"
                      >
                        {isExpanded(project.id) ? (
                          <>
                            <span>Read less</span>
                            <ChevronUp className="w-3 h-3" />
                          </>
                        ) : (
                          <>
                            <span>Read more</span>
                            <ChevronDown className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons - Pushed to bottom */}
                  <div className="flex space-x-3 mt-auto">
                    {project.jug && (
                      <motion.a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-l ${project.color} text-white rounded-xl`}
                        whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaGithub className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Code</span>
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-xl`}
                        whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div 
                  className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${project.color} rounded-full opacity-10`}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
                <motion.div 
                  className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r ${project.color} rounded-full opacity-5`}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
              </motion.article>
            ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2E7D32] to-[#FFB703] text-white font-semibold rounded-full shadow-lg cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-5 h-5 mr-2" />
            </motion.div>
            Let&apos;s Create Something Together
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.div>
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8ECAE6] to-[#2E7D32] opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.2 }}
            ></motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;