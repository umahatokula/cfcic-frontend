"use client";

import ProfileHeader from "@/components/ProfileHeader";
import Button from "@/components/forms/Button";
import { FinancialCommitmentInputs } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function FinancialCommitmentsPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FinancialCommitmentInputs>();
  const onSubmit: SubmitHandler<FinancialCommitmentInputs> = (data: any) => {
    console.log(data);
    // router.push("/profile/financial-commitments");
  };
  return (
    <div>
      <ProfileHeader
        activeStep={4}
        showBackButton={true}
        heading="Financial Commitments"
        subHeading="Tell us a bit about yourself so we can serve you better."
        backUrl={"profile/center-details"}
      />
      <form className="w-full mt-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          {/* Are you a tither? */}
          <div className="">
            <label>Are you a tither?</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("tither", { required: true })}
              >
                <option value="1">Yes</option>
                <option value="1">No</option>
              </select>
            </div>
            {errors.tither && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Are you a Partner? */}
          <div className="">
            <label>Are you a Partner?</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("partner", { required: true })}
              >
                <option value="1">Yes</option>
                <option value="1">Not yet</option>
                <option value="1">I’m not interested</option>
              </select>
            </div>
            {errors.partner && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* What Arm(s) do you Partner with? */}
          <div className="">
            <label>What Arm(s) do you Partner with?</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("partnershipArm", { required: true })}
              >
                <option value="1">Publications - Euphoria devotional, Higher life magazine</option>
                <option value="0">Programs & Ministry - Faith Adventures, Rev. Arome Tokula’s ministry trips</option>
                <option value="2">WOMOC - Wavelength broadcast, Livestream</option>
              </select>
            </div>
            {errors.partnershipArm && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* How often would you like to pay? */}
          <div className="">
            <label>How often would you like to pay?</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("partnershipFrequency", { required: true })}
              >
                <option value="1">Monthly</option>
                <option value="1">Bi-monthly</option>
                <option value="1">Quarterly</option>
              </select>
            </div>
            {errors.partnershipFrequency && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="mt-20 gap-y-6 grid">
          <Button
            bgColor="bg-accent"
            textColor="text-white"
            borderColor="border-[#77858C]"
            type="submit"
            btnText="Proceed"
          />
          <Link
            className="link__btn__outline-primary block"
            href={"/"}
          >
            Skip for Now
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FinancialCommitmentsPage;
