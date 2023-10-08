import api from "@/lib/axios";
import { getAuthCookie } from "../actions";

export function formatDateToMonthDayYear(isoDateString: string) {
  const isoDate = new Date(isoDateString);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[isoDate.getMonth()];
  const day = isoDate.getDate();
  const year = isoDate.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
}

// Get all events
export async function getEvents() {

  const events = await (await api())
    .get(`${process.env.NEXT_PUBLIC_API_URL}/event`)
    .then((res) => {
      return res.data.data;
    })
    .catch((e) => {
      console.log(
        "🚀 ~ file: events.ts:39 ~ getEvents ~ e:",
        e?.response?.data
      );
    });

  return events;
}

// Get single event
export async function getSingleEvent(eventId: any) {
  const event = (await api())
    .get(`${process.env.NEXT_PUBLIC_API_URL}/event/${eventId}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((e) => {
      console.log(
        "🚀 ~ file: events.ts:39 ~ getEvents ~ e:",
        e?.response?.data
      );
    });

  return event;
}

// format registration data properly
export function formatEventRegistrationData(
  data: EventRegistrationAllRequirements,
  event_id: string,
  user_id: string
) {
  const validatedData = {
    ...data,
    event_id: event_id,
    user_id: user_id,
    in_person: data.in_person == "1" ? true : false,
    requires_accommodation: data.requires_accomodation == "1" ? true : false,
    requires_feeding: data.requires_feeding == "1" ? true : false,
    requires_transport: data.requires_transport == "1" ? true : false,
  };

  return validatedData;
}

// register the user
export async function registerForEvent(
  validatedData: EventRegistrationAPIFormat,
  access_token: string
) {
  const event = (await api())
    .post(`${process.env.NEXT_PUBLIC_API_URL}/attendance`, {
      ...validatedData,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(
        "🚀 ~ file: events.ts:39 ~ getEvents ~ e:",
        e?.response?.data
      );
    });

  return event;
}

// Update event registration
export async function updateEventRegistration(
  validatedData: EventRegistrationAPIFormat,
  access_token: string,
  event_id: string
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/attendance/${event_id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        ...validatedData,
      }),
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + access_token,
      },
    }
  );

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
  }

  return res.json();
}

// Update event registration
export async function getUserEventRegistration(
  access_token: string,
  event_id: string,
  user_id: string
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/attendance/${event_id}/${user_id}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + access_token,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Could not fetch user event registration");
  }

  return res.json();
}
