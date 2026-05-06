"use client";
import React from "react";
import { motion } from "framer-motion";
import { typo } from "@/lib/typography";
import { 
  Code2, 
  Database, 
  Cloud, 
  Zap, 
  CheckCircle,
  Star
} from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "from-[#2E7D32] to-[#8ECAE6]",
      bgColor: "bg-[rgba(46,125,50,0.1)]",
      borderColor: "border-[rgba(46,125,50,0.2)]",
      skills: [
        { name: "Next.js", type: "Framework", level: "Expert", icon: Star },
        { name: "React", type: "Library", level: "Expert", icon: Star },
        { name: "TypeScript", type: "Language", level: "Expert", icon: Star },
        { name: "JavaScript", type: "Language", level: "Expert", icon: Star },
        { name: "Tailwind", type: "Styling", level: "Expert", icon: Star },
        { name: "Framer", type: "Anim", level: "Advanced", icon: CheckCircle },
        { name: "CSS3 & SCSS", type: "Styling", level: "Advanced", icon: CheckCircle },
        { name: "HTML5", type: "Markup", level: "Advanced", icon: CheckCircle },
        { name: "ReactIcon", type: "Icons", level: "Advanced", icon: CheckCircle }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-[#FFB703] to-[#8ECAE6]",
      bgColor: "bg-[rgba(255,183,3,0.1)]",
      borderColor: "border-[rgba(255,183,3,0.2)]",
      skills: [
        { name: "Django", type: "Framework", level: "Expert", icon: Star },
        { name: "Python", type: "Language", level: "Expert", icon: Star },
        { name: "PostgreSQL", type: "DB", level: "Expert", icon: Star },
        { name: "REST APIs", type: "API", level: "Expert", icon: Star },
        { name: "JWT Auth", type: "Auth", level: "Advanced", icon: CheckCircle },
        { name: "Stripe", type: "Pay", level: "Advanced", icon: CheckCircle },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Cloud,
      color: "from-[#2E7D32] to-[#FFB703]",
      bgColor: "bg-[rgba(46,125,50,0.1)]",
      borderColor: "border-[rgba(46,125,50,0.2)]",
      skills: [
        { name: "Git/GitHub", type: "VCS", level: "Expert", icon: Star },
        { name: "Docker", type: "Container", level: "Expert", icon: Star },
        { name: "Cursor", type: "Tool", level: "Expert", icon: Star },
        { name: "AWS EC2", type: "Cloud", level: "Advanced", icon: CheckCircle },
        { name: "AWS S3", type: "Cloud", level: "Advanced", icon: CheckCircle },
        { name: "AWS RDS", type: "Cloud", level: "Advanced", icon: CheckCircle },
        { name: "Vercel", type: "Deploy", level: "Advanced", icon: CheckCircle },
        { name: "Render", type: "Deploy", level: "Advanced", icon: CheckCircle },
        { name: "CI/CD", type: "CI", level: "Advanced", icon: CheckCircle },
        { name: "GitHub CI", type: "CI", level: "Advanced", icon: CheckCircle },
        { name: "Linux/Bash", type: "OS", level: "Advanced", icon: CheckCircle }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[rgba(46,125,50,0.7)] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[rgba(255,183,3,0.7)] rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[rgba(142,202,230,0.7)] rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span
            className={`${typo.eyebrow} bg-[rgba(46,125,50,0.2)] text-[#8ECAE6] border-[rgba(46,125,50,0.3)]`}
          >
            What Skills I Have
          </span>
          <h2
            className={`${typo.sectionHeading} bg-gradient-to-r from-[#2E7D32] via-[#FFB703] to-[#8ECAE6]`}
          >
            My Skills
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              className={`relative p-4 sm:p-6 lg:p-8 ${category.bgColor} backdrop-blur-sm border ${category.borderColor} rounded-2xl sm:rounded-3xl`}
              variants={cardVariants}
              transition={{ duration: 0.2, ease: "easeOut" }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              {/* Header */}
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <motion.div 
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${category.color} rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 aspect-square`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <category.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white flex-shrink-0" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <motion.div 
                className="space-y-2 sm:space-y-3 lg:space-y-4"
                variants={containerVariants}
              >
                {(() => {
                  const levelOrder: Record<string, number> = { Expert: 0, Advanced: 1, Intermediate: 2 };
                  const sortedSkills = [...category.skills].sort((a, b) => {
                    const byLevel = (levelOrder[a.level] ?? 99) - (levelOrder[b.level] ?? 99);
                    return byLevel !== 0 ? byLevel : String(a.name).localeCompare(String(b.name));
                  });
                  return sortedSkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-row items-center gap-1.5 sm:gap-2 lg:flex-col lg:items-stretch lg:gap-2 2xl:flex-row 2xl:items-center 2xl:gap-3 p-2.5 sm:p-3 lg:p-4 bg-white/5 rounded-lg sm:rounded-xl"
                      variants={skillVariants}
                      whileHover={{ 
                        x: 5,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        scale: 1.02
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0 lg:w-full 2xl:flex-1 2xl:min-w-0">
                        <motion.div 
                          className={`w-7 h-7 sm:w-8 sm:h-8 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-gradient-to-r ${category.color} rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 aspect-square`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <skill.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white flex-shrink-0" />
                        </motion.div>
                        <div className="flex items-center gap-2 min-w-0 flex-wrap">
                          <span className="text-white text-base font-semibold leading-snug">
                            {skill.name}
                          </span>
                          <span className="px-2.5 py-1 rounded-full text-sm font-medium tracking-wide bg-white/10 text-white/70 border border-white/10">
                            {skill.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-end flex-shrink-0 ml-1 sm:ml-2 lg:ml-0 lg:w-full lg:justify-center 2xl:w-auto 2xl:justify-end 2xl:ml-2 gap-2">
                        <span className={`text-sm font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap w-20 sm:w-24 lg:w-full text-center 2xl:w-auto 2xl:text-left ${
                          skill.level === 'Expert'
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                          : skill.level === 'Advanced'
                            ? 'bg-gradient-to-r from-yellow-400 to-teal-500 text-white'
                            : 'bg-gradient-to-r from-orange-300 to-cyan-500 text-white'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  ));
                })()}
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                className={`absolute top-2 sm:top-4 right-2 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${category.color} rounded-full opacity-10`}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.2 }}
              ></motion.div>
              <motion.div 
                className={`absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${category.color} rounded-full opacity-5`}
                whileHover={{ opacity: 0.15 }}
                transition={{ duration: 0.2 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-8 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p
            className={`${typo.sectionLead} mb-6 sm:mb-8 px-4`}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            With expertise spanning across frontend, backend, and DevOps technologies, I bring a comprehensive approach to building modern, scalable applications that deliver exceptional user experiences.
          </motion.p>
          
          <motion.a
            href="#contact"
            className={`relative inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#2E7D32] to-[#FFB703] text-white rounded-full shadow-lg cursor-pointer ${typo.btnCta}`}
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
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            </motion.div>
            <span className="hidden sm:inline">Let&apos;s Build Something Amazing</span>
            <span className="sm:hidden">Let&apos;s Build</span>
            <motion.div 
              className="absolute inset-0 rounded-full bg-[linear-gradient(to_right,rgba(46,125,50,0.7),rgba(255,183,3,0.7))] opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.2 }}
            ></motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;