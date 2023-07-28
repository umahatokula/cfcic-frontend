"use client";
import Image from "next/image";
import React from "react";
import { googleLogin } from "../app/actions";

type SocialLoginProps = {
  text: string;
  iconPath: string;
};

function SocialLogin(props: SocialLoginProps) {
  const { text = "Login", iconPath } = props;
  return (
    <form className="w-full" action={googleLogin}>
      <button
        type="submit"
        className="flex justify-center w-full rounded-xl bg-[#D9D9D9] text-black text-center text-lg font-semibold py-4 px-6 gap-x-3"
      >
        <span>
          <Image
            className=""
            src={iconPath}
            alt={text}
            width={25}
            height={25}
          />{" "}
        </span>
        {text}
      </button>
    </form>
  );
}

export default SocialLogin;
