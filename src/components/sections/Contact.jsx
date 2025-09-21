import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';
import { Send, Mail, MapPin, Phone, Loader2 } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

    // const [state, handleSubmit2] = useForm("xqadrozb");
  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold">Let's talk about your project</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you soon.
            </p>
            
            <div className="space-y-4 mt-8">
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
              >
                <div className="rounded-full bg-primary-100 dark:bg-primary-900/30 p-3 text-primary-600 dark:text-primary-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:sukhendumandal02@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
                    sukhendumandal02@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
              >
                <div className="rounded-full bg-primary-100 dark:bg-primary-900/30 p-3 text-primary-600 dark:text-primary-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Bhopal, MP, India
                  </p>
                </div>
              </motion.div>
              
              {/* <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
              >
                <div className="rounded-full bg-primary-100 dark:bg-primary-900/30 p-3 text-primary-600 dark:text-primary-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    +1 (555) 123-4567
                  </p>
                </div>
              </motion.div> */}
            </div>
            
            
          </motion.div>
          
          {/* Contact form */}
          <motion.div variants={itemVariants}>
            <div className="glass-card p-6 sm:p-8">

              <div className="mt-8 p-6 glass-card">
              <h4 className="font-medium mb-2">Current Availability</h4>
              <p className="text-gray-600 dark:text-gray-300">
                I'm currently open to Software Development roles (Onsite/Remote) and freelance projects. 
              </p>
            </div>


              {/* <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              
              {isSubmitted ? (
                <motion.div 
                  className="bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 rounded-md p-4 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-success-800 dark:text-success-400 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-300 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:outline-none transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-300 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:outline-none transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-300 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:outline-none transition-all duration-200 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full mt-2"
                    disabled={isSubmitting}
                    icon={isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )} */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;