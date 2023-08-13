"use client";

import { useIsMounted } from "@/hooks/useIsMounted";
import { useAppStore } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";

function FormOne() {
    const isMounted = useIsMounted();
    const { kidsDetails, setKidsDetails } = useAppStore();
    const router = useRouter();
  
    const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<NewKidInputs>();
    const [kids, setKids] = React.useState<SingleKidsDetail[]>([]);
  
    const handleAddKid = ({ newKid }: NewKidInputs) => {
      if (
        newKid.first_name.trim() !== "" &&
        newKid.birthday &&
        newKid.allergies &&
        newKid.emergency_contact
      ) {
        console.log("newKid", newKid);
        // setKids([...kids, newKid]);
        setKidsDetails([...kidsDetails, newKid]);
        reset();
      }
    };
  
    const handleRemoveKid = (index: number) => {
      const updatedKidDetails = kidsDetails.filter((_, i) => i !== index);
      // setKids(updatedKidDetails);
      setKidsDetails(updatedKidDetails);
    };
  
    const handleSubmitKids = () => {
      console.log(kids);
      setKidsDetails(kidsDetails);
  
      router.push("/profile/center-details");
    };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleAddKid)}>
          {/* Name */}
          <div className="mt-4">
            <Controller
              name="newKid.first_name"
              control={control}
              defaultValue=""
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <div className="">
                  <label>Full Name</label>
                  <div className="form__input flex justify-between">
                    <input
                      className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                      type="text"
                      {...field}
                      placeholder="Enter kid's name"
                    />
                  </div>
                </div>
              )}
            />
            {/* {errors["newKid.first_name"] && <p>This field is required</p>} */}
          </div>
          {/* Birthday */}
          <div className="mt-4">
            <Controller
              name="newKid.birthday"
              control={control}
              defaultValue=""
              rules={{ required: "Birthday is required" }}
              render={({ field }) => (
                <div className="">
                  <label>Birthday</label>
                  <div className="form__input flex justify-between">
                    <input
                      className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                      type="date"
                      {...field}
                      placeholder="Enter birthday"
                    />
                  </div>
                </div>
              )}
            />
            {/* {errors["newKid.birthday"] && <p>This field is required</p>} */}
          </div>
          {/* Allergies */}
          <div className="mt-4">
            <Controller
              name="newKid.allergies"
              control={control}
              defaultValue=""
              rules={{ required: "Allergies is required" }}
              render={({ field }) => (
                <div className="">
                  <label>Allergies</label>
                  <div className="form__input flex justify-between">
                    <input
                      className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                      type="text"
                      {...field}
                      placeholder="Enter comma separated allergies"
                    />
                  </div>
                </div>
              )}
            />
            {/* {errors["newKid.allergies"] && <p>This field is required</p>} */}
          </div>
          {/* Emergency Contact */}
          <div className="mt-4">
            <Controller
              name="newKid.emergency_contact"
              control={control}
              defaultValue=""
              rules={{ required: "Emergency contact is required" }}
              render={({ field }) => (
                <div className="">
                  <label>Emergency Contact</label>
                  <div className="form__input flex justify-between">
                    <input
                      className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                      type="text"
                      {...field}
                      placeholder="Enter an emergency contact"
                    />
                  </div>
                </div>
              )}
            />
            {/* {errors["newKid.emergency_contact"] && <p>This field is required</p>} */}
          </div>
          <button className="flex justify-end mt-8" type="submit">
            <div className="flex space-x-2 font-semibold text-accent items-center">
              {/* <Image src={"/plus.svg"} alt="icon" width={15} height={15} /> */}
              <BsPlusCircle className="w-5 h-5" width={15} height={15} />
              <span className="text-base">
                Register {kids.length > 0 ? "another" : "a"} kid
              </span>
            </div>
          </button>
        </form>

        <ul>
          {kidsDetails.map((kid, index) => (
            <div className="mt-8" key={index}>
              <li>
                <span>{kid.first_name}</span>
                <br />
                Birthday: {kid.birthday}
                <br />
                Allergies: {kid.allergies}
                <br />
                Emergency Contact: {kid.emergency_contact}
              </li>
              <button
                onClick={() => handleRemoveKid(index)}
                className="flex justify-end mt-2"
                type="submit"
              >
                <div className="flex space-x-2 font-semibold text-red-500 items-center">
                  {/* <Image src={"/plus.svg"} alt="icon" width={15} height={15} /> */}
                  <AiOutlineMinusCircle
                    className="w-5 h-5"
                    width={15}
                    height={15}
                  />
                  <span className="text-base">Remove kid</span>
                </div>
              </button>
            </div>
          ))}
        </ul>
      </div>

      <div className="mt-20 gap-y-6 grid">
        <button
          onClick={handleSubmitKids}
          type="button"
          className="link__btn__default block"
        >
          Next
        </button>
        <Link
          className="link__btn__outline-primary block"
          href={"/profile/center-details"}
        >
          Skip for Now
        </Link>
      </div>
    </>
  );
}

export default FormOne;
