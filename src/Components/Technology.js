import React from 'react';
import { FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { motion } from "framer-motion";

const Technology = () => {
    const icons = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    });

    return (
        <div className='my-8 border-b-2 border-neutral-900'>
            <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className='flex justify-center items-center text-5xl md:text-6xl lg:text-7xl font-thin tracking-tighter text-white'
            >
                Tech Stack
            </motion.h1>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className='my-8 md:my-12 lg:my-[80px] flex flex-wrap justify-center items-center gap-4'
            >
                <motion.div variants={icons(2)} initial="initial" animate="animate" className='rounded-2xl border-2 border-neutral-800 p-4'>
                    <FaReact style={{ color: 'rgb(0, 255, 255)', backgroundColor: 'rgb(0, 0, 0)' }} className='text-4xl'></FaReact>
                </motion.div>
                <motion.div variants={icons(3)} initial="initial" animate="animate" className='rounded-2xl border-2 border-neutral-800 p-4'>
                    <FaNodeJs style={{ color: 'green', backgroundColor: 'rgba(0,0,0)' }} className='text-4xl'></FaNodeJs>
                </motion.div>
                <motion.div variants={icons(4)} initial="initial" animate="animate" className='rounded-2xl border-2 border-neutral-800 p-4'>
                    <IoLogoJavascript style={{ color: 'yellow', backgroundColor: 'rgba(0,0,0)' }} className='text-4xl'></IoLogoJavascript>
                </motion.div>
                <motion.div variants={icons(5)} initial="initial" animate="animate" className='rounded-2xl border-2 border-neutral-800 p-4'>
                    <TbBrandCpp style={{ color: 'yellow', backgroundColor: 'rgba(0,0,0)' }} className='text-4xl'></TbBrandCpp>
                </motion.div>
                <motion.div variants={icons(5)} initial="initial" animate="animate" className='rounded-2xl border-2 border-neutral-800 p-4'>
                    <FaJava style={{ color: 'yellow', backgroundColor: 'rgba(0,0,0)' }} className='text-4xl'></FaJava>
                </motion.div>
                <motion.div variants={icons(2)} initial="initial" animate="animate" className='rounded-2xl border-2 border-neutral-800 p-4'>
                    <TbSql style={{ color: 'rgb(0, 255, 255)', backgroundColor: 'rgb(0, 0, 0)' }} className='text-4xl'></TbSql>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technology;
