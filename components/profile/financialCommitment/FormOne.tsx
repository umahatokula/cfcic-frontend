import { createProfile, formatProfileData } from "@/app/utils/profile";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useAppStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function FormOne() {
  const isMounted = useIsMounted();
  const router = useRouter();

  const {
    access_token,
    financialCommitments,
    setFinancialCommitments,
    biodata,
    centerDetails,
    kidsDetails,
  } = useAppStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FinancialCommitmentsHalf>({
    defaultValues: { ...financialCommitments },
  });
  const onSubmit = (data: any) => {

    setFinancialCommitments(data);
    const onboardingData = {
      ...biodata,
      ...centerDetails,
      ...financialCommitments,
    };

    const validatedData = formatProfileData({...onboardingData, dependents: kidsDetails});

    createProfile(validatedData, access_token);
  };

  const isPartnerBool = watch("is_partner");

  if (!isMounted) return;

  return (
    <>
      <form className="w-full mt-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          {/* Are you a tither? */}
          <div className="">
            <label>Are you a tither?</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("is_tither", { required: true })}
              >
                <option value="1">Yes</option>
                <option value="1">No</option>
              </select>
            </div>
            {errors.is_tither && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Are you a Partner? */}
          <div className="">
            <label>Are you a Partner?</label>
            <div className="form__input flex justify-between">
              <select
                className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                {...register("is_partner", { required: true })}
              >
                <option value="1">Yes</option>
                <option value="2">Not yet</option>
                <option value="3">I’m not interested</option>
              </select>
            </div>
            {errors.is_partner && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {isPartnerBool === "1" && (
            <>
              {/* What Arm(s) do you Partner with? */}
              <div className="">
                <label>What Arm(s) do you Partner with?</label>
                <div className="form__input flex justify-between">
                  <select
                    className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                    {...register("partnered_arms", { required: true })}
                    multiple
                  >
                    <option value="1">
                      Publications - Euphoria devotional, Higher life magazine
                    </option>
                    <option value="0">
                      Programs & Ministry - Faith Adventures, Rev. Arome
                      Tokula’s ministry trips
                    </option>
                    <option value="2">
                      WOMOC - Wavelength broadcast, Livestream
                    </option>
                  </select>
                </div>
                {errors.partnered_arms && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>

              {/* How often would you like to pay? */}
              <div className="">
                <label>How often would you like to pay?</label>
                <div className="form__input flex justify-between">
                  <select
                    className="block w-full border-[#77858C] bg-accent w- h-full border-none bg-transparent focus:outline-none"
                    {...register("payment_interval", { required: true })}
                  >
                    <option value="1">Monthly</option>
                    <option value="2">Bi-monthly</option>
                    <option value="3">Quarterly</option>
                  </select>
                </div>
                {errors.payment_interval && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>
            </>
          )}
        </div>

        <div className="mt-20 gap-y-6 grid">
          <button type="submit" className="form__btn__default">
            Finish
          </button>
        </div>
      </form>
    </>
  );
}

export default FormOne;
