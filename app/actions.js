"use server";

import { cookies } from "next/headers";

export const googleLogin = async () => {
  console.log("GoogleLogin");
  return null;
};
export const faceBookLogin = async () => {
  // TODO add item deletion logic
  return null;
};
export const emailLogin = async () => {
  // TODO add item deletion logic
  return null;
};

export async function setAuthCookie(token) {
  cookies().set("auth_token", token);
}

export async function getAuthCookie() {
  return cookies().get("auth_token")?.value;
}

export async function deleteAuthCookie() {
  cookies().delete("auth_token");
}
