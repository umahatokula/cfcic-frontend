import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import router, { redirect } from "next/navigation";
import { deleteAuthCookie, getAuthCookie, setAuthCookie } from "../actions";
import api, { fetchCSRFToken } from "@/lib/axios";


export async function login(data: LoginFormInputs) {
  try {
    // Fetch CSRF token before making the login request
    await fetchCSRFToken();

    const response = await (await api()).post("/auth/login", data);
    const { token } = response.data;
    logIn(token);

    return {
      status: 200,
      data: response.data,
    };
  } catch (error) {
    console.error("Login failed:", error);
    //@ts-ignore
    if (error?.response?.status === 422) {
      return {
        status: 422,
        //@ts-ignore
        data: error?.response?.data?.message,
      };
    }
  }
}

export async function registerUser(data: RegisterFormInputs) {
  try {
    // Fetch CSRF token before making the login request
    await fetchCSRFToken();

    const response = await (await api()).post("/auth/register", data);
    const { token } = response.data;
    setAuthCookie(token);

    return {
      status: 200,
      data: response.data,
    };
  } catch (error) {
    console.error("Registering user failed:", error);
    if (error instanceof Error) {
      if (error.response?.status === 422) {
        return {
          status: 422,
          //@ts-ignore
          data: error?.response?.data?.message,
        };
      }
    }
  }
}

export const isLoggedIn = async (reqCookies = null) => {
  await deleteAuthCookie()
  console.log("🚀 ~ file: auth.ts:59 ~ isLoggedIn ~ reqCookies:", reqCookies)
  // if we don't have request cookies, get the cookie from client
  // if (!reqCookies) {
  //   return !!getCookie("token");
  // }
  console.log("🚀 ~ file: auth.ts:65 ~ isLoggedIn ~ await getAuthCookie():", await getAuthCookie())

  return !!(await getAuthCookie());
};

export const logIn = (token: string) => {
  setCookie("token", token);
  setAuthCookie(token);
};

export const logOut = async () => {
  const res = await (await api()).post("/auth/logout");
  console.log("🚀 ~ file: auth.ts:70 ~ logOut ~ res:", res);
  deleteCookie("token");
  deleteAuthCookie();

  console.log("Logging out...");
  window.location.href = "/login";
};
