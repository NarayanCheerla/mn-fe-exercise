import React from "react";
import "../styles/input.css";

type ButtonProps = {
  textColor?: string;
  title: string;
  disable?: boolean;
  backgroundColor?: string;
  padding?: string;
  fontSize?: string;
  margin?: string;
  borderColor?:string;
};

const Button = ({
  textColor = "white",
  title = "Default",
  disable = false,
  backgroundColor = "bg-blue-400",
  padding = "p-2",
  fontSize = "text-md",
  margin = "m-1",
  borderColor = "border-blue-700",
}: ButtonProps) => {
  return (
    <button
      className={`${backgroundColor} ${padding} rounded-lg ${padding} ${fontSize} border border-solid ${borderColor} ${margin} ${disable ? "bg-gray-400 border-gray-500 pointer-events-none" : "bg-blue-500 border-blue-500"}`}
      style={{ color: textColor }}
    >
      {title}
    </button>
  );
};

export default Button;
