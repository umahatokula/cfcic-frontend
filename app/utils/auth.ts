import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import router, { redirect } from "next/navigation";
import api from "@/lib/axios";
import { deleteAuthCookie, getAuthCookie, setAuthCookie } from "../actions";

export async function login(data: LoginFormInputs) {
  return api()
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data)
    .then((response) => {
      // set cookie
      logIn();

      return response.data;
    })
    .catch((error) => {
      const message = error?.response?.data?.message;
      if (message) toast.error(message);
    });
}

export async function registerUser(data: RegisterFormInputs) {
  return api()
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const message = error?.response?.data?.message;
      if (message) toast.error(message);
    });
}

export const isLoggedIn = (reqCookies = null) => {
  // return !!getCookie("token");
  return !!getAuthCookie();
};

export const logIn = () => {
  setCookie("token", true);
  setAuthCookie();
};

export const logOut = () => {
  console.log('Logging out...')
  // remove logged in user's cookie and redirect to login page
  deleteCookie("token");
  // deleteAuthCookie();

  redirect("/login");
};
