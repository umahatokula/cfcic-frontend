import React from "react";

type SeparatorProps = {
  text: string;
};

const style = {
    line: 'h-[0.7px] bg-gray-400 my-4 w-full'
}

function Separator(props: SeparatorProps) {
  const { text } = props;
  return (
    <div className="w-full flex items-center py-12">
      <div className={style.line}></div>
      <div className="mx-4">{text}</div>
      <div className={style.line}></div>
    </div>
  );
}

export default Separator;
