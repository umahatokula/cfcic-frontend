import {
  formatEventRegistrationData,
  registerForEvent,
} from "@/app/utils/events";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useAppStore } from "@/lib/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function AttendanceMode({ event, isRegistrationOpen }: EventProps) {
  const { access_token, user, registration, setRegistration, resetEvent, resetRegistration } =
    useAppStore();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EventRegistration>({
    defaultValues: { ...registration },
  });

  const onSubmitPhysical = (data: any) => {
    setRegistration({
      ...registration,
      event_id: event?.id,
      user_id: user?.id!,
      in_person: "1",
    });
  };

  const onSubmitOnline = async (data: any) => {
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

    const reg = await registerForEvent(validatedData, access_token);
    resetRegistration();
    resetEvent();

    router.push(`/events/register/${event?.id}/success`);
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
        <button type="submit" className="link__btn__outline-primary mt-8">
          Online
        </button>
      </form>
    </>
  );
}

export default AttendanceMode;
