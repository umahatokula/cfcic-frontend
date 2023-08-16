import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getSingleEvent, getUserEventRegistration } from "@/app/utils/events";
import Register from "@/components/events/Register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const event = await getSingleEvent(params.id);
  // const userEvent = await getUserEventRegistration(session?.user?.access_token!, params.id, session?.user?.user?.id!);

  return (
    <>
      <Register event={event} userEvent={null} />
    </>
  );
}

export default page;
