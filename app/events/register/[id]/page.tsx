import { getAuthCookie } from "@/app/actions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getSingleEvent, getUserEventRegistration } from "@/app/utils/events";
import Register from "@/components/events/Register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const token = await getAuthCookie();
  if (!token) redirect("/login");

  const event = await getSingleEvent(params.id);

  return (
    <>
      <Register event={event} userEvent={null} />
    </>
  );
}

export default page;
