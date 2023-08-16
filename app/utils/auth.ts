import { signIn } from "next-auth/react";

export async function login(data: LoginFormInputs) {
  return signIn("credentials", {
    ...data,
    redirect: false,
  });
}

export async function register(data: RegisterFormInputs) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });

  return res.json()
}
