"use client";

import { useAppStore } from "@/lib/store";
import Image from "next/image";
import React from "react";
import { AiOutlineBell } from "react-icons/ai";

function DashboardProfile() {
  const { user } = useAppStore();
  return (
    <>
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
            {/* Hi <span className="text-accent">Joan</span>, <br /> */}
            Hi {user.name!.split(" ")[0]}, <br />
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
    </>
  );
}

export default DashboardProfile;
