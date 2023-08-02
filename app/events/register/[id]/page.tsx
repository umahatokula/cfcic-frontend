import InfoCard from '@/components/events/registration/InfoCard';
import RegistrationPageDivider from '@/components/events/registration/RegistrationPageDivider';
import Image from 'next/image';
import React from 'react'

function page() {
  return (
    <div>
      <p className="text-[20px] leading-[30px] font-normal text-[#01080D] mb-8">
        Registration
      </p>

      <p className="text-base mb-6">
        Events \ GBC \ <span className="font-semibold">Registration</span>
      </p>

      <InfoCard
        iconUrl="/happy_heart.svg"
        content="Yay! We’re excited to have you fellowship with us at 12 GIG. We trust this will change your life forever."
      />

      <RegistrationPageDivider />

      <p className="text-center mt-4 text-base font-normal">
        How would you be attending?
      </p>

      <form>
        <button className="form__btn__default mt-10">Physically</button>
      </form>
      <button className="link__btn__outline-primary mt-8">Online</button>
    </div>
  );
}

export default page