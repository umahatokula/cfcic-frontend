"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import CircleLoader from "react-spinners/CircleLoader";
import { signIn, useSession } from "next-auth/react";
import { login, registerUser } from "@/app/utils/auth";
import axios from "@/lib/axios";
import { useIsMounted } from "@/hooks/useIsMounted";
import api from "@/lib/axios";
import { useAppStore } from "@/lib/store";

const schema = yup.object({
  name: yup.string().required("Full name is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  password_confirmation: yup
    .string()
    .test("password-should-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    })
    .required("Password Confirmation is required"),
});

function RegistrationForm() {
  const [loading, setloading] = useState<boolean>(false);
  const router = useRouter();
  const isMounted = useIsMounted();
  const { addUser } = useAppStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();
    setloading(true);

    const res = await registerUser(data);

    if (res?.status == 200) {
      setloading(false);
      const { user, token } = res?.data;
      addUser(user, token);
      router.push("/dashboard");
    }

    if (res?.status == 422) {
      setloading(false);
      toast.error(res?.data)
    }
  };

  if (!isMounted) return;

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
          <span className="text-red-600 text-xs">
            {errors.name && <span>{errors.name?.message}</span>}
          </span>
        </div>
      </div>
      <div className="mt-6">
        <div className="">
          <label>Email Address</label>
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
          <span className="text-red-600 text-xs">
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
          <span className="text-red-600 text-xs">
            {errors.password && <span>{errors.password?.message}</span>}
          </span>
        </div>
      </div>
      <div className="mt-6">
        <div className="">
          <label>Confirm Password</label>
          <div
            className={`${
              errors.password_confirmation ? "form__input_error" : "form__input"
            } flex justify-between items-center`}
          >
            <input
              className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
              type="password"
              {...register("password_confirmation", { required: true })}
            />
          </div>
          <span className="text-red-600 text-xs">
            {errors.password_confirmation && (
              <span>{errors.password_confirmation?.message}</span>
            )}
          </span>
        </div>
      </div>

      <div className="mt-16">
        <button
          disabled={loading}
          type="submit"
          className={`form__btn__default flex items-center justify-center`}
        >
          <span className="mr-3">Register</span>
          <CircleLoader color="#eecba3" size={20} loading={loading} />
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
