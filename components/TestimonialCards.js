import React from "react"
import { motion } from "framer-motion"

const TestimonialCards = ({ title, email, image, review }) => {
  return (
    <article className="h-[500px] w-[300px] md:w-[200px] xl:h-[600px] xl:w-[400px] md:h-fit items-center flex-shrink-0 mt-10 md:pt-10 bg-gray-700/100 opacity-50 hover:opacity-80 rounded-lg">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
        className="h-28 w-28 rounded-full object-cover mx-auto mt-5 bg-white"
        src={image}
        alt="/"
      />

      <div className="m-10 items-center justify-between flex flex-col">
        <h2 className="text-xl font-semibold py-5 px-10 text-[#32CC8B]">{title}</h2>
        <p className="md:py-5 md:px-10 text-sm font-bold text-[yellow] ">{email}</p>
        <p className="md:py-5 md:px-10 text-sm">{review}</p>
      </div>
    </article>
  )
}

export default TestimonialCards