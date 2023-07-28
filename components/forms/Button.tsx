import React from "react";

type buttonProps = {
  btnText: string;
  type: "button" | "submit" | "reset" | undefined;
  textColor: string;
  bgColor: string;
  hasBorder?: boolean;
  borderColor?: string;
};

function Button(props: buttonProps) {
  const {
    btnText = "Submit",
    type = "button",
    textColor,
    bgColor,
    hasBorder = true,
    borderColor='border-[#77858C]',
  } = props;
  return (
    <button
      type={type}
      className={`w-full h-auto rounded-tr-[20px] rounded-bl-[20px] rounded-tl-sm rounded-br-sm text-center py-5 ${bgColor} ${textColor} ${
        hasBorder ? `${borderColor}` : null
      }`}
    >
      {btnText}
    </button>
  );
}

export default Button;
