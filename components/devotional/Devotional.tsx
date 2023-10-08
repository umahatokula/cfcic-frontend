"use client";

import React, { useState } from "react";

interface DevotionalHeaderProps {
  devotional: Devotional;
}

function Devotional(props: DevotionalHeaderProps) {
  const { devotional } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      {devotional && (
        <div className="w-full flex justify-center">
          <div className="flex items-center justify-center w-11/12">
            <div className="w-full mx-auto bg-[#0077B6] -mt-[130px] rounded-tr-lg rounded-bl-lg p-5">
              <div className="flex justify-between">
                <h1 className="text-base text-white">Euphoria Devotional</h1>
                <h1 className="text-base text-white">{devotional.date} </h1>
              </div>
              <p className="pt-1 text-[#CAF0F8] text-xs">
                (The spirit of joy, an ecstasy that comes from God)
              </p>
              <h1 className="text-base text-white flex items-center justify-center p-5">
                {devotional.title}
              </h1>
              <div className="">
                <h1 className="text-white text-xs">
                  {devotional.key_scripture}
                </h1>
                <p
                  className={`${
                    isExpanded ? "overflow-visible" : "overflow-hidden h-16"
                  } text-white text-xs`}
                  dangerouslySetInnerHTML={{ __html: devotional.content }}
                />
                <p
                  onClick={toggleReadMore}
                  className="text-[#FB8500] mt-8 flex justify-end cursor-pointer text-base"
                >
                  {isExpanded ? "Read Less" : "Read More..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Devotional;
