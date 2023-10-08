"use client";

import React from "react";
import DashboardCard from "./DashboardCard";
import RegistrationPageDivider from "../events/registration/RegistrationPageDivider";
import { useIsMounted } from "@/hooks/useIsMounted";

function Dashboard() {
  const isMounted = useIsMounted();

  if (!isMounted) return;

  return (
    <>
      <RegistrationPageDivider />
      <p className="text-base font-medium text-center mb-10 mt-3">Dashboard</p>
      <div className="w-full grid grid-cols-2 gap-5 mt-5">
        <DashboardCard
          heading="WordShop"
          body="Buy Mp3 messages, books"
          img="/customer_support.svg"
          link="https://wordshop.christfamilyministries.org/"
        />
        <DashboardCard
          heading="Growth Track"
          body="Complete 4 short modules and become a full member of CFCIC"
          img="/up.png"
          link="https://growth.christfamilyministries.org/"
        />
        <DashboardCard
          heading="Finance"
          body="Partnership, Tithes, Offerings and Seeds"
          img="/cash.png"
          link="/"
        />
        <DashboardCard
          heading="Events"
          body="Our Ministry Events"
          img="/20.png"
          link="/events"
        />
        <DashboardCard
          heading="Publications"
          body="Higher Life Magazine, Euphoria Devotional"
          img="/30.png"
          link="/"
        />
        <DashboardCard
          heading="NCBI"
          body="Enrol for courses in the New Creation Bible Institute"
          img="/nc.png"
          link="/"
        />
      </div>
    </>
  );
}

export default Dashboard;
