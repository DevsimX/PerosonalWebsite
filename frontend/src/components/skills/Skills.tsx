"use client";
import React from "react";
import { motion } from "framer-motion";
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
        { name: "Next.js", level: "Expert", icon: Star },
        { name: "React", level: "Expert", icon: Star },
        { name: "TypeScript", level: "Expert", icon: Star },
        { name: "JavaScript (ES6+)", level: "Expert", icon: Star },
        { name: "Tailwind CSS", level: "Advanced", icon: CheckCircle },
        { name: "CSS3 & SCSS", level: "Advanced", icon: CheckCircle },
        { name: "HTML5", level: "Advanced", icon: CheckCircle },
        { name: "Redux & Zustand", level: "Advanced", icon: CheckCircle },
        { name: "Vue.js", level: "Intermediate", icon: CheckCircle },
        { name: "Angular", level: "Intermediate", icon: CheckCircle },
        { name: "Webpack & Vite", level: "Advanced", icon: CheckCircle },
        { name: "Jest & Testing Library", level: "Advanced", icon: CheckCircle }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-[#FFB703] to-[#8ECAE6]",
      bgColor: "bg-[rgba(255,183,3,0.1)]",
      borderColor: "border-[rgba(255,183,3,0.2)]",
      skills: [
        { name: "Django & DRF", level: "Expert", icon: Star },
        { name: "Python", level: "Expert", icon: Star },
        { name: "FastAPI", level: "Advanced", icon: CheckCircle },
        { name: "Node.js & Express", level: "Advanced", icon: CheckCircle },
        { name: "PostgreSQL", level: "Advanced", icon: CheckCircle },
        { name: "MongoDB", level: "Advanced", icon: CheckCircle },
        { name: "Redis", level: "Advanced", icon: CheckCircle },
        { name: "MySQL", level: "Advanced", icon: CheckCircle },
        { name: "GraphQL", level: "Intermediate", icon: CheckCircle },
        { name: "RESTful APIs", level: "Expert", icon: Star },
        { name: "Microservices", level: "Advanced", icon: CheckCircle },
        { name: "WebSocket", level: "Advanced", icon: CheckCircle }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Cloud,
      color: "from-[#2E7D32] to-[#FFB703]",
      bgColor: "bg-[rgba(46,125,50,0.1)]",
      borderColor: "border-[rgba(46,125,50,0.2)]",
      skills: [
        { name: "Git & GitHub", level: "Expert", icon: Star },
        { name: "CI/CD Pipelines", level: "Expert", icon: Star },
        { name: "Docker", level: "Advanced", icon: CheckCircle },
        { name: "Kubernetes", level: "Advanced", icon: CheckCircle },
        { name: "AWS (EC2, S3, RDS)", level: "Advanced", icon: CheckCircle },
        { name: "Azure DevOps", level: "Advanced", icon: CheckCircle },
        { name: "GitHub Actions", level: "Advanced", icon: CheckCircle },
        { name: "Linux & Bash", level: "Advanced", icon: CheckCircle },
        { name: "Nginx & Apache", level: "Advanced", icon: CheckCircle },
        { name: "Monitoring & Logging", level: "Advanced", icon: CheckCircle },
        { name: "Terraform", level: "Intermediate", icon: CheckCircle },
        { name: "Ansible", level: "Intermediate", icon: CheckCircle }
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
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[rgba(46,125,50,0.7)] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[rgba(255,183,3,0.7)] rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[rgba(142,202,230,0.7)] rounded-full blur-3xl animate-float"></div>
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
            What Skills I Have
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#2E7D32] via-[#FFB703] to-[#8ECAE6] bg-clip-text text-transparent mb-6">
            My Skills
          </h2>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              className={`group relative p-8 ${category.bgColor} backdrop-blur-sm border ${category.borderColor} rounded-3xl hover:bg-white/5 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -10 }}
            >
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#2E7D32] group-hover:to-[#FFB703] group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <motion.div 
                className="space-y-4"
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
                      className="group/skill flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                      variants={skillVariants}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover/skill:scale-110 transition-transform duration-300`}>
                          <skill.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium group-hover/skill:text-transparent group-hover/skill:bg-gradient-to-r group-hover/skill:from-[#2E7D32] group-hover/skill:to-[#FFB703] group-hover/skill:bg-clip-text transition-all duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
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
              <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${category.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              <div className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r ${category.color} rounded-full opacity-5 group-hover:opacity-15 transition-opacity duration-300`}></div>
            </motion.div>
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
          <motion.p 
            className="text-xl text-[#E2E8F0] mb-8 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            With expertise spanning across frontend, backend, and DevOps technologies, I bring a comprehensive approach to building modern, scalable applications that deliver exceptional user experiences.
          </motion.p>
          
          <motion.a
            href="#contact"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2E7D32] to-[#FFB703] text-white font-semibold rounded-full hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Let&apos;s Build Something Amazing
            <div className="absolute inset-0 rounded-full bg-[linear-gradient(to_right,rgba(46,125,50,0.7),rgba(255,183,3,0.7))] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;