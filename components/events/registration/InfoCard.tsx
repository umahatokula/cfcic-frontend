import Image from 'next/image';
import React from 'react'

function InfoCard(props: InfoCardProps) {
    const { iconUrl, content } = props;
  return (
    <div className="grid place-items-center rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm w-full min-h-[240px] bg-[#0077B6] text-[#FBFDFF] px-20 py-12">
      <Image
        className="w-16 h-16"
        src={iconUrl}
        alt="icon"
        width={30}
        height={30}
      />
      <p className="text-center mt-8">{content}</p>
    </div>
  );
}

export default InfoCard