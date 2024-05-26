import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='border-neutral-900 border-b-2 mb-8 pb-8'>
      <h2 className='text-4xl md:text-5xl lg:text-6xl font-thin flex justify-center mt-8 mb-12'>Projects</h2>
      <div className='mt-8 md:mt-[90px]'>
        {PROJECTS.map((item, ind) => (
          <div key={ind} className='flex flex-wrap justify-center w-full mb-12'>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className='w-full lg:w-1/4 flex justify-center lg:justify-end mb-4 lg:mb-0'
            >
              <img className='h-[80px] w-[80px] object-contain rounded' src={item.image} alt={item.title} />
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className='w-full lg:w-2/4 flex flex-col items-center lg:items-start lg:pl-8'
            >
              <h2 className='mb-2 font-semibold text-center lg:text-left'>{item.title}</h2>
              <p className='text-neutral-400 text-center lg:text-left'>{item.description}</p>
              <div className='flex flex-wrap justify-center lg:justify-start mt-4'>
                {item.technologies.map((skill, ind) => (
                  <span
                    key={ind}
                    className='mr-2 mb-2 font-semibold text-purple-400 rounded'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
