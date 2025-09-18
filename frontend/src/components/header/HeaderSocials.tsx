"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeaderSocials = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yutian-xia-b43b26234/',
      icon: FaLinkedin,
      color: 'hover:text-[#FFB703]'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/DevsimX',
      icon: FaGithub,
      color: 'hover:text-gray-300'
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
          className={`group relative p-3 rounded-full bg-[rgba(15,23,42,0.5)] backdrop-blur-md border border-[rgba(148,163,184,0.3)] text-[#E2E8F0] transition-all duration-300 ${social.color} hover:bg-[rgba(15,23,42,0.65)] hover:scale-110 hover:shadow-lg`}
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
