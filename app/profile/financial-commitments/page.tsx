"use client";

import ProfileHeader from "@/components/ProfileHeader";
import Button from "@/components/forms/Button";
import FormOne from "@/components/profile/financialCommitment/FormOne";
import FormTwo from "@/components/profile/financialCommitment/FormTwo";
import { useAppStore } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function FinancialCommitmentsPage() {
  const { financialCommitments, setFinancialCommitments } = useAppStore();

  return (
    <div>
      <ProfileHeader
        activeStep={4}
        showBackButton={true}
        heading="Financial Commitments"
        subHeading="Tell us a bit about yourself so we can serve you better."
        backUrl={"profile/center-details"}
      />
      {financialCommitments.isPartner !== "1" ? <FormOne /> : <FormTwo />}
    </div>
  );
}

export default FinancialCommitmentsPage;
