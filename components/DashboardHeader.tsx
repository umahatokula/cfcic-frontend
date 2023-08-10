import React from "react";
import Image from "next/image";
import { AiOutlineBell } from "react-icons/ai";
//import Card from "./Card";

const NavBar = () => {
  return (
    <>
      <div className="w-full">
        <div className="bg-[#03045E] p-10 h-[300px] mb-5">
          <div className="flex justify-between items-center">
            <Image
              src="/logo.svg"
              alt="Loo"
              height={100}
              width={100}
              className="w-32"
            />
            <AiOutlineBell className="h-7 w-7 text-[#CAF0F8]" />
          </div>
          <div className="flex justify-between items-center mt-6">
            <p className="text-white text-[20px] leading-[30px] font-semibold">
              Hi <span className="text-accent">Joan</span>, <br />
              welcome home.
            </p>
            <Image
              className="w-14 h-14"
              src="/nis.svg"
              height={55}
              width={55}
              alt="nis"
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex items-center justify-center w-11/12">
            <div className="w-full mx-auto bg-[#0077B6] -mt-[130px] rounded-tr-lg rounded-bl-lg p-5">
              <div className="flex justify-between">
                <h1 className="text-base text-white">Euphoria Devotional</h1>
                <h1 className="text-base text-white">February 20 </h1>
              </div>
              <p className="pt-1 text-[#CAF0F8] text-xs">
                (The spirit of joy, an ecstasy that comes from God)
              </p>
              <h1 className="text-base text-white flex items-center justify-center p-5">
                Reign And Rule With Your Words
              </h1>
              <div className="">
                <h1 className="text-white text-xs">Mark 11:23</h1>
                <p className="text-white text-xs">
                  For assuredly, I say to you, whoever SAYS to this mountain,
                  ‘Be removed and be cast into the sea,’ and does not doubt
                  in...
                </p>
                <p className="text-[#FB8500] mt-8 flex justify-end cursor-pointer text-base">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
