import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProfileHeader from "@/components/ProfileHeader";
import FormOne from "@/components/profile/financialCommitment/FormOne";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React  from "react";

async function FinancialCommitmentsPage() {

  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <>
      <ProfileHeader
        activeStep={4}
        showBackButton={true}
        heading="Financial Commitments"
        subHeading="Tell us a bit about yourself so we can serve you better."
        backUrl={"/profile/center-details"}
      />
      
      <FormOne />
    </>
  );
}

export default FinancialCommitmentsPage;
