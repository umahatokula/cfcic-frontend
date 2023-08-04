"use client";

import ProfileHeader from "@/components/ProfileHeader";
import Button from "@/components/forms/Button";
import { KidsDataInputs, NewKid, NewKidInputs } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";

function AddKidsPage() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewKidInputs>();
  const [kids, setKids] = React.useState<NewKid[]>([]);

  const handleAddTask = ({ newKid }: NewKidInputs) => {
    if (
      newKid.name.trim() !== "" &&
      newKid.birthday &&
      newKid.allergies &&
      newKid.emergency_contact
    ) {
      setKids([...kids, newKid]);
      reset();
    }
  };

  const handleRemoveTask = (index: number) => {
    const updatedTasks = kids.filter((_, i) => i !== index);
    setKids(updatedTasks);
  };

  return (
    <div>
      <ProfileHeader
        activeStep={2}
        showBackButton={true}
        heading="Register Your Kids"
        subHeading="Please tell us a little bit about your kids"
        backUrl={'biodata'}
      />

      <div>
        <form onSubmit={handleSubmit(handleAddTask)}>
          {/* Name */}
          <div className="mt-4">
            <Controller
              name="newKid.name"
              control={control}
              defaultValue=""
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <div className="">
                  <label>Full Name</label>
                  <div className="form__input flex justify-between">
                    <input
                      className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                      type="text"
                      {...field}
                      placeholder="Enter kid's name"
                    />
                  </div>
                </div>
              )}
            />
            {errors["newKid.name"] && (
              <p>
                <span className="text-red-500 text-xs">
                  {errors["newKid.name"].message}
                </span>
              </p>
            )}
          </div>
          {/* Birthday */}
          <div className="mt-4">
            <Controller
              name="newKid.birthday"
              control={control}
              defaultValue=""
              rules={{ required: "Birthday is required" }}
              render={({ field }) => (
                <div className="">
                  <label>Birthday</label>
                  <div className="form__input flex justify-between">
                    <input
                      className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                      type="date"
                      {...field}
                      placeholder="Enter birthday"
                    />
                  </div>
                </div>
              )}
            />
            {errors["newKid.birthday"] && (
              <p>
                <span className="text-red-500 text-xs">
                  {errors["newKid.birthday"].message}
                </span>
              </p>
            )}
          </div>
          {/* Allergies */}
          <div className="mt-4">
            <Controller
              name="newKid.allergies"
              control={control}
              defaultValue=""
              rules={{ required: "Allergies is required" }}
              render={({ field }) => (
                <div className="">
                  <label>Allergies</label>
                  <div className="form__input flex justify-between">
                    <input
                      className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                      type="text"
                      {...field}
                      placeholder="Enter comma separated allergies"
                    />
                  </div>
                </div>
              )}
            />
            {errors["newKid.allergies"] && (
              <p>
                <span className="text-red-500 text-xs">
                  {errors["newKid.allergies"].message}
                </span>
              </p>
            )}
          </div>
          {/* Emergency Contact */}
          <div className="mt-4">
            <Controller
              name="newKid.emergency_contact"
              control={control}
              defaultValue=""
              rules={{ required: "Emergency contact is required" }}
              render={({ field }) => (
                <div className="">
                  <label>Emergency Contact</label>
                  <div className="form__input flex justify-between">
                    <input
                      className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                      type="text"
                      {...field}
                      placeholder="Enter an emergency contact"
                    />
                  </div>
                </div>
              )}
            />
            {errors["newKid.emergency_contact"] && (
              <p>
                <span className="text-red-500 text-xs">
                  {errors["newKid.emergency_contact"].message}
                </span>
              </p>
            )}
          </div>
          <button className="flex justify-end mt-8" type="submit">
            <div className="flex space-x-2 font-semibold text-accent items-center">
              {/* <Image src={"/plus.svg"} alt="icon" width={15} height={15} /> */}
              <BsPlusCircle className="w-5 h-5" width={15} height={15} />
              <span className="text-base">
                Register {kids.length > 0 ? "another" : "a"} kid
              </span>
            </div>
          </button>
        </form>

        <ul>
          {kids.map((kid, index) => (
            <div className="mt-8">
              <li key={index}>
                <span>{kid.name}</span>
                <br />
                Birthday: {kid.birthday}
                <br />
                Allergies: {kid.allergies}
              </li>
              <button
                onClick={() => handleRemoveTask(index)}
                className="flex justify-end mt-2"
                type="submit"
              >
                <div className="flex space-x-2 font-semibold text-red-500 items-center">
                  {/* <Image src={"/plus.svg"} alt="icon" width={15} height={15} /> */}
                  <AiOutlineMinusCircle
                    className="w-5 h-5"
                    width={15}
                    height={15}
                  />
                  <span className="text-base">Remove kid</span>
                </div>
              </button>
            </div>
          ))}
        </ul>
      </div>

      <div className="mt-20 gap-y-6 grid">
        <Link className="link__btn__default block" href={"/profile/center-details"}>
          Next
        </Link>
        <Link className="link__btn__outline-primary block" href={"/profile/financial-commitments"}>
          Skip for Now
        </Link>
      </div>
    </div>
  );
}

export default AddKidsPage;
