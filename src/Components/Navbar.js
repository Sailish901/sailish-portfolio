import React from 'react'
import logo from '../assets/name_logo.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion"
const Navbar = () => {
  return (
    <div className='flex justify-between p-8 px-4 items-center'>
       <motion.div whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}  className='flex flex-shrink-0 w-[80px] h-[80px]'>
            <img src={logo} className='object-cover mix-blend-screen border-neutral-500 border-1 rounded-full' alt="initials_logo" />
       </motion.div>
       <div className='flex gap-x-6 mr-6'>
        <a href="https://www.linkedin.com/in/sailishmakkar/">
         <FaLinkedin className='text-white text-3xl pb-1 hover:border-b-2 cursor-pointer border-purple-200'/>
         </a>
         <a href="https://github.com/Sailish901">
         <FaGithub className='text-white text-3xl pb-1 hover:border-b-2 cursor-pointer border-purple-200'/>
         </a>
         <a href="https://leetcode.com/u/Gogeta11/">
          <SiLeetcode className='text-white text-3xl pb-1 hover:border-b-2 cursor-pointer border-purple-200'/>
          </a>
         <MdEmail className='text-white text-3xl pb-1 hover:border-b-2 cursor-pointer border-purple-200'/>
       </div>
    </div>
  )
}

export default Navbar
