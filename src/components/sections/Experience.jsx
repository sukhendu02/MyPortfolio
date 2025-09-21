import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../../data/experience';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short' 
    }).format(date);
  };

  return (
    <section id="experience" className="py-10">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-12 relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Timeline items */}
          {experience.map((job, index) => (
            <motion.div 
              key={job.id} 
              variants={itemVariants}
              className={`mb-12 relative ${
                index % 2 === 0 
                  ? 'sm:pr-8 sm:pl-0 sm:text-left sm:mr-auto sm:ml-0' 
                  : 'sm:pl-8 sm:pr-0 sm:text-left sm:ml-auto sm:mr-0'
              } sm:w-1/2 pl-10`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 ${
                index % 2 === 0 ? 'sm:right-0 sm:translate-x-1/2' : 'sm:left-0 sm:-translate-x-1/2'
              } left-0-translate-x-1/2 sm:translate-y-0 w-4 h-4 rounded-full ${
                job.isCurrent ? 'bg-primary-500 dark:bg-primary-400 animate-pulse' : 'bg-gray-400 dark:bg-gray-600'
              } border-4 border-light-100 dark:border-dark-500 z-10 `}></div>
              
              {/* Content card */}
              <motion.div
                className="glass-card p-6 relative"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Current job indicator */}
                {job.isCurrent && (
                  <div className="absolute top-4 right-4 flex items-center">
                    <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                    </span>
                    <span className="text-sm text-primary-500 dark:text-primary-400 font-medium">Current</span>
                  </div>
                )}
                
                {/* Job title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                
                {/* Company and location */}
                <div className="flex flex-col sm:flex-row sm:items-center mt-1 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-0 sm:space-x-6 text-sm sm:text-base">
                  <div className="font-medium">{job.company}</div>
                  <div className="hidden sm:block text-gray-400 dark:text-gray-600">•</div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1 text-gray-400 dark:text-gray-500" />
                    {job.location}
                  </div>
                </div>
                
                {/* Date range */}
                <div className="flex items-center mt-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={14} className="mr-1" />
                  <span>{formatDate(job.startDate)} — {formatDate(job.endDate)}</span>
                </div>
                
                {/* Job description */}
                <div className="mt-4">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-500 dark:text-primary-400 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies used */}
                <div className="mt-4 flex flex-wrap">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;