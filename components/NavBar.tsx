"use client";

import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import { signOut } from "next-auth/react";
import { useAppStore } from "@/lib/store";
import Menu from "./Menu";
import { GrClose } from "react-icons/gr";
import { MdMenu } from "react-icons/md";

function NavBar() {
  
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between items-start px-6 py-7 bg-primary w-full text-[#CAF0F8]">
        <div
          onClick={() => setOpen(!open)}
          className="text-[#CAF0F8] cursor-pointer"
        >
          {open ? (
            <GrClose className="w-8 h-8 stroke-1 cursor-pointer text-[#CAF0F8]" />
          ) : (
            <MdMenu className="w-8 h-8 stroke-1 cursor-pointer text-[#CAF0F8]" />
          )}
        </div>
        <div className="flex space-x-3">
          <FaRegBell className="w-7 h-7 stroke-1 cursor-pointer" />
        </div>
      </div>
      <div className="relative">
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default NavBar;
