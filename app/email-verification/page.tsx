import Link from "next/link";
import React from "react";

const email = "joanishaya@gmail.com";
function EmailVerificationPage() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="text-center">
        <p className="h1">Email Verification</p>
        <p className="text-base mt-6">
          A verification link has been sent to{" "}
          <span className="font-bold">{email}</span>. Click on it to verify your
          account and continue.
        </p>
        <p className="text-base mt-16">
          Didn’t get the email?{" "}
          <Link href={"/register"}>
            <span className="text-accent">Resend it</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default EmailVerificationPage;
