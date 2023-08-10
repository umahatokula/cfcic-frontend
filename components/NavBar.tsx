"use client";

import React from "react";
import { FaRegBell } from "react-icons/fa6";
import { BiFoodMenu } from "react-icons/bi";
import { signOut } from "next-auth/react";
import { useAppStore } from "@/lib/store";

function NavBar() {
  const {
    clearAlert,
    resetBiodata,
    resetCenterDetails,
    resetEvent,
    resetRegistration,
    resetFinancialCommitments,
    resetKidsDetails,
    resetUser,
  } = useAppStore();

  return (
    <div className="flex justify-between items-start px-6 py-7 bg-primary w-full text-[#CAF0F8]">
      <BiFoodMenu className="w-7 h-7 stroke-0 cursor-pointer" />
      <div className="flex space-x-3">
        <FaRegBell className="w-7 h-7 stroke-1 cursor-pointer" />
        <button
          onClick={() => {
            clearAlert();
            resetBiodata();
            resetCenterDetails();
            resetEvent();
            resetRegistration();
            resetFinancialCommitments();
            resetKidsDetails();
            resetUser();
            signOut();
          }}
        >
          <FaRegBell className="w-7 h-7 stroke-1 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
