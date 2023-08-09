import Button from "@/components/forms/Button";
import { useAppStore } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function FormTwo() {
  const router = useRouter();

  const {
    access_token,
    biodata,
    centerDetails,
    financialCommitments,
    kidsDetails,
    setBiodata,
    setFinancialCommitments,
  } = useAppStore();

  async function saveProfile(data: any) {
    const validatedData = {
      ...data,
      is_church_member: data.is_church_member == "1" ? true : false,
      growth_track_completed: data.growth_track_completed == "1" ? true : false,
      is_tither: data.is_tither == "1" ? true : false,
      is_partner: data.is_partner == "1" ? true : false,
      dependents: [...kidsDetails],
    };
    console.log(
      "🚀 ~ file: FormOne.tsx:14 ~ saveProfile ~ validatedData:",
      validatedData
    );

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile/create`, {
      method: "POST",
      body: JSON.stringify({
        validatedData,
      }),
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + access_token,
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
  } = useForm<FinancialCommitments>({
    defaultValues: { ...financialCommitments },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    const finData = { ...data };
    setFinancialCommitments(finData);

    // console.log(data);
    setBiodata(data);
    const onboardingData = {
      ...biodata,
      ...centerDetails,
      ...financialCommitments,
      ...kidsDetails,
    };

    saveProfile(onboardingData);

    // router.push("/profile/financial-commitments");
  };

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
                <option value="1">Not yet</option>
                <option value="1">I’m not interested</option>
              </select>
            </div>
            {errors.is_partner && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

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
                  Programs & Ministry - Faith Adventures, Rev. Arome Tokula’s
                  ministry trips
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
        </div>

        <div className="mt-20 gap-y-6 grid">
          <Button
            bgColor="bg-accent"
            textColor="text-white"
            borderColor="border-[#77858C]"
            type="submit"
            btnText="Proceed"
          />
          <Link className="link__btn__outline-primary block" href={"/"}>
            Skip for Now
          </Link>
        </div>
      </form>
    </>
  );
}

export default FormTwo;
