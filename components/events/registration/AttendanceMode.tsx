import { useIsMounted } from "@/hooks/useIsMounted";
import { useAppStore } from "@/lib/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function AttendanceMode({ event, isRegistrationOpen }: EventProps) {
  const { data: session } = useSession();

  const { access_token, user, registration, setRegistration, resetEvent } = useAppStore();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EventRegistration>({
    defaultValues: { ...registration },
  });

  async function registerForEvent(data: any) {
    const validatedData = {
      ...data,
      event_id: event.id,
      user_id: user?.id,
      in_person: data.in_person == "1" ? true : false,
      requires_accomodation: data.requires_accomodation == "1" ? true : false,
      requires_feeding: data.requires_feeding == "1" ? true : false,
      requires_transport: data.requires_transport == "1" ? true : false,
    };

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/attendance`, {
      method: "POST",
      body: JSON.stringify({
        ...validatedData,
      }),
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + access_token,
      },
    })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }

  const onSubmitPhysical = (data: any) => {
    setRegistration({
      ...registration,
      event_id: event?.id,
      user_id: user?.id!,
      in_person: "1",
    });
  };

  const onSubmitOnline = (data: any) => {
    setRegistration({
      ...registration,
      event_id: event?.id,
      user_id: user?.id!,
      in_person: "0",
    });

    registerForEvent(registration);
    resetEvent()

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
