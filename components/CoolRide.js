import React, { useEffect, useState } from 'react'
import CoolCards from './CoolCards'
import db from '../firebase';

const CoolRide = () => {

const [benefits, setBenefits] = useState([]);

 useEffect(() => {
   db.collection('benefits')
   .onSnapshot((snapshot) => {
     setBenefits(snapshot.docs.map(doc => doc.data()))
   })
 }, [])

  return (
    <div className='h-fit mx-auto z-20 mt-20 flex-col items-center justify-between max-w-7xl py-10 text-white flex md:mt-20'>
      <h1 className='mx-auto mt-20 text-2xl font-bold'>About</h1>
      <div className='flex flex-row mx-auto z-20 overflow-x-scroll space-x-5 items-center justify-between max-w-7xl py-10'>
      {benefits.map((benefit) => (
        <CoolCards 
        key={benefit.title}
        title={benefit.title} 
        content={benefit.content}
        image={benefit.imageUrl}
      />
      ))}


      </div>
    </div>
  )
}

export default CoolRide