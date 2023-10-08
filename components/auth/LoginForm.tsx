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
import { login } from "@/app/utils/auth";
import axios from "@/lib/axios";
import { cookies } from "next/headers";
import { useAppStore } from "@/lib/store";
import api from "@/lib/axios";

const schema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

function LoginForm() {
  const [loading, setloading] = useState<boolean>(false);
  const [showPasswordField, setShowPasswordField] = React.useState(false);
  const router = useRouter();
  const isMounted = useIsMounted();
  const { addUser } = useAppStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();
    setloading(true);

    const res = await login(data);

    if (res?.status == 200) {
      setloading(false);
      const { user, token } = res?.data;
      addUser(user, token);
      router.push("/dashboard");
    }

    if (res?.status == 422) {
      setloading(false);
      toast.error(res?.data);
    }
  };

  if (!isMounted) return;

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
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
      <div className="mt-6">
        <div className="">
          <label className="text-xs font-bold">Password</label>
          <div
            className={`${
              errors.password ? "form__input_error" : "form__input"
            } flex justify-between items-center`}
          >
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
          </div>
          <div className="text-red-600 text-xs">
            {errors.password && <span>{errors.password?.message}</span>}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <button
          type="submit"
          className={`form__btn__default flex items-center justify-center`}
        >
          <span className="mr-3">Login</span>
          <CircleLoader color="#eecba3" size={20} loading={loading} />
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
