import React from 'react'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import {motion} from 'framer-motion'

function Team() {
  return (
    <div className='h-screen mx-auto justify-between pt-20 items-center text-center mt-20 top-10 bottom-10 max-w-8xl'>
      <h1 className='mt-20 mx-auto font-bold text-2xl top-10 mb-0 text-[#32CC8B]'>Team</h1>

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
       className='justify-center items-center mx-auto'
       >

       <div className='flex flex-col w-fit mx-auto m-10 items-start lg:flex-row'>

          <div className='flex flex-row p-10 w-fit items-center'>
          <Image
                className=' object-cover rounded-full h-28 w-28 mx-auto'
                src='/WhatsApp Image 2023-02-11 at 11.10.10 AM.jpeg'
                alt='/'
                width={100}
                height={100}
            />
            <div className='flex flex-col text-left m-10'>
                <h1 className='px-5 text-xl font-bold'>Saidatta Musale</h1>
                <p className='px-5 text-lg text-[#32CC8B]'>Founder, CoolRide</p>
                <p className='px-5 text-lg'>B.Tech, Computer Science and Engineering</p>
                <div className='p-2'>
                  <SocialIcon
                   className='hover:animate-pulse'
                   bgColor='transparent'
                   fgColor='white'
                   url='https://linkedin.com/in/saidatta-musale-5a96bb1b7'
                   /> 
                  <SocialIcon
                   className='hover:animate-pulse'
                   bgColor='transparent'
                   fgColor='white'
                   url='https://instagram.com/sai__0063'
                  />
                  <SocialIcon
                   className='hover:animate-pulse'
                   bgColor='transparent'
                   fgColor='white'
                   url='https://twitter.com/SaiMusale76'
                  />
                </div>
            </div>
          </div>

          <div>
          <div className='flex flex-row p-10 w-fit items-center'>
            <Image
                className=' object-cover rounded-full h-28 w-28 mx-auto'
                src='/WhatsApp Image 2023-01-12 at 11.59.20 AM.jpeg'
                alt='/'
                width={100}
                height={100}
            />
            <div className='flex flex-col text-left m-10'>
                <h1 className='px-5 text-xl font-bold'>Sarthak Tyagi</h1>
                <p className='px-5 text-lg text-[#32CC8B]'>Technical Head, CoolRide</p>
                <p className='px-5 text-lg'>B.Tech, Computer Science and Engineering</p>
                <div className='p-2'>
                  <SocialIcon
                   className='hover:animate-pulse'
                   bgColor='transparent'
                   fgColor='white'
                   url='https://linkedin.com/in/sarthak-tyagi24'
                   /> 
                  <SocialIcon
                   className='hover:animate-pulse'
                   bgColor='transparent'
                   fgColor='white'
                   url='https://instagram.com/captain24tyagi'
                  />
                  <SocialIcon
                   className='hover:animate-pulse'
                   bgColor='transparent'
                   fgColor='white'
                   url='https://twitter.com/Tyagi24Sarthak'
                  />
                </div>
            </div>
          </div>

          </div>
       </div>

       <div className='flex flex-col w-fit mx-auto m-10 items-start lg:flex-row'>

          <div className='flex flex-row w-fit items-center'>
          <Image
                className=' object-cover rounded-full h-28 w-28 mx-auto'
                src='/20221001_090611.jpg'
                alt='/'
                width={400}
                height={100}
            />
            <div className='flex flex-col text-left m-10'>
                <h1 className='px-5 text-xl font-bold'>Alok Mishra</h1>
                <p className='px-5 text-lg text-[#32CC8B]'>Business Head, CoolRide</p> 
                <p className='px-5 text-lg'>B.Tech, Computer Science and Engineering</p>
                <div className='p-2'>
                  <SocialIcon
                   className='hover:animate-pulse'
                   bgColor='transparent'
                   fgColor='white'
                   url='https://linkedin.com/in/alok-mishra-359375204'
                   /> 
                  <SocialIcon
                   className='hover:animate-pulse'
                   bgColor='transparent'
                   fgColor='white'
                   url='https://instagram.com/alokmishra_13'
                  />
                  <SocialIcon
                   className='hover:animate-pulse'
                   bgColor='transparent'
                   fgColor='white'
                   url='https://twitter.com/Alokmishra_1324'
                  />
                </div>
            </div>
          </div>

          <div>
          {/* <div className='flex flex-row p-10 w-full items-center pr-20 mr-10'>
            <Image
                className=' object-fill rounded-full h-28 w-28 mx-auto mr-5'
                src='/WhatsApp Image 2023-01-28 at 11.32.29 AM.jpeg'
                alt='/'
                width={100}
                height={100}
            />
            <div className='flex flex-col text-left mr-20'>
                <h1 className='px-10 text-xl font-bold'>Anurag Jain </h1>
                <p className='px-10 text-lg'></p> 
                <p className='px-10 text-lg'>B.Tech Computer Science and Engineering</p>
            </div>
          </div> */}

          </div>
       </div>

       
      </motion.div>

    </div>
  )
}

export default Team