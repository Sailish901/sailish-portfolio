import React from 'react';
import photo from '../assets/p2.png';
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className='border-b-2 border-neutral-900  text-white py-12'>
      <div className='flex justify-center items-center font-thin tracking-tighter mb-6'>
        <h1 className='text-6xl'>About
          <span> Me</span>
        </h1>
      </div>
      <div className='flex mx-6'>
        <div className='w-1/2 h-[400px] p-6'>
          <motion.div whileInView={{x:0,opacity:1}} animate={{x:-100,opacity:0}} transition={{delay:0.5,duration:1}} className='flex justify-center items-center h-full mix-blend-screen'>
            <img src={photo} className='h-full rounded-2xl' alt="Profile" />
          </motion.div>
        </div>
        <motion.div whileInView={{x:0,opacity:1}} animate={{x:100,opacity:0}} transition={{delay:0.5,duration:1.3}} className='w-1/2 p-6'>
          <p className='py-8 text-neutral-400'>As an enthusiastic and dedicated fresher, I bring a wealth of coding expertise to the table. With a proven track record of solving over 600 coding questions on platforms like LeetCode, my proficiency spans languages such as C++, Java, and frameworks like React and Tailwind for frontend development. In the realm of backend, I am well-versed in Node.js and Express.js, enabling me to contribute effectively to diverse projects with precision and innovation</p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
