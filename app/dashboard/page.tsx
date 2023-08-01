import Account from '@/components/Account';
import Administrative from '@/components/Administrative';
import Card from '@/components/Card';
import React from 'react'

function DashboardPage() {
  return (
    <>
      <p className="text-base font-medium text-center mt-10">Dashboard</p>
      <div className="w-full grid grid-cols-2 gap-5 mt-5">
        <Card
          heading="WordShop"
          Body="Buy Mp3 messages, books"
          img="/customer_support.svg"
          link="/"
        />
        <Card
          heading="Growth Track"
          Body="Complete 4 short modules and become a full member of CFCIC"
          img="/up.png"
          link="/"
        />
        <Card
          heading="Finance"
          Body="Partnership, Tithes, Offerings and Seeds"
          img="/cash.png"
          link="/"
        />
        <Card
          heading="Events"
          Body="Register for Believers’ Conventions & Faith Adventures"
          img="/20.png"
          link="/"
        />
        <Card
          heading="Publications"
          Body="Higher Life Magazine, Euphoria Devotional"
          img="/30.png"
          link="/"
        />
        <Card
          heading="NCBI"
          Body="Enrol for courses in the New Creation Bible Institute"
          img="/nc.png"
          link="/"
        />
      </div>
      <p className="text-base font-medium text-center mt-10">Manage Account</p>
      <div className="w-full grid grid-cols-2 gap-5 mt-5">
        <Card
          heading="My Profile"
          Body="Update profile"
          img="/use.png"
          link="/"
        />
        <Card
          heading="Settings"
          Body="Manage personal preferences, Notifications"
          img="/see.png"
          link="/"
        />
      </div>
      <p className="text-base font-medium text-center m-10">
        Administrative Handles
      </p>
      <div className="w-full grid grid-cols-2 gap-5 mt-5">
        <Card
          heading="Life Care Crew"
          Body="Edit profile, Set preferences"
          img="/link.png"
          link="/"
        />
        <Card
          heading="Partnership"
          Body="Manage partnership details for your centre"
          img="/pa.png"
          link="/"
        />
        <Card
          heading="Service Team"
          Body="Manage the details of your team & share reports"
          img="/men.png"
          link="/"
        />
        <Card
          heading="Home Cell"
          Body="Manage details for your home cell"
          img="/home.png"
          link="/"
        />
      </div>
    </>
  );
}

export default DashboardPage