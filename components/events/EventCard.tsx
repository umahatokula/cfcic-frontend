import Image from "next/image";
import Link from "next/link";
import React from "react";

function EventCard({ event, isRegistrationOpen }: EventProps) {
  const { id, name, tagline, banner_image, start_date }: Event = event;
  return (
    <div className="w-full">
      <p className="text-xs font-normal text-[#565757] mb-3">{start_date}</p>
      <Image
        className="rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm w-full"
        src={banner_image}
        alt={name}
        width={150}
        height={150}
      />
      <p className="text-center text-[20px] leading-[30px] font-normal text-[#01080D] mt-8">
        {name}
      </p>
      <p className="text-center text-xs font-normal text-[#565757] mb-3">
        {tagline}
      </p>
      {isRegistrationOpen ? <Link className="link__btn__default" href={`/events/register/${id}`}>
        Register Now
      </Link> : <Link className="link__btn__outline-primary" href={`#`}>
        Learn More
      </Link>}
    </div>
  );
}

export default EventCard;
