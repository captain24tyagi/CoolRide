import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

const Base = () => {
  return (
    <div className="h-screen justify-between items-center mx-auto w-fit mt-20 top-10 p-5 pt-10 max-w-7xl overflow-hidden">
      <motion.div
        className="md:flex flex-col-reverse md:pt-10 md:pb-20 md:m-10 md:w-fit lg:flex-row items-center"
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className="md:mt-20 rounded-lg"
          src="/Screenshot_20230209_232707.png"
          width={600}
          height={100}
        />

        <div className="flex flex-col md:ml-10 md:mt-20 md:p-10 text-center max-w-[600px]">
          <h1 className="font-bold text-2xl mt-5 md:mb-10 text-[#32CC8B]">Electric Stations</h1>
          <p className="font-semibold text-sm text-white md:pb-5">
            Initially we have decided to put up 4 electic stations in the city of Chennai. This
            functionality is important to be integrated into the e-Bike sharing app as it will allow
            the users to locate nearby bikes on the map.It will allow them to hire the bike easily
            with just one tap on their mobile screen. Electic stations will be utilised as the point
            of contact, customers will have to start and end their ride at any of these 4 electric
            stations. Initially we are setting up electric stations keeping in mind the locations
            with largest number of college student footfall. These 4 places are:{" "}
          </p>
          <ul className="font-bold list-disc p-2 md:p-5 text-left">
            <li>A - SRM Ramapuram</li>
            <li>B - IIT Madras</li>
            <li>C - SRM Kattankulathur</li>
            <li>D - Chennai Airport</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default Base
