import Account from '@/components/Account';
import Administrative from '@/components/Administrative';
import Card from '@/components/Card';
import NavBar from '@/components/user_dashboard';
import React from 'react'

function page() {
  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center space-x-5 mt-10">
        <Card
          heading="WordShop"
          Body="Buy Mp3 messages, books"
          img="/phone.png"
        />
        <Card
          heading="Growth Track"
          Body="Complete 4 short modules and become a full member of CFCIC"
          img="up.png"
        />
      </div>
      <div className="flex items-center justify-center space-x-5 mt-10">
        <Card
          heading="Finance"
          Body="Partnership, Tithes, Offerings and Seeds"
          img="cash.png"
        />
        <Card
          heading="Events"
          Body="Register for Believers’ Conventions & Faith Adventures"
          img="20.png"
        />
      </div>
      <div className="flex items-center justify-center space-x-5 mt-10">
        <Card
          heading="Publications"
          Body="Higher Life Magazine, Euphoria Devotional"
          img="30.png"
        />
        <Card
          heading="NCBI"
          Body="Enrol for courses in the New Creation Bible Institute"
          img="nc.png"
        />
      </div>
      <Account />
      <div className="flex items-center justify-center space-x-5 mt-10">
        <Card heading="My Profile" Body="Update profile" img="use.png" />
        <Card
          heading="Settings"
          Body="Manage personal preferences, Notifications"
          img="see.png"
        />
      </div>
      <Administrative />
      <div className="flex items-center justify-center space-x-5 mt-10">
        <Card
          heading="Life Care Crew"
          Body="Edit profile, Set preferences"
          img="link.png"
        />
        <Card
          heading="Partnership"
          Body="Manage partnership details for your centre"
          img="pa.png"
        />
      </div>
      <div className="flex items-center justify-center space-x-5 mt-10">
        <Card
          heading="Service Team"
          Body="Manage the details of your team & share reports"
          img="men.png"
        />
        <Card
          heading="Home Cell"
          Body="Manage details for your home cell"
          img="home.png"
        />
      </div>
    </div>
  );
}

export default page