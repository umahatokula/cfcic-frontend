import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProfileHeader from "@/components/ProfileHeader";
import FormOne from "@/components/profile/centerDetails/FormOne";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function CenterDetailPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <div>
      <ProfileHeader
        activeStep={3}
        showBackButton={true}
        heading="Church Details"
        subHeading="Tell us a bit about yourself so we can serve you better."
        backUrl={"/profile/kids"}
      />

      <FormOne />
    </div>
  );
}

export default CenterDetailPage;
