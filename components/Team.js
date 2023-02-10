import React from 'react'
import Image from 'next/image'

function Team() {
  return (
    <div className='h-screen mx-auto justify-between pt-20 items-center text-center mt-20 top-10'>
      <h1 className='mt-20 mx-auto font-bold text-2xl top-10'>Team</h1>

      <div className='justify-center items-center mx-auto w-fit'>

       <div className='flex flex-col w-fit mx-auto m-10 items-start lg:flex-row'>

          <div className='flex flex-row p-10 w-fit items-center pr-20 mr-10'>
          <Image
                className=' object-fill rounded-full h-28 w-28 mx-auto mr-5'
                src='/WhatsApp Image 2023-01-28 at 11.32.29 AM.jpeg'
                alt='/'
                width={100}
                height={100}
            />
            <div className='flex flex-col text-left mr-20'>
                <h1 className='px-10 text-xl font-bold'>Saidatta Musale</h1>
                <p className='px-10 text-lg'>B.Tech CSE</p>
            </div>
          </div>

          <div>
          <div className='flex flex-row p-10 w-fit items-center pr-20 mr-10'>
            <Image
                className=' object-fill rounded-full h-28 w-28 mx-auto mr-5'
                src='/WhatsApp Image 2023-01-28 at 11.32.29 AM.jpeg'
                alt='/'
                width={100}
                height={100}
            />
            <div className='flex flex-col text-left mr-20'>
                <h1 className='px-10 text-xl font-bold'>Sarthak Tyagi</h1>
                <p className='px-10 text-lg'>B.Tech CSE</p>
            </div>
          </div>

          </div>
       </div>

       <div className='flex flex-col w-fit mx-auto m-10 items-start lg:flex-row'>

          <div className='flex flex-row p-10 w-fit items-center pr-20 mr-10'>
          <Image
                className=' object-fill rounded-full h-28 w-28 mx-auto mr-5'
                src='/WhatsApp Image 2023-01-28 at 11.32.29 AM.jpeg'
                alt='/'
                width={100}
                height={100}
            />
            <div className='flex flex-col text-left mr-20'>
                <h1 className='px-10 text-xl font-bold'>Saidatta Musale</h1>
                <p className='px-10 text-lg'>B.Tech CSE</p>
            </div>
          </div>

          <div>
          <div className='flex flex-row p-10 w-fit items-center pr-20 mr-10'>
            <Image
                className=' object-fill rounded-full h-28 w-28 mx-auto mr-5'
                src='/WhatsApp Image 2023-01-28 at 11.32.29 AM.jpeg'
                alt='/'
                width={100}
                height={100}
            />
            <div className='flex flex-col text-left mr-20'>
                <h1 className='px-10 text-xl font-bold'>Sarthak Tyagi</h1>
                <p className='px-10 text-lg'>B.Tech CSE</p>
            </div>
          </div>

          </div>
       </div>

       
      </div>

    </div>
  )
}

export default Team