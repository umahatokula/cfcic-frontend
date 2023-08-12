import RegistrationPageDivider from "@/components/events/registration/RegistrationPageDivider";
import Button from "@/components/forms/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SuccessPage() {
  return (
    <>
      <p className="text-[20px] leading-[30px] font-normal text-[#01080D] mb-8">
        Registration
      </p>

      <p className="text-base mb-6">
        Events \ <span className="font-semibold">Registration</span>
      </p>

      <div className="rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm w-full min-h-[240px] bg-[#0077B6] text-[#FBFDFF] px-5 py-12">
        <p className="text-base text-center">
          Your registration was successful! Follow the livestream on:
        </p>
        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-center text-white">
            <div className="flex items-center justify-start gap-x-5">
              <Image src={"/youtube.svg"} alt="yt" width={30} height={30} />
              <p className="text-xs">www.youtube.com/christfamilyminist...</p>
            </div>
            <div>copy</div>
          </div>
          <div className="flex justify-between items-center text-white">
            <div className="flex items-center justify-start gap-x-5">
              <Image src={"/fb.svg"} alt="yt" width={30} height={30} />
              <p className="text-xs">www.facebook.com/christfamilyminist...</p>
            </div>
            <div>copy</div>
          </div>
          <div className="flex justify-between items-center text-white">
            <div className="flex items-center justify-start gap-x-5">
              <Image src={"/mixlr.svg"} alt="yt" width={30} height={30} />
              <p className="text-xs">www.mixlr.com/cfm-live</p>
            </div>
            <div>copy</div>
          </div>
        </div>
      </div>

      <RegistrationPageDivider />

      <div className="mt-16">
        <Link className="link__btn__outline-primary" href={"/dashboard"}>
          Close
        </Link>
      </div>
    </>
  );
}

export default SuccessPage;
