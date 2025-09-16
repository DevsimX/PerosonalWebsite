"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const HeaderSocials = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yutian-xia-b43b26234/',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/DevsimX',
      icon: Github,
      color: 'hover:text-gray-300'
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
      color: 'hover:text-cyan-400'
    },
    {
      name: 'Email',
      href: 'mailto:fdudevsim@gmail.com',
      icon: Mail,
      color: 'hover:text-red-400'
    }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target={social.href.startsWith('http') ? '_blank' : '_self'}
          rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
          className={`group relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 transition-all duration-300 ${social.color} hover:bg-white/10 hover:scale-110 hover:shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
        >
          <social.icon className="w-5 h-5" />
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {social.name}
          </div>
        </motion.a>
      ))}
    </div>
  )
}

export default HeaderSocials
