import React, { useState } from "react"
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import Image from "next/image"
import Link from "next/link"

const Profile = () => {
  const [text, setText] = useTypewriter({
    words: [
      "Lets Ride Eco-friendly !!",
      "Providing ease of transportation !!",
      "Cheapest of all !!",
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen text-left text-white mx-auto justify-between items-center max-w-7xl lg:flex flex-row">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
<<<<<<< HEAD
      className='items-center'
     >
      <h1 className='text-3xl font-sans px-20 py-10 text-white items-center max-w-[700px] tracking-wide'>
      <span className='font-bold text-[#32CC8B]'>
       {text}
      </span>
      <Cursor cursorColor="#FB923C"/>
      </h1>
      <p className='px-20 text-lg max-w-fit mx-auto'>Cool_Ride is a big initiative in making the planet greener as the trend of e-scooters, i.e., electric scooters (no usage of petrol, diesel here) makes the economy of ride-sharing greener and economical. Cool_Ride allows people to find and commute with an e-bike easily and this is a big shift towards sustainability. This e-bike sharing concept very well suits sustainable lifestyle and makes more and more people move towards it. It is resultantly opening a big business opportunity for the entrepreneurs.
</p>
    </motion.div>
     <motion.img 
      initial = {{
            y: -100,
            opacity: 0,       
=======
        className="items-center"
      >
        <h1 className="text-3xl font-sans px-20 py-10 text-white items-center max-w-[700px] tracking-wide">
          <span className="font-bold text-[#32CC8B]">{text}</span>
          <Cursor cursorColor="#FB923C" />
        </h1>
        <p className="px-20 text-lg max-w-fit mx-auto">
          Cool_Ride is a big initiative in making the planet greener as the trend of e-scooters,
          i.e., electric scooters (no usage of petrol, diesel here) makes the economy of
          ride-sharing greener and economical. Cool_Ride allows people to find and commute with an
          e-bike easily and this is a big shift towards sustainability. And this e-bike sharing
          concept very well suits sustainable lifestyle and this makes more and more people more
          towards it and resultantly opening a big business opportunity for the entrepreneurs.
        </p>
      </motion.div>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
>>>>>>> 66f53967a8059d704195603e282b7a83bee220ac
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
        className="rounded-xl border border-black border-double md:mx-20 shadow-2xl shadow-black mx-auto mt-5 md:mt-0"
        src="/Phone5.png"
        alt="/"
        height={220}
        width={220}
      />
    </div>
  )
}

export default Profile
