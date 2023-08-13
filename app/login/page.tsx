import LoginForm from "@/components/auth/LoginForm";
import Separator from "@/components/Separator";
import SocialLogin from "@/components/SocialLogin";
import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="text-center mb-20">
        <p className="text-2xl leading-[30px] font-normal">Welcome Home!</p>
        <p className="text-base font-normal">
          Please sign in to your account with
        </p>
      </div>

      {/* <SocialLogin iconPath="/google.svg" text="Google" /> */}

      {/* <Separator text="or" /> */}

      {/* <SocialLogin iconPath="/fb.svg" text="Facebook" /> */}

      {/* <Separator text="or" /> */}

      <LoginForm />

      <p className="text-base font-semibold mt-12">
        Not yet registered? Please{" "}
        <Link href={"/register"}>
          <span className="text-accent">Create an Account</span>
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
