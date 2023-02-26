import React, { useEffect, useState } from "react"
import TestimonialCards from "./TestimonialCards"
import db from "../firebase"

const Test = () => {
  const [tests, setTests] = useState([])

  useEffect(() => {
    db.collection("tests").onSnapshot((snapshot) => {
      setTests(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <div className="h-fit mx-auto z-20 md:mt-20 flex-col items-center justify-between max-w-7xl md:py-10 text-white flex overflow-x-scroll scrollbar scrollbar-track-black/20 scrollbar-thumb-[#32CC8B] overflow-y-hidden pb-20 mb-20">
      <h1 className="mx-auto mt-20 text-2xl font-bold text-[#32CC8B]">Testimonials</h1>
      <div className="flex flex-row mx-auto z-20 space-x-5 items-center justify-between max-w-7xl md:py-10">
        {tests.map((test) => (
          <TestimonialCards
            key={test.Name}
            title={test.Name}
            email={test.email}
            review={test.review}
            image={test.imageu}
          />
        ))}
      </div>
    </div>
  )
}

export default Test
