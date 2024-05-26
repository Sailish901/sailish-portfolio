import React from 'react';
import { HERO_CONTENT } from '../constants';
import profile from '../assets/p2.png'
import { motion } from "framer-motion"

const Hero = () => {
  const container=(delay)=>({
      hidden:{x:-100,opacity:0},
      visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay},
      },
  });
  return (
    <div  className='border-b-2 border-neutral-900 flex justify-between mt-[110px] w-full h-[500px]'>
      <div  className='flex justify-center flex-col w-[50%]'>
        <motion.h1 variants={container(0.5)} initial="hidden" animate="visible" className='text-white text-7xl pb-6 font-thin tracking-tighter'>Sailish Makkar</motion.h1>
        <motion.div variants={container(1)} initial="hidden" animate="visible" className='mt-8 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text text-4xl font-thin tracking-tighter'>
          Full Stack Developer
        </motion.div>
        <motion.p variants={container(1.2)} initial="hidden" animate="visible" className='text-neutral-400 mt-[50px]'>{HERO_CONTENT}</motion.p>
      </div>
      <motion.div  initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1.3}}  className='w-[30%] h-[80%] mr-1'>
        <img src={profile} className='bg-center bg-cover w-full h-full rounded-3xl' alt='' />
      </motion.div>
    </div>
  );
};

export default Hero;
