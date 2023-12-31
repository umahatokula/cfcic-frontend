"use client";

import React from "react";
import Button from "../forms/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const schema = yup.object({
  name: yup.string().required("Full name is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  passwordConfirmation: yup
    .string()
    .test("password-should-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    })
    .required("Password Confirmation is required"),
});

function RegistrationForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any, e: any) => {
    try {
      // const res = await axios({
      //   method: "post",
      //   url: `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      //   data: data,
      // });

      // const {
      //   data: { access_token },
      // } = res;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json",
          },
        }
      );

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        toast.error("Error signing up");
        throw new Error("Failed to fetch data");
      }

      router.push('/login');
      
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-0">
        <div className="">
          <label>Full name</label>
          <div
            className={`${
              errors.name ? "form__input_error" : "form__input"
            } flex justify-between`}
          >
            <input
              className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
              type="text"
              {...register("name", { required: true })}
            />
          </div>
          <span className="text-red-600 text-sm">
            {errors.name && <span>{errors.name?.message}</span>}
          </span>
        </div>
      </div>
      <div className="mt-6">
        <div className="">
          <label>Email</label>
          <div
            className={`${
              errors.email ? "form__input_error" : "form__input"
            } flex justify-between`}
          >
            <input
              className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          <span className="text-red-600 text-sm">
            {errors.email && <span>{errors.email?.message}</span>}
          </span>
        </div>
      </div>
      <div className="mt-6">
        <div className="">
          <label>Password</label>
          <div
            className={`${
              errors.password ? "form__input_error" : "form__input"
            } flex justify-between items-center`}
          >
            <input
              className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          <span className="text-red-600 text-sm">
            {errors.password && <span>{errors.password?.message}</span>}
          </span>
        </div>
      </div>
      <div className="mt-6">
        <div className="">
          <label>Confirm Password</label>
          <div
            className={`${
              errors.passwordConfirmation ? "form__input_error" : "form__input"
            } flex justify-between items-center`}
          >
            <input
              className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
              type="password"
              {...register("passwordConfirmation", { required: true })}
            />
          </div>
          <span className="text-red-600 text-sm">
            {errors.passwordConfirmation && (
              <span>{errors.passwordConfirmation?.message}</span>
            )}
          </span>
        </div>
      </div>

      <div className="mt-16">
        <button type="submit" className="form__btn__default">
          Register
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
