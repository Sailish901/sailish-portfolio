import React from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion"
const Contact = () => {
  return (
    <motion.div   whileInView={{ opacity: 1, scale: 1 }}
    animate={{ opacity: 0, scale: 0.5 }}
    transition={{ duration: 0.5 }} className='border-neutral-900 border-b pb-8'>
        <h2 className='text-4xl text-center'>Get in Touch</h2>
        <motion.div   whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className='text-center tracking-tighter'>
            <p className='my-4 '>{CONTACT.phoneNo}</p>
            <p className='my-4 text-neutral-400'>{CONTACT.email}</p>

        </motion.div>
      
    </motion.div>
  )
}

export default Contact
