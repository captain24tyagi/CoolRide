import Image from 'next/image'
import React from 'react'

const Base = () => {
  return (
    <div className='h-screen justify-between items-center mx-auto w-fit mt-20 top-10'>
      
      <div className='flex flex-col pt-10 pb-20 m-10 w-fit lg:flex-row'>
        <Image
            className='mt-20 rounded-lg'
            src='/Screenshot_20230209_232707.png'
            width={600}
            height={100}
        />
        
        <div className='flex flex-col ml-10 mt-20 p-10 text-center w-[600px]'>
          <h1 className=' font-bold text-2xl mb-10 text-[#32CC8B]'>College Oriented Programme</h1>
          <p className=' font-semibold text-sm text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
        </div>

      </div>

    </div>
  )
}

export default Base