import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects, projectCategories } from '../../data/projects';
import { ExternalLink, Github, Code } from 'lucide-react';
import Button from '../ui/Button';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from '@mui/material/Chip';
import { ul } from 'framer-motion/client';



const Projects = () => {

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const handleClose = () => {

    setSelectedProject(null);
    console.log(selectedProject)
  }

  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Filter projects based on current filter
  // const filteredProjects = filter === 'all' 
  //   ? projects 
  //   : filter === 'featured'
  //     ? projects.filter(project => project.featured)
  //     : filter === 'Hosted'
  //       ? projects.filter(project => project.liveUrl) // only projects with live/demo link
  //       : filter === 'Full Stack'
  //         ? projects.filter(project =>  project.type?.some(t => t.toLowerCase() === 'full stack'))
  //         : projects;
          // : filter === 'frontend'
          //   ? projects.filter(project => project.type?.toLowerCase() === 'frontend')
          //   : filter === 'mobile'
          //     ? projects.filter(project => project.type?.toLowerCase() === 'mobile')    
       // Add more filter logic here if needed


const filteredProjects = projects.filter(project => {
  switch (filter) {
    case 'all':
      return true;
    case 'featured':
      return project.featured;
    case 'Hosted':
      return !!project.liveUrl; // only projects with live/demo link
    case 'fullstack':
      return project.type?.some(t => t.toLowerCase() === 'fullstack'); // array check
    default:
      return true;
  }
});

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-light-200 dark:bg-dark-400">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        {/* Filter buttons */}
        <div className="flex justify-center mt-8 mb-12 space-x-2 overflow-x-auto pb-2">
          {projectCategories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.id
                  ? 'bg-primary-500 text-white dark:bg-primary-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layoutId={`project-${project.id}`}
                className="project-card group"
              >
                {/* Project image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <ExternalLink size={18} className="text-white" />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Github size={18} className="text-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Project info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mt-3 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="skill-badge text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="skill-badge text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="pt-2">
                    {/* <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      icon={<Code size={16} />}
                      onClick={() => window.open(project.liveUrl || project.githubUrl, '_blank')}
                    >
                      View Project
                    </Button> */}
                  </div>
                  
  <Button className='w-full' onClick={() => setSelectedProject(project)}>View Project  </Button>

    </div>
<Modal
  open={(selectedProject)}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className='flex  justify-center overflow-y-scroll relative'
>
  <Box  sx={style} className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative ">
    <button
                onClick={() => setSelectedProject(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              
          {selectedProject && (
            <>
           
    <Typography id="modal-modal-title" variant="h6" component="h2">
    {selectedProject.title}
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
     
             
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {selectedProject.year}
              </span>

              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-lg my-4"
                />
              )}


                {/* Content */}
              <div className="p-6 space-y-5">
                {/* Description */}
                <Typography className="text-gray-700 dark:text-gray-300">
                  
                  {selectedProject.description.map((line,desc)=>(
                    <ul>
                      <li  key={desc} className='flex items-start'>
<span className="text-primary-500 dark:text-primary-400 mr-2 inline">•</span>
<p className="mb-2">{line}</p>
                      </li>
                    </ul>
                  ))}
                </Typography>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      className="skill-badge !rounded-full !px-3 !py-1 !text-sm !bg-primary-50 !font-medium !text-primary-600  dark:!bg-primary-950   dark:!text-primary-400"
                 
                    />
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {selectedProject.liveUrl && (
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<ExternalLink size={18} />}
                      onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                      className='bg-gray-500 hover:bg-primary-600 text-white  rounded'
                    >
                   <span>
                    Live 
                    </span>  
                      < ExternalLink  className='ml-2 ' size={16}/>
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<Github size={18} />}
                      onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                      className='bg-primary-600 hover:bg-primary-400 text-white  rounded'
                    >
                      View in GitHub  <Github   className='ml-2 ' size={16}/>
                    </Button>
                  )}
                  </div>
              </div>
    </Typography>
     </>
        )}
  </Box>
</Modal>





              



              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;