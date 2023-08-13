import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProfileHeader from "@/components/ProfileHeader";
import FormOne from "@/components/profile/kids/FormOne";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function AddKidsPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <div>
      <ProfileHeader
        activeStep={2}
        showBackButton={true}
        heading="Register Your Kids"
        subHeading="Please tell us a little bit about your kids"
        backUrl={"/profile/biodata"}
      />

      <FormOne />
    </div>
  );
}

export default AddKidsPage;
