"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { redirect } from "next/navigation";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useAppStore } from "@/lib/store";
import { toast } from "react-hot-toast";

const schema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

function LoginForm() {
  const [showPasswordField, setShowPasswordField] = React.useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

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

    const result = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    console.log("🚀 ~ file: LoginForm.tsx:43 ~ onSubmit ~ result:", result);
    console.log("🚀 ~ file: LoginForm.tsx:43 ~ onSubmit ~ session:", session);
    console.log("🚀 ~ file: LoginForm.tsx:43 ~ onSubmit ~ status:", status);

    if (result?.error === "AccessDenied") {
      toast.error(session?.user?.message || "Credentials do not match");
    } else {
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    console.log("status", status);
  }, [status]);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
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
          <div className="text-red-600">
            {errors.email && <span>{errors.email?.message}</span>}
          </div>
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
          <div className="text-red-600">
            {errors.password && <span>{errors.password?.message}</span>}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <button type="submit" className="form__btn__default">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
