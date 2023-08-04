import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineBell } from 'react-icons/ai';
import { GrLocation } from "react-icons/gr";
import { BsCalendar2DateFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { BiHomeAlt2 } from 'react-icons/bi'
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { BsTelegram } from 'react-icons/bs'

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
      <div className="bg-gray-100">
        <h1 className="text-2xl font-extrabold p-3 text-center">
          About Faith Adventure
        </h1>
        <p className="text-gray-700 p-3">
          Faith Adventure is a Christ Family Ministry annual convention where
          beleivers from all works of life come together to fellowship under the
          ministry of the word and the love of God.
        </p>
      </div>
      <div className="flex justify-between p-10 bg-gray-100">
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
        <h1 className="bg-cfcblue-400 font-bold text-2xl p-3 text-white rounded-tl-lg rounded-br-lg text-center drop-shadow-md">
          Speakers
        </h1>
      </div>
      <div className="">
        <div className="flex justify-center space-x-4 mt-5">
          <div className="">
            <Image src="/REVadah.jpg" width={200} height={200} alt="RevAdah" />
            <h1 className="font-bold">Rev Arome Adah</h1>
            <p>Savanah Grace Ministries</p>
          </div>
          <div>
            <Image src="/johnibenu.jpg" width={200} height={200} alt="Bishop" />
            <h1 className="font-bold">Bishop John Ibenu</h1>
            <p>Chapel of Freedom Intl.</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-5">
          <div className="">
            <Image src="/DUnkaa.jpg" width={200} height={200} alt="RevAdah" />
            <h1 className="font-bold">Rev Dunka Gomwalk</h1>
            <p>Covenant Word Chapel</p>
          </div>
          <div>
            <Image src="/REVTokula.jpg" width={200} height={200} alt="Bishop" />
            <h1 className="font-bold">Rev Arome Tokula</h1>
            <p>Christ Family Ministries</p>
          </div>
        </div>
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
        <div className="flex justify-center text-white mt-5">
          <div>
            <h1>Follow The Conversation</h1>
            <div className="flex justify-center space-x-3 mt-3 mb-5">
              <Link href="https://www.instagram.com/_christfamilyministry/">
                <GrInstagram />
              </Link>
              <Link href="https://www.youtube.com/@ChristFamilyMinistry">
                <FaYoutube />
              </Link>
              <Link href="https://web.facebook.com/christfamilyministry">
                <FaFacebook />
              </Link>
              <Link href="https://t.me/pastorarome">
                <BsTelegram />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-5">
          <h1>Christ Family Ministries</h1>
        </div>
      </div>
    </>
  );
}
