import { useIsMounted } from "@/hooks/useIsMounted";
import { useAppStore } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";

function NewDependents() {
  const { currentEvent, registration, setRegistration } = useAppStore();
  const router = useRouter();
  const isMounted = useIsMounted();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewKidInputs>();
  const [kids, setKids] = React.useState<Dependent[]>([]);

  const handleAddKid = ({ newKid }: NewKidInputs) => {
    if (
      newKid.first_name.trim() !== "" &&
      newKid.last_name.trim() !== "" &&
      newKid.birthday &&
      newKid.allergies &&
      newKid.emergency_contact
    ) {
      //   setKids([...kids, newKid]);
      const { new_dependents } = registration;
      new_dependents?.push(newKid);

      setRegistration({ ...registration, new_dependents: new_dependents });
      reset();
    }
  };

  const handleRemoveKid = (index: number) => {
    const updatedDependents = registration?.new_dependents?.filter(
      (_, i) => i !== index
    );

    setRegistration({ ...registration, new_dependents: updatedDependents });
  };

  const handleSubmitKids = () => {
    console.log("kids", registration?.new_dependents);
    setRegistration({ ...registration });

    router.push(`/events/register/${currentEvent?.id}?step=${3}`);
  };

  const handleCancel = () => {
    console.log(kids);
    setRegistration({ ...registration });

    router.push(`/events/register/${currentEvent?.id}?step=${3}`);
  };

  if (!isMounted) return;

  // return (
  //   <>
  //     <p className="my-20 text-xl text-center font-extralight">
  //       Kindly register your kids{" "}
  //       <a
  //         href="https://bit.ly/FA23_RegisterYourKids"
  //         className="text-accent"
  //         target="_blank"
  //       >
  //         HERE
  //       </a>{" "}
  //     </p>

  //     <div className="mt-20 gap-y-6 grid">
  //       <button
  //         onClick={handleCancel}
  //         type="button"
  //         className="link__btn__outline-primary block"
  //       >
  //         Proceed
  //       </button>
  //     </div>
  //   </>
  // );

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleAddKid)}>
          {/* First Name */}
          <div className="mt-4">
            <Controller
              name="newKid.first_name"
              control={control}
              defaultValue=""
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <div className="">
                  <label>First Name</label>
                  <div className="form__input flex justify-between">
                    <input
                      className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                      type="text"
                      {...field}
                      placeholder="Enter kid's first name"
                    />
                  </div>
                </div>
              )}
            />
            {/* {errors["newKid.first_name"] && <p>This field is required</p>} */}
          </div>
          {/* Last Name */}
          <div className="mt-4">
            <Controller
              name="newKid.last_name"
              control={control}
              defaultValue=""
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <div className="">
                  <label>Last Name</label>
                  <div className="form__input flex justify-between">
                    <input
                      className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                      type="text"
                      {...field}
                      placeholder="Enter kid's last name"
                    />
                  </div>
                </div>
              )}
            />
            {/* {errors["newKid.last_name"] && <p>This field is required</p>} */}
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
              <BsPlusCircle className="w-5 h-5" width={15} height={15} />
              <span className="text-base">
                Register {kids.length > 0 ? "another" : "a"} kid
              </span>
            </div>
          </button>
        </form>

        <ul>
          {registration?.new_dependents?.map((kid, index) => (
            <div className="mt-8" key={index}>
              <li>
                <span>{kid.first_name}</span> <span>{kid.last_name}</span>
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
          Proceed
        </button>
        <button
          onClick={handleCancel}
          type="button"
          className="link__btn__outline-primary block"
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default NewDependents;
