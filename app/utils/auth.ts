import axios from "@/lib/axios";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { cookies } from 'next/headers'

export async function login(data: LoginFormInputs) {
  // return signIn("credentials", {
  //   ...data,
  //   redirect: false,
  // });
  return axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data)
    .then((response) => {
      console.log("🚀 ~ file: auth.ts:13 ~ .then ~ response:", response)
      return response.data.user;
      // set cookie
      
    })
    .catch((error) => {
      console.log(
        "🚀 ~ file: auth.ts:17 ~ login ~ error:",
        error.response.data.message
      );
      toast.error(error.response.data.message);
    });
}

export async function register(data: RegisterFormInputs) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "content-type": "application/json",
  //   },
  // });

  // return res.json();
  return axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, data)
    .then((response) => {
      console.log("🚀 ~ file: auth.ts:11 ~ login ~ response:", response);

      // set cookie
    })
    .catch((error) => {
      console.log(
        "🚀 ~ file: auth.ts:17 ~ login ~ error:",
        error.response.data.message
      );
      toast.error(error.response.data.message);
    });
}

export function getCookie(name: string){
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts?.pop()?.split(';')?.shift();
    }
}
