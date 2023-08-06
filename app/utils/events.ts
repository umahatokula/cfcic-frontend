export async function getEvents() {
  const res = await fetch("https://cfc-app.onrender.com/event", {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const events = res.json();

  return events;
}

export async function getSingleEvent(id: any) {
  const res = await fetch(`https://cfc-app.onrender.com/event/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
