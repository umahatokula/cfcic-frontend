"use client";

import ProfileHeader from "@/components/ProfileHeader";
import React from "react";
import { useAppStore } from "@/lib/store";
import { useSession } from "next-auth/react";
import FormOne from "@/components/profile/biodata/FormOne";

function BioDataPage() {

  const { biodata, setBiodata } = useAppStore();

  return (
    <div>
      <ProfileHeader
        activeStep={1}
        showBackButton={false}
        heading="Bio Data"
        subHeading="Tell us a bit about yourself so we can serve you better."
      />
      <FormOne />
    </div>
  );
}

export default BioDataPage;
