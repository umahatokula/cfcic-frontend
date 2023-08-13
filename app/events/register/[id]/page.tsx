import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getSingleEvent } from "@/app/utils/events";
import Register from "@/components/events/Register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const event = await getSingleEvent(params.id);
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <>
      <Register event={event} />
    </>
  );
}

export default page;
