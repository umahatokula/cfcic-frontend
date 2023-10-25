"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useIsMounted } from "@/hooks/useIsMounted";
import CircleLoader from "react-spinners/CircleLoader";
import { login, sendPasswordResetLink } from "@/app/utils/auth";
import axios from "@/lib/axios";
import { cookies } from "next/headers";
import { useAppStore } from "@/lib/store";
import api from "@/lib/axios";

const schema = yup.object({
  email: yup.string().required("Email is required"),
});

function ForgotPassword() {
  const [loading, setloading] = useState<boolean>(false);
  const router = useRouter();
  const isMounted = useIsMounted();
  const { addUser } = useAppStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ForgotPasswordFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();
    setloading(true);
    const res = await sendPasswordResetLink(data);
    console.log("🚀 ~ file: ResetPassword.tsx:42 ~ onSubmit ~ res:", res);
    if (res) {
      if (res?.status == 200) {
        toast.success(res?.data);
        router.push("/login");
      } else {
        toast.error(res?.data);
      }
    } else {
      toast.error("There was an error. Please try again.");
    }

    setloading(false);
  };

  if (!isMounted) return;

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <p className="my-16 text-start text-xl">
          We will send a link to your email. Use that link to reset your
          password
        </p>
        <div className="">
          <label className="text-xs font-bold">Email Address</label>
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
          <div className="text-red-600 text-xs">
            {errors.email && <span>{errors.email?.message}</span>}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <button
          disabled={loading}
          type="submit"
          className={`${
            loading ? "form__btn__default_disabled" : "form__btn__default"
          } flex items-center justify-center`}
        >
          <span className="mr-3">Submit</span>
          <CircleLoader
            color={`${loading ? "#000000" : "#eecba3"}`}
            size={20}
            loading={loading}
          />
        </button>
      </div>
    </form>
  );
}

export default ForgotPassword;
