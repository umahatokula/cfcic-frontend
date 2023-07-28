"use client";

import ProfileHeader from "@/components/ProfileHeader";
import Button from "@/components/forms/Button";
import { useForm } from "react-hook-form";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BioDataInputs } from "@/types";

function BioDataPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BioDataInputs>();
  const onSubmit: SubmitHandler<BioDataInputs> = (data: any) => {
    console.log(data);
    router.push("/profile/kids");
  };

  return (
    <div>
      <ProfileHeader
        activeStep={1}
        showBackButton={false}
        heading="Bio Data"
        subHeading="Tell us a bit about yourself so we can serve you better."
      />
      <form className="w-full mt-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
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
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="">
            <label>Phone Number</label>
            <div className="form__input flex justify-between">
              <input
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                type="text"
                {...register("phone", { required: true })}
              />
            </div>
            {errors.phone && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="">
            <label>Occupation</label>
            <div className="form__input flex justify-between">
              <input
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                type="text"
                {...register("occupation")}
              />
            </div>
            {errors.occupation && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="">
            <label>Birthday</label>
            <div className="form__input flex justify-between">
              <input
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                type="date"
                {...register("birthday")}
              />
              <Image
                className="ml-4"
                src="/icon-calendar.svg"
                alt="icon"
                width={15}
                height={15}
              />
            </div>
            {errors.birthday && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="">
            <label>Marital Status</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("maritalStatusId")}
              >
                <option value="1">Single</option>
                <option value="2">Married</option>
                <option value="3">Separated</option>
                <option value="4">Divorced</option>
              </select>
            </div>
            {errors.maritalStatusId && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="">
            <label>Marriage Anniversary</label>
            <div className="form__input flex justify-between">
              <input
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                type="date"
                placeholder="Select a date..."
                {...register("marriageAnniversary")}
              />
              <Image
                className="ml-4"
                src="/icon-calendar.svg"
                alt="icon"
                width={15}
                height={15}
              />
            </div>
            {errors.marriageAnniversary && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="">
            <label>Got Kids?</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("gotKids")}
              >
                <option value="0">No kids yet</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            {errors.gotKids && <span>This field is required</span>}
          </div>

          <div className="">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  className="radio checked:border-black border-black"
                  {...register("tellUsUsAboutYourKids")}
                />
                <span className="">Tell us a bit about your kids</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  className="radio checked:border-black border-black"
                  {...register("tellUsUsAboutYourKids")}
                />
                <span className="">Please remind me later</span>
              </label>
            </div>
          </div>
          {errors.tellUsUsAboutYourKids && (
            <span className="text-red-500 text-xs">This field is required</span>
          )}
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

export default BioDataPage;
