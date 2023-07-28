"use client";

import ProfileHeader from "@/components/ProfileHeader";
import Button from "@/components/forms/Button";
import { KidsDataInputs } from "@/types";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

const addAKid = ({register, errors} : any) => {
  return (
    <div>
      <div className="">
        <label>Are You a CFC Member?</label>
        <div className="form__input flex justify-between">
          <select
            className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
            {...register("phone", { required: true })}
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        {errors.isMember && (
          <span className="text-red-500 text-xs">This field is required</span>
        )}
      </div>
    </div>
  );
};

function AddKidsPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<KidsDataInputs>();
  const onSubmit: SubmitHandler<KidsDataInputs> = (data: any) => console.log(data);

  return (
    <div>
      <ProfileHeader
        activeStep={2}
        showBackButton={true}
        heading="Register Your Kids"
        subHeading="Please tell us a little bit about your kids"
      />
      <form className="w-full mt-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
            
        </div>

        <div className="mt-20">
          <Button
            bgColor="bg-accent"
            textColor="text-white"
            borderColor="border-[#77858C]"
            type="submit"
            btnText="Proceed"
          />
        </div>
      </form>
    </div>
  );
}

export default AddKidsPage;
