import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className='border-b-2 border-neutral-800 pb-8'>
      <h4 className='flex justify-center font-thin text-4xl md:text-5xl lg:text-6xl mb-12'>Experience</h4>
      <div className='w-full flex flex-wrap justify-center my-[30px] md:my-[50px]'>
        {EXPERIENCES.map((item, ind) => (
          <div key={ind} className='mb-12 w-full flex flex-col lg:flex-row items-center lg:items-start px-4 lg:px-0 gap-x-8'>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className='shrink-0 w-full lg:w-1/2 flex justify-center lg: text-center  lg:text-right mb-4 lg:mb-0'
            >
              <p className='text-neutral-400'>{item.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className='w-full lg:w-1/2 flex flex-col items-center  lg:items-start lg:pl-8'
            >
              <p className='font-semibold mb-2'>
                {item.role} - <span className='text-purple-400'>{item.company}</span>
              </p>
              <p className='text-neutral-400 text-center lg:text-left'>{item.description}</p>
              <div className='flex flex-wrap justify-center lg:justify-start mt-4'>
                {item.technologies.map((tech, ind) => (
                  <span
                    key={ind}
                    className='text-purple-500 font-medium rounded-md p-2 text-xs lg:text-sm mx-1 lg:mx-2 mt-2'
                  >
                    {tech}
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

export default Experience;
