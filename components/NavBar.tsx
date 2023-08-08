"use client";

import React from "react";
import { FaRegBell } from "react-icons/fa6";
import { BiFoodMenu } from "react-icons/bi";
import { signOut } from "next-auth/react";
import { useAppStore } from "@/lib/store";

function NavBar() {

  const { resetUser } = useAppStore();

  return (
    <div className="flex justify-between items-start px-4 py-5 bg-primary w-full text-[#CAF0F8]">
      <BiFoodMenu className="w-5 h-5 stroke-0 cursor-pointer" />
      <div className="flex space-x-3">
        <FaRegBell className="w-5 h-5 stroke-1 cursor-pointer" />
        <button onClick={() => {
          resetUser()
          signOut()
        }}>
          <FaRegBell className="w-5 h-5 stroke-1 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
