import React from "react";
import Image from "next/image";
import Link from "next/link";

const DashboardCard = (props: DashboardCard) => {
  const{img, body, link, heading} = props;
  return (
    <Link href={link}>
      <div className="w-full bg-[#CAF0F8] rounded-tr-lg rounded-bl-lg shadow-lg h-[142px]">
        <div className="flex flex-col">
          <div className="p-5">
            <div className="flex space-x-3">
              <Image
                src={img}
                alt="image"
                width={50}
                height={50}
                className="w-5 h-5"
              />
              <div className="text-base font-normal">{heading}</div>
            </div>
            <div className="mt-5 text-xs">{body}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;
