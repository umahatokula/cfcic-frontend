import Button from "@/components/forms/Button";
import { useAppStore } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function FormOne() {
  const router = useRouter();

  const { financialCommitments, setFinancialCommitments } = useAppStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FinancialCommitmentsHalf>({
    defaultValues: { ...financialCommitments },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    setFinancialCommitments(data);
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

export default FormOne;
