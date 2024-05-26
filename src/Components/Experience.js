import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from "framer-motion"
const Experience = () => {
  return (
    <>
    <div className='border-b-2 border-neutral-800 pb-4'>
      <h4 className='flex justify-center font-thin text-6xl'>Experience</h4>
      <div className='w-full flex flex-wrap justify-center my-[50px] '>
      {
        EXPERIENCES.map((item,ind)=>{
            return(
                <div key={ind} className='mb-8 lg:gap-x-[90px] flex w-full justify-center '>
                    <motion.div whileInView={{x:0,opacity:1}} animate={{x:-100,opacity:0}} transition={{delay:0.5,duration:1}} className='shrink-0 w-1/2 flex justify-center'>
                        <p className='text-neutral-400'>{item.year}</p>
                    </motion.div>
                    <motion.div whileInView={{x:0,opacity:1}} animate={{x:100,opacity:0}} transition={{delay:0.5,duration:1}} className=' border-purple-500 border- flex flex-wrap w-1/2'>
                        <p className='font-semibold mb-2'>
                            {item.role}-<span className='text-purple-400'>{item.company}</span>
                        </p>
                        <p className='text-neutral-400'>{item.description}</p>
                        {    
                            item.technologies.map((tech,ind)=>{
                                return(
                                <span key={ind} className='text-purple-500 font-medium rounded-md p-2 text-small mx-3 mt-2'>{tech}</span>
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
    </>
  )
}

export default Experience
