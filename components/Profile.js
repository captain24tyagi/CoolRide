import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Image from 'next/image'
import Link from 'next/link'

const Profile = () => {
  const [text, setText] = useTypewriter({
    words: ["Lets Ride Eco-friendly !!",
     "Providing ease of transportation !!",
     "Cheapest of all !!"
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen text-left text-white mx-auto justify-between items-center max-w-7xl lg:flex flex-row'>
     <div className='items-center'>
      <h1 className='text-3xl font-sans px-20 py-10 text-white items-center max-w-[700px] tracking-wide'>
      <span className='font-bold text-[#32CC8B]'>
       {text}
      </span>
      <Cursor cursorColor="#FB923C"/>
      </h1>
      <p className='px-20 text-lg max-w-fit mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
    </div>
     <Image 
      className='rounded-xl border border-black border-double mx-20 shadow-2xl shadow-black'
      src='/map1.png'
      alt='/'
      height={220}
      width={220}
     />
   </div>
  )
}

export default Profile