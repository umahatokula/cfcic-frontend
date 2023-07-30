import EventCard from "@/components/EventCard";
import React from "react";
import { getEvents } from "../utils/events";
import { Event } from "@/types";

async function EventsPage() {
  const events: Event[] = await getEvents();
  const [upcomingEvent, ...otherevents]: [Event, ...Event[]] = events;
  return (
    <div>
      <p className="text-[20px] leading-[30px] font-normal text-[#01080D]">
        Events & Programs
      </p>
      {upcomingEvent ? (
        <>
          <p className="text-base font-semibold">Upcoming</p>
          <EventCard event={upcomingEvent} />
        </>
      ) : (
        <div className="rounded-xl border p-6 grid place-items-center">
          No events currently
        </div>
      )}

      {otherevents.length > 0 && (
        <>
          <p className="text-base font-semibold">More to come</p>
          {otherevents.map((event) => (
            <EventCard event={upcomingEvent} />
          ))}
        </>
      )}
    </div>
  );
}

export default EventsPage;
