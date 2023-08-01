import Separator from "@/components/Separator";
import SocialLogin from "@/components/SocialLogin";
import RegistrationForm from "@/components/auth/RegistrationForm";
import Link from "next/link";
import React from "react";

function RegisterPage() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="text-center mb-20">
        <p className="text-2xl leading-[30px] font-normal">Create Account</p>
        <p className="text-base font-normal">
          Create an account in a few seconds with
        </p>
      </div>

      <SocialLogin iconPath="/google.svg" text="Google" />

      <Separator text="or" />

      <SocialLogin iconPath="/fb.svg" text="Facebook" />

      <Separator text="or" />

      <SocialLogin iconPath="/gmail.svg" text="Gmail" />

      <div className="w-full mt-8">
        <RegistrationForm />
      </div>

      <p className="text-base text-center font-semibold mt-16">
        By registering you agree to CFCIC{" "}
        <span className="text-accent">Terms of Use</span> and{" "}
        <span className="text-accent">Privacy Policy</span>
      </p>

      <p className="text-base text-center font-semibold mt-12">
        Already registered? Please{" "}
        <Link href={"/login"}>
          <span className="text-accent">Sign In</span>
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;
