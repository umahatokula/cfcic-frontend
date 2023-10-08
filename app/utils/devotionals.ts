import api from "@/lib/axios";

// Get all events
export async function getTodaysDevotional() {
  const devotional = await (
    await api()
  )
    .get(`${process.env.NEXT_PUBLIC_API_URL}/devotional/today`)
    .then((res) => {
      return res.data.data;
    })
    .catch((e) => {
      console.log("🚀 ~ file: devotionals.ts:12 ~ getTodaysDevotional ~ e:", e);
    });

  return devotional;
}
