import Image from "next/image";
import Link from "next/link";
import { AiOutlineBell } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { BsCalendar2DateFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-purple-700 p-10 flex justify-between">
        <Image src="/logo.svg" width={200} height={200} alt="Logo" />

      </div>
      <Link
        href={"/dashboard"}
        className="font-bold text-2xl p-5 bg-accent text-center text-white cursor-pointer block"
      >
        Register Now
      </Link>
      <div className="flex justify-center bg-purple-700">
        <Image src="/finance-convention-projectionfa23.jpg" height={800} width={800} alt="Hero" />
      </div>
      <div className="flex justify-between p-10 bg-gray-100">
        <div className="items-center p-5">
          <GrLocation className="mb-3 text-3xl" />
          <h2 className="text-l font-bold">Location</h2>
          Abuja Continental Hotel (Former Sheraton Hotel), CBD
        </div>

        <div className="p-5">
          <BsCalendar2DateFill className="mb-3 text-3xl" />
          <h1 className="text-l font-bold">Date</h1>
          9th Nov. - 12th Nov. 2023
        </div>
      </div>
      <div className="">
        <h1 className="bg-purple-700  font-bold text-2xl p-3 text-white text-center drop-shadow-md">
          Speakers
        </h1>
      </div>
      <div className="">
        <div className="grid grid-cols-2 gap-5 p-6 mt-5 place-items-center">
          <div className="">
            <Image
              src="/speakers/rev-adahfa23.jpg"
              width={200}
              height={200}
              alt="RevAdah"
              className="drop-shadow-md rounded-full"
            />
            <h1 className="font-bold text-gray-700 mt-4 text-center">Rev Arome Adah</h1>
            <p className="text-gray-600 text-center">Savanah Grace Ministries</p>
          </div>
          <div className="">
            <Image
              src="/speakers/rev-ayenifa23.jpg"
              width={200}
              height={200}
              alt="RevAdah"
              className="drop-shadow-md rounded-full"
            />
            <h1 className="font-bold text-gray-700 mt-4 text-center">Rev Tunde Ayeni </h1>
            <p className="text-gray-600 text-center">Graceville Christian Center</p>
          </div>
          <div className="">
            <Image
              src="/speakers/rev-tokulafa23.jpg"
              width={215}
              height={150}
              alt="RevAdah"
              className="drop-shadow-md rounded-full"
            />
            <h1 className="font-bold text-gray-700 mt-4 text-center">Rev Arome Tokula</h1>
            <p className="text-gray-600 text-center">Rev Arome Tokula</p>
          </div>
        </div>
      </div>
      <div>
        <div className="px-5">
          <p className="text-lg text-center py-16">
            Christ Family Ministry &copy;
          </p>
        </div>
      </div>
    </div>
  );
}
