export async function getEvents() {
  const res = await fetch("https://cfc-app.onrender.com/event");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
