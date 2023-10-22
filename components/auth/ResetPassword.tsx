"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { useIsMounted } from "@/hooks/useIsMounted";
import CircleLoader from "react-spinners/CircleLoader";
import { resetPassword } from "@/app/utils/auth";
import { useAppStore } from "@/lib/store";

const schema = yup.object({
  email: yup.string().required("Email is required"),
  token: yup.string().required("Full name is required"),
  password: yup.string().required("Password is required"),
  password_confirmation: yup
    .string()
    .required("Password confirmation is required")
    .test("password-should-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    })
    .required("Password Confirmation is required"),
});

function ResetPassword() {
  const [loading, setloading] = useState<boolean>(false);
  const router = useRouter();
  const isMounted = useIsMounted();
  const { user } = useAppStore();
  const searchParams = useSearchParams();

  const token: string = searchParams.get("token") as string;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();
    setloading(true);
    const res = await resetPassword(data);

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
      <input
        type="hidden"
        value={user?.email}
        {...register("email", { required: true })}
      />
      <input
        type="hidden"
        value={token}
        {...register("token", { required: true })}
      />
      <div className="">
        <p className="my-16 text-start text-xl">Enter your new password.</p>
        <div className="mt-6">
          <div className="">
            <label>New Password</label>
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
            <label>New Password Confirmation</label>
            <div
              className={`${
                errors.password_confirmation
                  ? "form__input_error"
                  : "form__input"
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

export default ResetPassword;
