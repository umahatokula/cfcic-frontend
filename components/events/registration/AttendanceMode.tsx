import {
  formatEventRegistrationData,
  registerForEvent,
} from "@/app/utils/events";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useAppStore } from "@/lib/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import CircleLoader from "react-spinners/CircleLoader";

function AttendanceMode({ event, isRegistrationOpen }: EventProps) {
  const [loading, setloading] = useState<boolean>(false);
  const {
    access_token,
    user,
    registration,
    reg_form_step,
    setRegistration,
    resetEvent,
    resetRegistration,
    setComingWithKids,
    setRegFormStep,
  } = useAppStore();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EventRegistrationBase>({
    defaultValues: { ...registration },
  });

  const onSubmitPhysical = (data: any) => {
    setRegistration({
      ...registration,
      event_id: event?.id,
      user_id: user?.id!,
      in_person: "1",
    });

    setRegFormStep(2);
    router.push(`/events/register/${event?.id}?step=${2}`);
  };

  const onSubmitOnline = async (data: any) => {
    setloading(true);
    setRegistration({
      ...registration,
      event_id: event?.id,
      user_id: user?.id!,
      in_person: "0",
    });

    const validatedData = formatEventRegistrationData(
      registration,
      event?.id,
      user?.id
    );
    console.log(
      "🚀 ~ file: AttendanceMode.tsx:62 ~ onSubmitOnline ~ validatedData:",
      event
    );

    const reg = await registerForEvent(validatedData, access_token);
    if (reg.status) {
      toast.success(reg.message);
      setloading(false);
      resetRegistration();
      router.push(`/events/register/success`);
    } else {
      toast.error(reg.message);
      setloading(false);
    }
  };

  return (
    <>
      <p className="text-center mt-4 text-base font-normal">
        How would you be attending?
      </p>

      <form className="w-full mt-5" onSubmit={handleSubmit(onSubmitPhysical)}>
        <button type="submit" className="form__btn__default mt-10">
          Physically
        </button>
      </form>

      <form className="w-full mt-5" onSubmit={handleSubmit(onSubmitOnline)}>

        <div className="mt-16">
          <button
            type="submit"
            className={`link__btn__outline-primary mt-8 flex items-center justify-center`}
          >
            <span className="mr-3">Online</span>
            <CircleLoader color="#eecba3" size={20} loading={loading} />
          </button>
        </div>
      </form>
    </>
  );
}

export default AttendanceMode;
