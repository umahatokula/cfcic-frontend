import ProfileHeader from "@/components/ProfileHeader";
import React from "react";
import FormOne from "@/components/profile/biodata/FormOne";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function BioDataPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

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
