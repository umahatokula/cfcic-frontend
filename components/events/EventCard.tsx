import { Event, EventProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function EventCard({ event }: EventProps) {
  const { id, name, tagline, banner_image, start_date }: Event = event;
  return (
    <div>
      <p className="text-xs font-normal text-[#565757] mb-3">{start_date}</p>
      <Image
        className="rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm w-full"
        src={banner_image}
        alt={name}
        width={150}
        height={150}
      />
      <p className="text-center text-[20px] leading-[30px] font-normal text-[#01080D]">
        {name}
      </p>
      <p className="text-center text-xs font-normal text-[#565757] mb-3">
        {tagline}
      </p>
      <Link className="link__btn__default" href={`/events/register/${id}`}>
        Register Now
      </Link>
    </div>
  );
}

export default EventCard;
