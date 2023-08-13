"use client";

import React from "react";
import InfoCard from "./registration/InfoCard";
import RegistrationPageDivider from "./registration/RegistrationPageDivider";
import AttendanceMode from "./registration/AttendanceMode";
import AttendanceRequiredServices from "./registration/AttendanceRequiredServices";
import { useAppStore } from "@/lib/store";
import NewDependents from "./registration/NewDependents";

interface RegisterProps {
  event: Event;
}

function Register({ event }: RegisterProps) {
  const { registration, regFormStep } = useAppStore();

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

      {regFormStep === 1 && (
        <>
          <AttendanceMode event={event!} />

          {event && registration.in_person == "1" && (
            <AttendanceRequiredServices event={event!} />
          )}
        </>
      )}

      {regFormStep === 2 && <NewDependents />}
    </div>
  );
}

export default Register;
