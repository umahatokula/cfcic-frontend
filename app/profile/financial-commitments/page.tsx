"use client";

import ProfileHeader from "@/components/ProfileHeader";
import FormOne from "@/components/profile/financialCommitment/FormOne";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function FinancialCommitmentsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

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
