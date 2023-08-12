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

// Example usage:
const isoDateString = "2023-08-15T10:00:00.000Z";
const formattedDate = formatDateToMonthDayYear(isoDateString);
console.log(formattedDate);

export async function getEvents() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const events = res.json();

  return events;
}

export async function getSingleEvent(id: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
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
    requires_accomodation: data.requires_accomodation == "1" ? true : false,
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/attendance`, {
    method: "POST",
    body: JSON.stringify({
      ...validatedData,
    }),
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + access_token,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
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
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
