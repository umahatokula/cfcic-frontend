"use client";

import ProfileHeader from "@/components/ProfileHeader";
import FormOne from "@/components/profile/financialCommitment/FormOne";
import React from "react";

function FinancialCommitmentsPage() {

  return (
    <div>
      <ProfileHeader
        activeStep={4}
        showBackButton={true}
        heading="Financial Commitments"
        subHeading="Tell us a bit about yourself so we can serve you better."
        backUrl={"/profile/center-details"}
      />
      <FormOne />
    </div>
  );
}

export default FinancialCommitmentsPage;
