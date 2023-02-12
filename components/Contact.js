import React from "react"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { useForm, SubmitHandler } from "react-hook-form"

const Contact = () => {
  const [write, setWrite] = useTypewriter({
    words: ["Lets Connect !", "Mail us here !"],
    loop: true,
    delaySpeed: 2000,
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    window.location.href = `mailto:sarthak2002tyagi@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}.&mailfrom=${data.email}`
  }

  return (
    <div className="h-screen justify-between items-center mx-auto w-fit mt-20 top-10 max-w-7xl pt-10">
      <h1 className="mt-20 mx-auto font-bold text-2xl top-10 mb-0 text-center text-[#32CC8B]">
        Contact
      </h1>

      <div className="flex flex-col">
        <div className="flex flex-row m-10 mb-5 items-center">
          <LocationOnOutlinedIcon className="text-3xl" />
          <h2 className="px-5 text-md font-bold text-[#32CC8B]">Address: </h2>
          <p className=" text-sm font-bold">
            Cool Ride, Homefinders Estate, Ramapuram, Chennai- 600089
          </p>
        </div>
        <div className="flex flex-row mx-10 items-center">
          <LocalPhoneIcon className="text-3xl" />
          <h2 className="px-5 text-md font-bold text-[#32CC8B]">Contact: </h2>
          <p className=" text-sm font-bold">+91 9325878019</p>
        </div>
        <h1 className="px-5 items-center justify-center m-10 text-center text-xl font-bold">
          {write}
          <Cursor cursorColor="green" />
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto md:p-5"
        >
          <div className="space-x-2">
            <input {...register("name")} className="contactinput" placeholder="Name" type="text" />

            <input
              {...register("email")}
              className="contactinput"
              placeholder="Email"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            className="contactinput"
            placeholder="Subject"
            type="text"
          />

          <textarea {...register("message")} className="contactinput" placeholder="Message" />

          <button className="rounded-sm bg-[#32CC8B] p-2 text-black font-bold" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
