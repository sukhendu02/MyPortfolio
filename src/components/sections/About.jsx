import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills, skillCategories } from '../../data/skills';
import { Code, Palette, Database, Wrench,Bot,SquareCode, CarTaxiFront ,ShieldCheck  } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Get appropriate icon for skill category
  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'frontend':
        return <Code className="w-5 h-5" />;
      case 'design':
        return <Palette className="w-5 h-5" />;
      case 'backend':
        return <Database className="w-5 h-5" />;
      case 'ai':
        return <Bot  className="w-5 h-5" />;
      case 'Programming Language':
        return <SquareCode  className="w-5 h-5" />;
      case 'other':
        return <Wrench className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-light-200 dark:bg-dark-400">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* About Me */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="section-title">About Me</h2>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300">
              
              I am a results-driven Software Engineer with hands-on experience in full-stack web development, cloud solutions, and automation.
             
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I enjoy transforming ideas into functional products — from simple single-page apps to full business platforms.
                Beyond coding, I value clear communication, collaboration, and reliability — qualities I believe are just as important as technical skills in delivering successful projects.

              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Currenly I am working in <span className='text-blue-400'> Cognizant Technology Solutions</span>, also I am open to new opportunities, freelancing and collaborations. Feel free to <a href="#contact" className="text-primary-500 dark:text-primary-400 font-medium hover:underline">reach out</a> if you'd like to connect!
              </p>
            </div>
            
            <div className="space-y-4 pt-6">
              <h3 className="text-2xl font-semibold">What I Do</h3>
              
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="mt-1 mr-3 flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center text-white">
                    <Code size={14} />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Frontend Development</span> — Building responsive, performant web applications using modern JavaScript frameworks.
                  </p>
                </motion.li>
                
              
                
                <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="mt-1 mr-3 flex-shrink-0 h-6 w-6 rounded-full bg-accent-500 dark:bg-accent-400 flex items-center justify-center text-white">
                    <Database size={14} />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Full Stack Development</span> — Working with backend technologies to build complete, end-to-end solutions.
                  </p>
                </motion.li>
                  <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="mt-1 mr-3 flex-shrink-0 h-6 w-6 rounded-full bg-secondary-500 dark:bg-secondary-400 flex items-center justify-center text-white">
                    <ShieldCheck  size={14} />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">
                      Testing & Quality Assurance</span> — Writing automated test scripts, validating APIs, and ensuring software reliability through functional and performance testing.
                  </p>
                </motion.li>
                  <motion.li 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="mt-1 mr-3 flex-shrink-0 h-6 w-6 rounded-full bg-accent-500 dark:bg-accent-400 flex items-center justify-center text-white">
                    <Bot  size={14} />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">
                      AI-Enhanced Development</span> — Leveraging tools like GitHub Copilot to speed up development while maintaining top-class code quality.
                  </p>
                </motion.li>
              </ul>
            </div>
          </motion.div>
          
          {/* Skills */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="section-title">Skills & Expertise</h2>
            
            <div className="space-y-8">
              {skillCategories.map((category) => {
                const categorySkills = skills.filter(skill => skill.category === category.id);
                return (
                  <motion.div key={category.id} variants={itemVariants}>
                    <div className="flex items-center mb-3">
                      <div className="mr-2 text-primary-500 dark:text-primary-400">
                       
                        {getCategoryIcon(category.id)}
                      </div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {categorySkills.map((skill) => (
                        <motion.div
                          key={skill.id}
                          className="glass-card p-3"
                          whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                        >
                          <p className="font-medium text-gray-900 dark:text-white">{skill.name}</p>
                          <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              className="bg-primary-500 dark:bg-primary-400 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${(skill.level / 5) * 100}%` }}
                              transition={{ duration: 0.8, delay: 0.3 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;