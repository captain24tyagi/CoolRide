import React, { useEffect, useState } from "react"
import CoolCards from "./CoolCards"
import db from "../firebase"

const CoolRide = () => {
  const [benefits, setBenefits] = useState([])

  useEffect(() => {
    db.collection("benefits").onSnapshot((snapshot) => {
      setBenefits(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <div className="h-fit mx-auto z-20 md:mt-20 flex-col items-center justify-between max-w-7xl md:py-10 text-white flex overflow-x-scroll scrollbar scrollbar-track-black/20 scrollbar-thumb-[#32CC8B] overflow-y-hidden">
      <h1 className="mx-auto mt-20 text-2xl font-bold">About</h1>
      <div className="flex flex-row mx-auto z-20 space-x-5 items-center justify-between max-w-7xl md:py-10">
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
