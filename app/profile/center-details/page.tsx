"use client";

import ProfileHeader from "@/components/ProfileHeader";
import Button from "@/components/forms/Button";
import { useAppStore } from "@/lib/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function CenterDetailPage() {

  const { centerDetails, setCenterDetails } = useAppStore();
  
  const { data: session, status } = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CenterDetails>({
    defaultValues: { ...centerDetails },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    setCenterDetails(data)
    router.push("/profile/financial-commitments");
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  return (
    <div>
      <ProfileHeader
        activeStep={3}
        showBackButton={true}
        heading="Church Details"
        subHeading="Tell us a bit about yourself so we can serve you better."
        backUrl={"/profile/kids"}
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
                {...register("church_join_date")}
              />
            </div>
            {errors.church_join_date && (
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
                {...register("church_centre_id", { required: true })}
              >
                <option value="1">CFC Abuja</option>
                <option value="2">CFC Benin</option>
                <option value="3">CFC Gboko</option>
                <option value="4">CFC Kaduna</option>
                <option value="5">CFC Lagos</option>
                <option value="6">CFC Makurdi</option>
                <option value="7">CFC Otukpo</option>
                <option value="8">CFC Sagamu</option>
              </select>
            </div>
            {errors.church_centre_id && (
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
                {...register("growth_track_completed", { required: true })}
              >
                <option value="1">Yes</option>
                <option value="0">Not yet</option>
                <option value="2">I’m not interested</option>
              </select>
            </div>
            {errors.growth_track_completed && (
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
                {...register("service_team", { required: true })}
              >
                <option value="0">I don’t have one</option>
                <option value="1">1913 Hub</option>
                <option value="2">31st Ladies</option>
                <option value="3">Art & Aesthetics</option>
                <option value="4">The EDGE</option>
                <option value="5">Face 2 Face</option>
                <option value="6">Gate Keepers</option>
                <option value="7">Host</option>
                <option value="8">CFC Kids Ministry</option>
                <option value="9">Media</option>
                <option value="10">Men of Faith</option>
                <option value="11">Partnership Service</option>
                <option value="12">Prayer & Counselling</option>
                <option value="13">Protocol</option>
                <option value="14">Reception</option>
                <option value="15">Sentry</option>
                <option value="16">Social Media & Content Marketing</option>
                <option value="17">Transportation</option>
                <option value="18">Ushering</option>
                <option value="19">Voice of Creation</option>
                <option value="20">Welfare</option>
              </select>
            </div>
            {errors.service_team && (
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
                {...register("home_cell_id", { required: true })}
                multiple
              >
                <option value="1">North Bank 1 - at the Ahura’s</option>
                <option value="2">Welfare Qtrs 1 - at the Ogbu’s</option>
                <option value="3">Judges Qtrs - at the Abutu’s</option>
                <option value="4">Welfare Qtrs 3 - at the Yero’s</option>
                <option value="5">George Akume Way - at the Ikpambese’s</option>
                <option value="6">
                  International Market Axis - at the Samu’s
                </option>
                <option value="7">Nyiman Layout - at the Akor-Ikpam’s</option>
                <option value="8">Kanshio 1 - at the Ishenge’s</option>
                <option value="9">North bank 2 - at the Dzever’s</option>
                <option value="10">Old GRA - at the Aba’s</option>
                <option value="12">Mobile Barracks Road - at the Attah’s</option>
                <option value="13">Gyado Villa - at the Ajogo’s</option>
                <option value="14">High Level - at Minister Doosuur’s</option>
                <option value="15">Welfare Qtrs 2 - at the Agur’s</option>
              </select>
            </div>
            {errors.home_cell_id && (
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
                {...register("colony_id", { required: true })}
              >
                <option value="1">Gateway</option>
                <option value="2">Dominion</option>
                <option value="3">The Core</option>
                <option value="4">Welfare Qtrs 3 - at the Yero’s</option>
                <option value="5">Corner Stone</option>
                <option value="6">Light House</option>
              </select>
            </div>
            {errors.colony_id && (
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
                {...register("roles_and_responsibilities", { required: true })}
                multiple
              >
                <option value="0">Not Applicable</option>
                <option value="2">Resident Pastor</option>
                <option value="3">Pastor</option>
                <option value="4">Minister</option>
                <option value="5">Church Administrator</option>
                <option value="6">Life Care Crew Co-ordinator</option>
                <option value="7">Cell Church Ministry Co-ordinator</option>
                <option value="8">Cell Leader</option>
                <option value="9">Colony Leader</option>
                <option value="10">Partnership Co-ordinator</option>
                <option value="11">Team Captain</option>
                <option value="12">Team Captain (Assistant)</option>
              </select>
            </div>
            {errors.roles_and_responsibilities && (
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
