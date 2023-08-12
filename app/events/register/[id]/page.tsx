"use client";

import { getSingleEvent } from "@/app/utils/events";
import AttendanceMode from "@/components/events/registration/AttendanceMode";
import AttendanceRequiredServices from "@/components/events/registration/AttendanceRequiredServices";
import InfoCard from "@/components/events/registration/InfoCard";
import RegistrationPageDivider from "@/components/events/registration/RegistrationPageDivider";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useAppStore } from "@/lib/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function page() {
  const isMounted = useIsMounted();
  const { id } = useParams();
  const [event, setEvent] = useState<CFCICEvent>();
  const { registration } = useAppStore();
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      const event = await getSingleEvent(id);
      setEvent(event);
    };
    init();
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  if (!isMounted) return;

  return (
    <div>
      <p className="text-[20px] leading-[30px] font-normal text-[#01080D] mb-8">
        Registration
      </p>

      <p className="text-base mb-6">
        Events \ {event?.name} \{" "}
        <span className="font-semibold">Registration</span>
      </p>

      <InfoCard
        iconUrl="/happy_heart.svg"
        content={`Yay! We are excited to have you fellowship with us at ${event?.name}. We trust this will change your life forever.`}
      />

      <RegistrationPageDivider />

      <AttendanceMode event={event!} />

      {event && registration.in_person == "1" && (
        <AttendanceRequiredServices event={event!} />
      )}
    </div>
  );
}

export default page;
