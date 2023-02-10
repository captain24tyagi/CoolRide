import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';


const Header = () => {
  return (
    <div className='sticky top-0 z-30 justify-between items-center flex mx-auto bg-[#32CC8B] text-white'>
      <motion.div 
        initial={{
          x: -500,
          opacity: 0,
          scale:0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        className='mx-auto p-5'
        >
        <Link href='#profile'>
        <h1 className=' text-xl font-bold'>Cool Ride</h1>
        </Link>
      </motion.div>

      <motion.div 
       initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
       }}
       animate={{
        x: 0,
        opacity: 1,
        scale: 1,
       }}
       transition={{
        duration: 1.5,
       }}
      className='flex flex-row mx-auto p-5 text-lg'>
        <Link href='#about'>
        <h3 className='py-2 px-4 text-md'>CoolRide</h3>
        </Link>
        <Link href='#coolride'>
        <h3 className='py-2 px-4 text-md'>About</h3>
        </Link>
        <Link href='#programme'>
        <h3 className='py-2 px-4 text-md'>Programme</h3>
        </Link>
        <Link href='#team'>
        <h3 className='py-2 px-4 text-md'>Team</h3>
        </Link>
        <Link href=''>
        <h3 className='py-2 px-4 text-md'>Contact</h3>
        </Link>
        <Link href=''>
        <h3 className='py-2 px-4 text-md border border-black rounded-full bg-black text-white mx-3'>Download app</h3>
        </Link>
      </motion.div>
    </div>
  )
}

export default Header;