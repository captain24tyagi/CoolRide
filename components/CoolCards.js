import React from 'react'
import { motion } from 'framer-motion'

const CoolCards = ({ title, content }) => {

  return (
    <article className='h-[500px] w-[300px] md:w-[200px] xl:h-[600px] xl:w-[400px] md:h-fit items-center flex-shrink-0 mt-10 pt-10 bg-gray-700/100 opacity-50 hover:opacity-80 rounded-lg'>
      <motion.img
        initial = {{
            y: -100,
            opacity: 0,       
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity:1, y:1 }}
        viewport={{ once: true }}
        className='h-28 w-28 rounded-full object-cover mx-auto mt-5'
        src='https://www.joyebike.com/product/glob-bike/assets/img/slider.png'
        alt='/'
      />

      <div className='m-10 items-center justify-between flex flex-col'>
       <h2 className='text-3xl font-semibold py-5 px-10 text-[#32CC8B]'>{title}</h2>
       <p className='py-5 px-10'>{content}</p>
      </div> 
       
    </article>
  )
}

export default CoolCards