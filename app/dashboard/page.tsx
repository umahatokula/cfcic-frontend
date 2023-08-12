"use client";

import DashboardCard from "@/components/DashboardCard";
import RegistrationPageDivider from "@/components/events/registration/RegistrationPageDivider";
import { useAppStore } from "@/lib/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function DashboardPage() {
  const { addUser } = useAppStore();
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
    if (!session) return;

    const { user: sessionData } = session as any;

    const user = sessionData?.user;
    const access_token = sessionData?.access_token as any;

    addUser(user, access_token);
  }, [status, session]);

  return (
    <>
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
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
      {/* <RegistrationPageDivider />
      <p className="text-base font-medium text-center mb-10 mt-3">
        Manage Account
      </p>
      <div className="w-full grid grid-cols-2 gap-5 mt-5">
        <DashboardCard
          heading="My Profile"
          body="Update profile"
          img="/use.png"
          link="/"
        />
        <DashboardCard
          heading="Settings"
          body="Manage personal preferences, Notifications"
          img="/see.png"
          link="/"
        />
      </div>
      <RegistrationPageDivider />
      <p className="text-base font-medium text-center mb-10 mt-3">
        Administrative Handles
      </p>
      <div className="w-full grid grid-cols-2 gap-5 mt-5">
        <DashboardCard
          heading="Life Care Crew"
          body="Edit profile, Set preferences"
          img="/link.png"
          link="/"
        />
        <DashboardCard
          heading="Partnership"
          body="Manage partnership details for your centre"
          img="/pa.png"
          link="/"
        />
        <DashboardCard
          heading="Service Team"
          body="Manage the details of your team & share reports"
          img="/men.png"
          link="/"
        />
        <DashboardCard
          heading="Home Cell"
          body="Manage details for your home cell"
          img="/home.png"
          link="/"
        />
      </div> */}
    </>
  );
}

export default DashboardPage;
