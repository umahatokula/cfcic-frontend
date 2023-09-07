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

export async function setAuthCookie() {
  cookies().set('token', true)
}

export async function getAuthCookie() {
  return cookies().get('token')
}

export async function deleteAuthCookie() {
  cookies().delete('token');
}
