import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/${id}`);
  const data = await res.json();
  console.log("🚀 ~ file: route.ts:10 ~ data:", data)

  return NextResponse.json({ data });
}
