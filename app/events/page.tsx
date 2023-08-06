import React from "react";
import { getEvents } from "../utils/events";
import EventCard from "@/components/events/EventCard";

async function EventsPage() {
  const events: Event[] = await getEvents();
  const [upcomingEvent, ...otherevents] = events;

  return (
    <div>
      <p className="text-[20px] leading-[30px] font-normal text-[#01080D] mb-8">
        Events & Programs
      </p>
      {upcomingEvent ? (
        <>
          <p className="text-base font-semibold mb-6">Upcoming</p>
          <EventCard event={upcomingEvent} isRegistrationOpen={true} />
        </>
      ) : (
        <div className="rounded-xl border p-6 grid place-items-center">
          No events currently
        </div>
      )}

      {otherevents.length > 0 && (
        <>
          <p className="text-base font-semibold mt-12 mb-6">More to come</p>
          {otherevents.map((event) => (
            <div className="mt-10">
              <EventCard event={event} isRegistrationOpen={false} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default EventsPage;
