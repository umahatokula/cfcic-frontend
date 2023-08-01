import Account from '@/components/Account';
import Administrative from '@/components/Administrative';
import DashboardCard from '@/components/DashboardCard';
import React from 'react'

function DashboardPage() {
  return (
    <>
      <p className="text-base font-medium text-center mt-10">Dashboard</p>
      <div className="w-full grid grid-cols-2 gap-5 mt-5">
        <DashboardCard
          heading="WordShop"
          body="Buy Mp3 messages, books"
          img="/customer_support.svg"
          link="/"
        />
        <DashboardCard
          heading="Growth Track"
          body="Complete 4 short modules and become a full member of CFCIC"
          img="/up.png"
          link="/"
        />
        <DashboardCard
          heading="Finance"
          body="Partnership, Tithes, Offerings and Seeds"
          img="/cash.png"
          link="/"
        />
        <DashboardCard
          heading="Events"
          body="Register for Believers’ Conventions & Faith Adventures"
          img="/20.png"
          link="/"
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
      <p className="text-base font-medium text-center mt-10">Manage Account</p>
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
      <p className="text-base font-medium text-center m-10">
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
      </div>
    </>
  );
}

export default DashboardPage