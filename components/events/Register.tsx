"use client";

import React, { useEffect } from "react";
import InfoCard from "./registration/InfoCard";
import RegistrationPageDivider from "./registration/RegistrationPageDivider";
import AttendanceMode from "./registration/AttendanceMode";
import AttendanceRequiredServices from "./registration/AttendanceRequiredServices";
import { useAppStore } from "@/lib/store";
import NewDependents from "./registration/NewDependents";
import ComingWithKids from "./registration/ComingWithKids";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useIsMounted } from "@/hooks/useIsMounted";

interface RegisterProps {
  event: Event;
  userEvent: Event | null;
}

function Register({ event, userEvent }: RegisterProps) {
  const isMounted = useIsMounted();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const step = searchParams.get("step");
  const kids = searchParams.get("kids");

  const { registration, reg_form_step, coming_with_kids } = useAppStore();

  useEffect(() => {
    console.log("route change with dependency", pathname);
  }, [router]);

  if(!isMounted) return;

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

      {step  == "1" || !step && (
        <>
          <AttendanceMode event={event!} />
        </>
      )}

      {step == "2" && !kids && <ComingWithKids event={event!} />}

      {step == "2" && kids == 'true' && <NewDependents />}

      {step == "3" && registration.in_person == "1" && (
        <AttendanceRequiredServices event={event!} />
      )}
    </div>
  );
}

export default Register;
