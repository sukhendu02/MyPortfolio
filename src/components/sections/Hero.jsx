import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowDown, Github, Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  // Particle animation effect
  useEffect(() => {
    if (!containerRef.current) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.className = 'absolute inset-0 w-full h-full -z-10';
    containerRef.current.appendChild(canvas);

    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    const particles = [];
    const particleCount = Math.min(width, height) / 10;
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.5,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1,
        color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 255)}, 0.5)`
      });
    }
    
    // Animate particles
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;
      }
      
      requestAnimationFrame(animate);
    };
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', handleResize);
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && containerRef.current.contains(canvas)) {
        containerRef.current.removeChild(canvas);
      }
    };
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          className="flex flex-col space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2">
            <motion.p
              className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm Sukhendu
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span>Softare Developer & </span>
              <span className="gradient-text">Full Stack Developer</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
       I build scalable and elegant web apps that solve real-world problems.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              variant="primary"
              size="lg"
              icon={<Mail />}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              icon={<Github />}
              onClick={() => window.open('https://github.com/sukhendu02', '_blank')}
            >
              View GitHub
            </Button>
          </motion.div>

          <motion.div
            className="flex space-x-5 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="https://github.com/sukhendu02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sukhendumandal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sukhendumandal02@gmail.com"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Hero image or interactive element */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r w-2/3 from-primary-500 to-secondary-500 opacity-75 blur-xl rounded-full"></div>
            <div className="relative w-2/3 justify-center aspect-square rounded-full overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
              <img
                src="https://i.ibb.co/RTP3fNFy/Whats-App-Image-2025-07-06-at-16-38-34-cd16344d.jpg"
                alt="Sukhendu Mandal"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#about" className="flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;