import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-light-200 dark:bg-dark-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand/Logo Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Sukhendu Mandal</h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-xs">
              Passionate Software Developer & Full Stack Developer crafting seamless web experiences. Let's build something amazing together!  
            </p>
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="https://github.com/sukhendu02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
                whileHover={{ y: -3 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sukhendumandal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
                whileHover={{ y: -3 }}
              >
                <Linkedin size={20} />
              </motion.a>
            
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                Home
              </a>
              <a href="#about" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                About
              </a>
              <a href="#experience" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                Experience
              </a>
              <a href="#projects" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                Contact
              </a>
            </nav>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-500 dark:text-primary-400" />
                <a href="mailto:sukhendumandal02@gmail.com" className="text-gray-600 dark:text-gray-400 hover:underline">
                  sukhendumandal02@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary-500 dark:text-primary-400" />
                <span className="text-gray-600 dark:text-gray-400">Bhopal, MP, India</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Sukhendu Mandal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;