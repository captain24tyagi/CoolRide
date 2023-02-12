import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export const Scan = () => {
  return (
    <div className="h-screen justify-between items-center mx-auto w-fit mt-20 top-10 max-w-7xl">
      <motion.div
        className="flex flex-col-reverse pt-10 pb-20 m-10 w-fit lg:flex-row items-center"
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className="mt-20 rounded-lg w-[300px] md:w-[500px]"
          src="/code.jpeg"
          width={500}
          height={200}
        />

        <div className="flex flex-col md:ml-10 md:mt-20 md:p-10 text-center max-w-[600px]">
          <h1 className="font-bold text-2xl mb-10 text-[#32CC8B]">Scan and Ride</h1>
          <p className=" font-semibold text-sm text-white">
            One crucial feature which will allow the users to easily scan the QR code to unlock the
            bike to start a ride and then lock the bike as the ride ends. It will offer the users to
            secure payments options so the amount can be paid easily..
          </p>
          <p className=" font-semibold text-sm text-white">
            Scanning this QR will take you to your default/desired UPI payment application and you
            can continue with the payment. With increasing digitalisation of currency, we find this
            as one of the most convenient method for payment purposes. Just Scan and CoolRide!!!
          </p>
        </div>
      </motion.div>
    </div>
  )
}
