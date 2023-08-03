import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineBell } from 'react-icons/ai';
import { GrLocation } from "react-icons/gr";
import { BsCalendar2DateFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { BiHomeAlt2 } from 'react-icons/bi'

export default function Home() {
  return (
    <>
      <div className="bg-primary p-10 flex justify-between">
        <Image src="/logo.svg" width={100} height={100} alt="Logo" />

        <AiOutlineBell className="text-white cursor-pointer" />
      </div>
      <h1 className="font-bold text-2xl p-5 bg-primary text-white cursor-pointer">
        Register Now
      </h1>
      <div className="flex justify-center bg-primary">
        <Image src="/FA23.JPG" height={800} width={800} alt="Hero" />
      </div>
      <div>
        <h1 className="text-2xl font-extrabold p-3 text-center">
          About Faith Adventure
        </h1>
        <p className="text-gray-700 p-3">
          Faith Adventure is a Christ Family Ministry annual convention where
          beleivers from all works of life come together to fellowship under the
          ministry of the word and the love of God.
        </p>
      </div>
      <div className="flex justify-between p-10">
        <div className="items-center p-5">
          <GrLocation className="mb-3 text-3xl" />
          <h2 className="text-l font-bold">Location</h2>
          Christ Family Center (Theatre of faith)
        </div>

        <div className="p-5">
          <BsCalendar2DateFill className="mb-3 text-3xl" />
          <h1 className="text-l font-bold">Date</h1>
          10th Sept. - 17th Sept 2023
        </div>
      </div>
      <div className="">
        <h1 className="bg-cfcblue-400 font-bold text-2xl p-3 text-white rounded-tl-lg rounded-br-lg text-center">
          Speakers
        </h1>
      </div>
      <div>
        <h2 className="text-xl flex justify-center mx-5 my-5 font-semibold">
          Arome Tokula | Arome E Adah | Joshua Tende | Bishop John Ibenu | PB
          Philips | Dunka Gomwalk | Frederick Sule
        </h2>
      </div>
      <div className="bg-primary">
        <div className="items-center p-5">
          <BiHomeAlt2 className="mb-3 text-3xl text-cfcblue-200" />
          <h2 className="text-l font-bold text-gray-300">Location</h2>
          <h1 className="text-gray-300">
            Christ Family Center (Theatre of faith)
          </h1>
          <p className="text-gray-300 text-xs">
            Off Ring Road, Behind Gboko Hills, GRA Gbk, Benue State
          </p>
        </div>

        <div className="p-5">
          <BsCalendar2DateFill className="mb-3 text-3xl text-cfcblue-200" />
          <h1 className="text-l font-bold text-gray-300">Date</h1>
          <h1 className="text-gray-300">10th Sept. - 17th Sept 2023</h1>
        </div>

        <div className="p-5">
          <AiFillHome className="mb-3 text-3xl text-cfcblue-200" />
          <h1 className="text-l font-bold text-gray-300">
            Accomondation & Feeding
          </h1>
          <p className="text-gray-300">Free Accomondation and Feeding </p>
        </div>
      </div>
    </>
  );
}
