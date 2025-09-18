"use client";
import { motion } from 'framer-motion';
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Project from '../components/project/Project'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <motion.main 
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Global Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0F172A] via-[#334155] to-[#0F172A] -z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgba(46,125,50,0.7)] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgba(255,183,3,0.7)] rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-[rgba(142,202,230,0.7)] rounded-full blur-3xl animate-float"></div>
      </div>

      <Header />
      <Nav />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </motion.main>
  )
}