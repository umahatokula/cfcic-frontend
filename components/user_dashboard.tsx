import React from "react";
import Image from "next/image";
import { AiOutlineBell } from "react-icons/ai";
//import Card from "./Card";

const NavBar = () => {
  return (
    <>
      <div className="w-full">
        <nav className="bg-[#03045E] p-10 h-[300px] mb-5">
          <div className="flex justify-between">
            <Image
              src="/lo.png"
              alt="Loo"
              height={100}
              width={100}
              className=""
            />

            <AiOutlineBell className="h-[20px] w-[20px] text-white" />
          </div>
          <div className="flex justify-between mt-10">
            <div>
              <div className="flex flex-row">
                <h2 className="text-white font-semibold text-xl">Hi</h2>{" "}
                <h2 className="mx-2 text-[#FB8500] font-semibold text-xl">
                  Joan,
                </h2>
              </div>
              <h2 className="text-white font-normal text-sm"> welcome home.</h2>
            </div>
            <div>
              <Image src="/nis.png" height={55} width={55} alt="nis" />
            </div>
          </div>
        </nav>
        <div className="flex items-center justify-center">
          <div className="w-full mx-auto bg-blue-600 -mt-[80px] rounded-tr-lg rounded-bl-lg">
            <div className="flex justify-between mx-5 my-5">
              <h1 className="text-xl text-white">Euphoria Devotional</h1>
              <h1 className="text-xl text-white">February 20 </h1>
            </div>
            <p className="mx-5 pt-1 text-white">
              (The spirit of joy, an ecstasy that comes from God)
            </p>
            <h1 className="text-xl text-white flex items-center justify-center p-5">
              Reign And Rule With Your Words
            </h1>
            <div className="p-10 sm:h-20">
              <h1 className="text-white">Mark 11:23</h1>
              <p className="text-white">
                For assuredly, I say to you, whoever SAYS to this mountain, ‘Be
                removed and be cast into the sea,’ and does not doubt in...
              </p>
              <h1 className="text-[#FB8500] mt-8 flex justify-end mx-5 text-lg cursor-pointer">
                Read More...
              </h1>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10">
          <Image src="/Line 7.png" height={100} width={300} alt="line" />
        </div>
        <div className="flex items-center justify-center mt-5">
          <h1 className="text-base font-semibold">Dashboard</h1>
        </div>
      </div>
    </>
  );
};

export default NavBar;
