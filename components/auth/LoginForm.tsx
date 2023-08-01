"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { LoginFormInputs } from "@/types";
import Button from "../forms/Button";

function LoginForm() {
  const [showPasswordField, setShowPasswordField] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const onSubmit: SubmitHandler<LoginFormInputs> = (data: any) =>
    console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <div className="">
          <label>Email</label>
          <div className="form__input flex justify-between">
            <input
              className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="">
          <label>Password</label>
          <div className="form__input flex justify-between items-center">
            <input
              className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
              type={showPasswordField ? "text" : "password"}
              {...register("password", { required: true })}
            />

            <div
              className="cursor-pointer h-full w-10 grid place-items-center"
              onClick={() => {
                setShowPasswordField(!showPasswordField);
              }}
            >
              {showPasswordField ? (
                <PiEyeLight className="w-6 h-6 ml-0" />
              ) : (
                <PiEyeSlashLight className="w-6 h-6 ml-0" />
              )}
            </div>
            {errors.password && <span>This field is required</span>}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Button
          bgColor="bg-accent"
          textColor="text-white"
          type="button"
          btnText="Login"
        />
      </div>
    </form>
  );
}

export default LoginForm;
