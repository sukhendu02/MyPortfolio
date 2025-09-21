import React, { useState, useEffect } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll to change header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a nav link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-light-100/80 dark:bg-dark-500/80 backdrop-blur-md shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Sukhendu Mandal
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <motion.a
                key={item.name}
                href={item.href}
                className="font-medium hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                whileHover={{ y: -3 }}
                onClick={handleNavClick}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex space-x-3">
              <motion.a 
                href="https://github.com/sukhendu02" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-dark-900 dark:text-light-100 hover:text-primary-500 dark:hover:text-primary-400"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/sukhendumandal" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-dark-900 dark:text-light-100 hover:text-primary-500 dark:hover:text-primary-400"
              >
                <Linkedin size={20} />
              </motion.a>
              {/* <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-dark-900 dark:text-light-100 hover:text-primary-500 dark:hover:text-primary-400"
              >
                <Twitter size={20} />
              </motion.a> */}
            </div>
            
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-light-100/95 dark:bg-dark-500/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block py-2 font-medium hover:text-primary-500 dark:hover:text-primary-400"
                  onClick={handleNavClick}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="flex space-x-6 py-2">
                <a href="https://github.com/sukhendu02" target="_blank" rel="noopener noreferrer" className="text-dark-900 dark:text-light-100 hover:text-primary-500 dark:hover:text-primary-400">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/sukhendumandal" target="_blank" rel="noopener noreferrer" className="text-dark-900 dark:text-light-100 hover:text-primary-500 dark:hover:text-primary-400">
                  <Linkedin size={20} />
                </a>
                {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark-900 dark:text-light-100 hover:text-primary-500 dark:hover:text-primary-400">
                  <Twitter size={20} />
                </a> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;