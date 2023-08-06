import Button from "@/components/forms/Button";
import { useAppStore } from "@/lib/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function AttendanceRequiredServices({ event, isRegistrationOpen }: EventProps) {
  const { data: session } = useSession();

  const { registration, setRegistration } = useAppStore();

  const router = useRouter();

  async function registerForEvent(data: any) {
    const validatedData = {
      ...data,
      event_id: event.id,
      user_id: session?.user?.user?.id,
      in_person: data.in_person == "1" ? true : false,
      requires_accomodation: data.requires_accomodation == "1" ? true : false,
      requires_feeding: data.requires_feeding == "1" ? true : false,
      requires_transport: data.requires_transport == "1" ? true : false,
    };

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/attendance`, {
      method: "POST",
      body: JSON.stringify({
        validatedData,
      }),
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + session?.user?.access_token,
      },
    })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EventRegistrationServices>({
    defaultValues: { ...registration },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setRegistration({ ...data, event_id: event?.id });

    registerForEvent(registration);
  };

  return (
    <>
      <form className="w-full mt-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div className="">
            <label>Do you require feeding?</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("requires_feeding", { required: true })}
              >
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            {errors.requires_feeding && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="">
            <label>Do you require accomodation?</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("requires_accomodation", { required: true })}
              >
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            {errors.requires_accomodation && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          <div className="">
            <label>Do you require transportation?</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("requires_transport", { required: true })}
              >
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            {errors.requires_transport && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="mt-20">
          <Button
            bgColor="bg-accent"
            textColor="text-white"
            borderColor="border-[#77858C]"
            type="submit"
            btnText="Register"
          />
        </div>
      </form>
    </>
  );
}

export default AttendanceRequiredServices;
