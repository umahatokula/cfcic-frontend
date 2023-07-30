import { Event, EventProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function EventCard({ event }: EventProps) {
  const { id, name, tagline, banner_image, start_date }: Event = event;
  return (
    <div>
      <p>{start_date}</p>
      <Image
        className="rounded-tr-xl rounded-bl-xl rounded-tl-sm rounded-br-sm"
        src={banner_image}
        alt={name}
        width={15}
        height={15}
      />
      <p>{name}</p>
      <p>{tagline}</p>
      <Link className="link__btn__default" href={`/events/register/${id}`} />
    </div>
  );
}

export default EventCard;
