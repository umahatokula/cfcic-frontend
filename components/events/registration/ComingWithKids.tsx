import {
  formatEventRegistrationData,
  registerForEvent,
} from "@/app/utils/events";
import { useAppStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function ComingWithKids({ event, isRegistrationOpen }: EventProps) {
  const {
    access_token,
    user,
    registration,
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

  const onSubmitComingWithKids = (data: any) => {
    setRegFormStep(3)
    setComingWithKids(true)
    router.push(`/events/register/${event?.id}?step=${2}&kids=${true}`)
  };

  const onSubmitNotComingWithKids = async (data: any) => {
    setRegFormStep(3)
    setComingWithKids(false)
    router.push(`/events/register/${event?.id}?step=${3}`)
  };

  return (
    <>
      <p className="text-center mt-4 text-base font-normal">
        Are you coming along with kids? We’ve got room for them
      </p>

      <form className="w-full mt-5" onSubmit={handleSubmit(onSubmitComingWithKids)}>
        <button type="submit" className="form__btn__default mt-10">
          Yes
        </button>
      </form>

      <form className="w-full mt-5" onSubmit={handleSubmit(onSubmitNotComingWithKids)}>
        <button type="submit" className="link__btn__outline-primary mt-8">
          No
        </button>
      </form>
    </>
  );
}

export default ComingWithKids;
