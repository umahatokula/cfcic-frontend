import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

type ProfileHeaderProps = {
  activeStep: number;
  heading: string;
  subHeading: string;
  showBackButton: boolean;
  backUrl?: string;
};

const style = {
  line: "bg-gray-400 mx-2 my-4 w-full",
};

function ProfileHeader(props: ProfileHeaderProps) {
  const { activeStep, heading, subHeading, showBackButton = false, backUrl="/" } = props;
  const steps = [1, 2, 3, 4];
  return (
    <div className="relative">
      <div className="w-full">
        {showBackButton && (
          <Link href={backUrl}>
            <FaArrowLeftLong className="absolute top-3 left-2" />
          </Link>
        )}
        <p className="text-center text-[25px] leading-[30px] font-normal mb-4">Set Up Your Profile</p>
      </div>
      <div className="w-full flex items-center">
        {steps.map((val, idx) => (
          <div
          key={idx}
            className={`${style.line} ${
              val <= activeStep
                ? "bg-gray-800 h-[3px] "
                : "bg-gray-400 h-px"
            }`}
          ></div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-[20px] leading-[24px] font-medium mt-4">{heading}</p>
        <p className="text-base leading-[24px] mt-4">{subHeading}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;
