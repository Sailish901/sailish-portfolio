import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className='border-neutral-900 border-b-2 mb-4 pb-4'>
      <h2 className='text-6xl font-thin flex justify-center mt-4'>Projects</h2>
      <div className='mt-[90px]'>
      {
        PROJECTS.map((item,ind)=>{
          return (
            <div className='flex flex-wrap lg:justify-center w-full mb-8' >
              <motion.div whileInView={{x:0,opacity:1}} animate={{x:-100,opacity:0}} transition={{delay:0.5,duration:1}} className=' w-full lg:w-1/4 flex justify-center'>
                <img className='h-[80px] w-[80px] object-contain rounded' src={item.image} alt={item.title} />
              </motion.div>
              <motion.div whileInView={{x:0,opacity:1}} animate={{x:100,opacity:0}} transition={{delay:0.5,duration:1}} className=' w-full  lg:w-2/4 '>
                <h2 className='mb-2 font-semibold'>{item.title}</h2>
                <p className='text-neutral-400'>{item.description}</p>
                {
                  item.technologies.map((skill,ind)=>{
                    return(
                      <span className='mr-2 font-semibold text-purple-400 rounded'>{skill}</span>
                    )
                  })
                }
              </motion.div>

            </div>
          )
        })
      }
      </div>
      
    </div>
  )
}

export default Projects
