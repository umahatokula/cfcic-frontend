import React from "react";
import { FaRegBell } from "react-icons/fa6";
import { BiFoodMenu } from "react-icons/bi";

function NavBar() {
  return (
    <div className="flex justify-between items-start px-4 py-5 bg-primary w-full text-[#CAF0F8]">
      <BiFoodMenu className="w-5 h-5 stroke-0 cursor-pointer" />
      <FaRegBell className="w-5 h-5 stroke-1 cursor-pointer" />
    </div>
  );
}

export default NavBar;
