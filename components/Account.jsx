import React from "react";
import Image from "next/image";

const Account = () => {
  return (
    <>
      <div className="mx-auto mt-10">
        <Image src="/Line 7.png" height={100} width={300} alt="line" />
      </div>
      <div className="flex items-center justify-center mt-5">
        <h1 className="text-base font-semibold">Manage Account</h1>
      </div>
    </>
  );
};

export default Account;
