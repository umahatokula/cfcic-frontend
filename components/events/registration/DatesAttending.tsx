"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function DatesAttending() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EventRegistrationDatesAttending>({
    // defaultValues: { ...biodata },
    // resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);

    const haveKidsDetails = data.haveKidsDetails == "on" ? true : false;
    if (haveKidsDetails) {
      router.push("/profile/kids");
    } else {
      router.push("/profile/center-details");
    }
  };

  return (
    <>
      <form className="w-full mt-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                style={{ padding: 5 }}
                type="radio"
                value={"off"}
                className="radio checked:border-accent border-accent"
              />
              <span className="">Please remind me later</span>
            </label>
          </div>
          <div className=""></div>
        </div>
      </form>
    </>
  );
}

export default DatesAttending;
