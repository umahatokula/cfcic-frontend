"use client";

import ProfileHeader from "@/components/ProfileHeader";
import Button from "@/components/forms/Button";
import { CenterDetailsInputs } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function CenterDetailPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CenterDetailsInputs>();
  const onSubmit: SubmitHandler<CenterDetailsInputs> = (data: any) => {
    console.log(data);
    // router.push("/profile/financial-commitments");
  };
  return (
    <div>
      <ProfileHeader
        activeStep={3}
        showBackButton={true}
        heading="Church Details"
        subHeading="Tell us a bit about yourself so we can serve you better."
        backUrl={"profile/kids"}
      />
      <form className="w-full mt-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          {/* What year did you join CFC? */}
          <div className="">
            <label>What year did you join CFC?</label>
            <div className="form__input flex justify-between">
              <input
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                type="number"
                {...register("yearJoined")}
              />
            </div>
            {errors.yearJoined && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* What centre do you belong to? */}
          <div className="">
            <label>What centre do you belong to?</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("center", { required: true })}
              >
                <option value="1">CFC Abuja</option>
                <option value="1">CFC Benin</option>
                <option value="1">CFC Gboko</option>
                <option value="1">CFC Kaduna</option>
                <option value="1">CFC Lagos</option>
                <option value="1">CFC Makurdi</option>
                <option value="1">CFC Otukpo</option>
                <option value="0">CFC Sagamu</option>
              </select>
            </div>
            {errors.center && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Completed Growth Track? */}
          <div className="">
            <label>Completed Growth Track?</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("completedGrowthTrack", { required: true })}
              >
                <option value="1">Yes</option>
                <option value="0">Not yet</option>
                <option value="2">I’m not interested</option>
              </select>
            </div>
            {errors.completedGrowthTrack && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Service Team / Ministry Team */}
          <div className="">
            <label>Service Team / Ministry Team</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("serviceOrMinistryTeam", { required: true })}
              >
                <option value="1">I don’t have one</option>
                <option value="1">1913 Hub</option>
                <option value="1">31st Ladies</option>
                <option value="1">Art & Aesthetics</option>
                <option value="1">The EDGE</option>
                <option value="1">Face 2 Face</option>
                <option value="1">Gate Keepers</option>
                <option value="1">Host</option>
                <option value="1">CFC Kids Ministry</option>
                <option value="1">Media</option>
                <option value="1">Men of Faith</option>
                <option value="1">Partnership Service</option>
                <option value="1">Prayer & Counselling</option>
                <option value="1">Protocol</option>
                <option value="1">Reception</option>
                <option value="1">Sentry</option>
                <option value="1">Social Media & Content Marketing</option>
                <option value="1">Transportation</option>
                <option value="1">Ushering</option>
                <option value="1">Voice of Creation</option>
                <option value="0">Welfare</option>
              </select>
            </div>
            {errors.serviceOrMinistryTeam && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Home Cell */}
          <div className="">
            <label>Home Cell</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("homeCell", { required: true })}
              >
                <option value="1">North Bank 1 - at the Ahura’s</option>
                <option value="1">Welfare Qtrs 1 - at the Ogbu’s</option>
                <option value="1">Judges Qtrs - at the Abutu’s</option>
                <option value="1">Welfare Qtrs 3 - at the Yero’s</option>
                <option value="1">George Akume Way - at the Ikpambese’s</option>
                <option value="1">
                  International Market Axis - at the Samu’s
                </option>
                <option value="1">Nyiman Layout - at the Akor-Ikpam’s</option>
                <option value="1">Kanshio 1 - at the Ishenge’s</option>
                <option value="1">North bank 2 - at the Dzever’s</option>
                <option value="1">Old GRA - at the Aba’s</option>
                <option value="1">Mobile Barracks Road - at the Attah’s</option>
                <option value="1">Gyado Villa - at the Ajogo’s</option>
                <option value="1">High Level - at Minister Doosuur’s</option>
                <option value="1">Welfare Qtrs 2 - at the Agur’s</option>
              </select>
            </div>
            {errors.homeCell && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Colony */}
          <div className="">
            <label>Colony</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("colony", { required: true })}
              >
                <option value="1">Gateway</option>
                <option value="1">Dominion</option>
                <option value="1">The Core</option>
                <option value="1">Welfare Qtrs 3 - at the Yero’s</option>
                <option value="1">Corner Stone</option>
                <option value="0">Light House</option>
              </select>
            </div>
            {errors.colony && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Roles & Responsibilities */}
          <div className="">
            <label>Roles & Responsibilities</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("rolesAndResponsibilities", { required: true })}
              >
                <option value="1">Not Applicable</option>
                <option value="1">Resident Pastor</option>
                <option value="1">Pastor</option>
                <option value="1">Minister</option>
                <option value="1">Church Administrator</option>
                <option value="1">Life Care Crew Co-ordinator</option>
                <option value="1">Cell Church Ministry Co-ordinator</option>
                <option value="1">Cell Leader</option>
                <option value="1">Colony Leader</option>
                <option value="1">Partnership Co-ordinator</option>
                <option value="1">Team Captain</option>
                <option value="1">Team Captain (Assistant)</option>
              </select>
            </div>
            {errors.rolesAndResponsibilities && (
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
            href={"/profile/financial-commitments"}
          >
            Skip for Now
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CenterDetailPage;
