"use client";

import React from 'react'
import Button from '../forms/Button';
import { useForm } from "react-hook-form";
import { RegistrationFormInputs } from '@/types';
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { redirect } from 'next/navigation';

const schema = yup.object({
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
  const [showPasswordField, setShowPasswordField] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any, e: any) => {
    console.log("data", data);
    try {
      const res = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
        data: data,
      });

      const {
        data: { access_token },
      } = res;

      redirect('/dashboard');

    } catch (error) {
      console.log("error", error);
    }

  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
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

export default RegistrationForm