import React from "react";

interface IProps {
  title: string;
  color: string;
  className?: string;
}

const ButtonBlueWave = ({ title, color, className }: IProps) => {
  return (
    <div
      className={`uppercase w-fit text-white_cloud text-[16px] font-[400] hover:opacity-[0.8] cursor-pointer ${className ? className : ""}`}
      style={{background: color}}
    >
      <p className="m-0">{title}</p>
    </div>
  );
};

export default ButtonBlueWave;
