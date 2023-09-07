import { BLUE_WAVE } from "@/utils/colors";
import React from "react";

interface IProps {
  title: string;
  color: string;
  className?: string;
}

const ButtonBlueWave = ({ title, color, className }: IProps) => {
  let bg_color = "";
  color == BLUE_WAVE ? (bg_color = "bg-blue_wave") : "";
  return (
    <div
      className={`inline-flex uppercase text-white_cloud text-[16px] font-[400] hover:opacity-[0.8] cursor-pointer ${bg_color} ${className ? className : ""}`}
    >
      <p className="m-0">{title}</p>
    </div>
  );
};

export default ButtonBlueWave;
