import { formatEventRegistrationData, registerForEvent } from "@/app/utils/events";
import Button from "@/components/forms/Button";
import { useAppStore } from "@/lib/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function AttendanceRequiredServices({ event, isRegistrationOpen }: EventProps) {

  const { access_token, registration, user, setRegistration, resetEvent, resetRegistration } =
    useAppStore();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EventRegistrationServices>({
    defaultValues: { ...registration },
  });

  const onSubmit = (data: any) => {

    setRegistration({ ...data, event_id: event?.id });

    const validatedData = formatEventRegistrationData(
      registration,
      event?.id,
      user?.id
    );

    const reg = registerForEvent(validatedData, access_token);
    resetRegistration();
    resetEvent();

    router.push(`/events/register/${event?.id}/success`);
  };

  return (
    <>
      <form className="w-full mt-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div className="">
            <label>Do you require feeding?</label>
            <div className="form__input flex justify-between mt-2">
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
            <div className="form__input flex justify-between mt-2">
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
            <div className="form__input flex justify-between mt-2">
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
