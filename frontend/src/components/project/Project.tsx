"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Code2, 
  Smartphone, 
  Globe, 
  Gamepad2, 
  Database,
  Palette,
  Zap,
  Star,
  ArrowRight
} from "lucide-react";
import { FaGithub } from 'react-icons/fa';

const portfolioData = [
  {
    id: 1,
    title: "Take out mobile app (Mobile size)",
    description: "A responsive mobile-first food delivery application with real-time ordering and payment integration.",
    website: "https://github.com/jiaxukang/Take-out-app-optimal",
    demo: "http://takeout.codekang.live/takeout/index.html",
    jug: true,
    category: "Mobile App",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    technologies: ["React", "JavaScript", "CSS3", "Mobile UI"]
  },
  {
    id: 2,
    title: "Soon Metaverse website",
    description: "An immersive metaverse platform showcasing virtual experiences and interactive 3D environments.",
    website: "",
    demo: "https://soonmetaverse.com/",
    category: "Web Platform",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
    technologies: ["Web3", "3D Graphics", "Interactive UI", "Metaverse"]
  },
  {
    id: 6,
    title: "Defence Tower Game",
    description: "A strategic tower defense game with dynamic gameplay mechanics and engaging visual effects.",
    website: "https://github.com/jiaxukang/DefenceTower",
    demo: "https://www.youtube.com/watch?v=OLFFdOKLEz0",
    jug: true,
    category: "Game Development",
    icon: Gamepad2,
    color: "from-green-500 to-emerald-500",
    technologies: ["Game Engine", "C#", "Unity", "Game Design"]
  },
  {
    id: 4,
    title: "Tripal Android App",
    description: "A comprehensive travel companion app with itinerary planning and social features.",
    website: "",
    demo: "https://www.youtube.com/watch?v=lRNR12sU9JU",
    category: "Mobile App",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    technologies: ["Android", "Java", "Travel API", "Social Features"]
  },
  {
    id: 5,
    title: "Linked Game",
    description: "An innovative puzzle game with unique linking mechanics and challenging levels.",
    website: "https://github.com/jiaxukang/LinkedGame",
    demo: "https://jiaxukang.github.io/LinkedGame/play.html",
    jug: true,
    category: "Web Game",
    icon: Gamepad2,
    color: "from-indigo-500 to-purple-500",
    technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic"]
  },
  {
    id: 3,
    title: "Library Management System",
    description: "A comprehensive library management solution with user authentication and inventory tracking.",
    website: "https://github.com",
    demo: "https://www.youtube.com/watch?v=UEuPcORPjZM",
    category: "Web Application",
    icon: Database,
    color: "from-teal-500 to-cyan-500",
    technologies: ["Django", "Python", "PostgreSQL", "Admin Panel"]
  },
  {
    id: 7,
    title: "P2P Download Application",
    description: "A peer-to-peer file sharing application with secure transfer protocols and user management.",
    website: "https://github.com/jiaxukang/P2PFileTransfer",
    demo: "https://github.com",
    jug: true,
    demos: true,
    category: "Desktop Application",
    icon: Code2,
    color: "from-yellow-500 to-orange-500",
    technologies: ["P2P Protocol", "Network Programming", "File Transfer", "Security"]
  },
  {
    id: 8,
    title: "White Board Application",
    description: "A collaborative digital whiteboard with real-time drawing and team collaboration features.",
    website: "https://github.com/jiaxukang/WhiteBoard",
    demo: "https://github.com",
    jug: true,
    demos: true,
    category: "Collaborative Tool",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    technologies: ["Real-time", "Canvas API", "WebSocket", "Collaboration"]
  }
];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(portfolioData.map(item => item.category)))];

  const filteredProjects = selectedCategory === "All" 
    ? portfolioData 
    : portfolioData.filter(project => project.category === selectedCategory);

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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl will-change-transform"
                variants={itemVariants}
                transition={{ duration: 0.6 }}
              >
                {/* Project Image/Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-gray-400 text-sm font-medium">Project Preview</span>
                    </div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="flex space-x-4">
                      {project.jug && (
                        <motion.a
                          href={project.website}
                          target="_blank"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300 pointer-events-auto"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub className="w-5 h-5" />
                        </motion.a>
                      )}
                      {!project.demos && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300 pointer-events-auto"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded-full`}>
                      {project.category}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

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

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.jug && (
                      <motion.a
                        href={project.website}
                        target="_blank"
                        className={`flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-l ${project.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 group/btn`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                        <span className="text-sm font-medium">Code</span>
                      </motion.a>
                    )}
                    {!project.demos && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                    className={`flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 group/btn`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                        <span className="text-sm font-medium">Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${project.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r ${project.color} rounded-full opacity-5 group-hover:opacity-15 transition-opacity duration-300`}></div>
              </motion.article>
            ))}
          </AnimatePresence>
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
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2E7D32] to-[#FFB703] text-white font-semibold rounded-full hover:from-[#256f29] hover:to-[#e6a902] transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Let&apos;s Create Something Together
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8ECAE6] to-[#2E7D32] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;