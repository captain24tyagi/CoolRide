import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import ElectricScooterOutlinedIcon from '@mui/icons-material/ElectricScooterOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const About = () => {
  return (
    <div className='h-screen mx-auto z-20 justify-between items-center max-w-7xl py-10 text-white lg:flex flex-row lg:mb-20'>
     
      <div className='lg:flex flex-row max-w-fit items-center mt-5 pb-20'>
      <motion.img
        initial = {{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate = {{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition = {{
          duration: 1.5,
        }}
        className='rounded-lg mx-auto mt-10 pt-10'
        src='https://www.joyebike.com/product/glob-bike/assets/img/slider.png'
        height={300}
        width={600}
      />

        <motion.div 
         initial = {{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate = {{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition = {{
          duration: 1.5,
        }}
        className='mx-auto w-fit px-20'>
         
         <h2 className='text-4xl font-bold p-5 mt-10 pt-10 mx-auto text-[#32CC8B]'>How it works</h2>

          <div className='p-5 w-[500px] flex flex-row items-center hover:shadow hover:shadow-black hover:text-[#32CC8B]'>
          <FileDownloadIcon className='text-4xl mx-auto mr-5' />
           <div>
             <h3 className='text-lg font-bold'>
                Download CoolRide App
            </h3>
            <p className='text-sm'>
                Download the CoolRide app from the playstore or the appstore and be cool. 
            </p>
           </div>
          </div>

          <div className='p-5 w-[500px] flex flex-row items-center hover:shadow hover:shadow-black  hover:text-[#32CC8B]'>
          <LocationOnOutlinedIcon className='text-4xl mx-auto mr-5' />
           <div>
             <h3 className='text-lg font-bold'>
                Locate your CoolRide
            </h3>
            <p className='text-sm'>
                Use the CoolRide app to find the closest vehicle in your region and get going.
            </p>
           </div>
          </div>

          <div className='p-5 w-[500px] flex flex-row items-center hover:shadow hover:shadow-gray-100/80  hover:text-[#32CC8B]'>
          <QrCodeScannerOutlinedIcon className='text-4xl mx-auto mr-5' />
           <div>
             <h3 className='text-lg font-bold'>
                Scan the QR Code
            </h3>
            <p className='text-sm'>
                To unlock the vehicle quickly, scan the QRcode to access your CoolRide.
            </p>
           </div>
          </div>

          <div className='p-5 w-[500px] flex flex-row items-center hover:shadow hover:shadow-black hover:text-[#32CC8B]'>
          <ElectricScooterOutlinedIcon className='text-4xl mx-auto mr-5' />
           <div>
             <h3 className='text-lg font-bold'>
                Enjoy Your CoolRide
            </h3>
            <p className='text-sm'>
                Enjoy the CoolRide but remember to abide by all the traffic laws and parking policies.
            </p>
           </div>
          </div>

          <div className='p-5 w-[500px] flex flex-row items-center hover:shadow hover:shadow-black hover:text-[#32CC8B]'>
          <HomeOutlinedIcon className='text-4xl mx-auto mr-5'/>
           <div>
             <h3 className='text-lg font-bold'>
                End Your CoolRide
            </h3>
            <p className='text-sm'>
            To end your ride, park the vehicle at a CoolRide station, lock it and click on the End button on your app.
            </p>
           </div>
          </div>
        </motion.div>

        
      </div>
      
        
    </div>
  )
}

export default About