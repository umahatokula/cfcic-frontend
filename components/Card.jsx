import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="w-full h-full bg-[#CAF0F8] rounded-tr-lg rounded-bl-lg mb-10 ml-10 shadow-lg">
      <div className="flex flex-col">
        <div className="p-10">
          <div className="flex space-x-3">
            <div>
              <img src={props.img} className="w-full" />
            </div>
            <div className="text-xl font-bold">{props.heading}</div>
          </div>
          <div className="mt-5">{props.Body}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
