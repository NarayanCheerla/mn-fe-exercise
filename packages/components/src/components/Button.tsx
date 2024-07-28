import React from "react";
import "../styles/input.css";

type ButtonProps = {
  textColor?: string;
  children: React.ReactNode;
  disable?: boolean;
};

const Button = ({ textColor = "white", children, disable = false }: ButtonProps) => {
  return <button className={`bg-blue-400 rounded-lg p-2 text-lg border border-solid border-blue-700 m-1 ${disable ? "bg-gray-400 border-gray-500 pointer-events-none": "bg-blue-500 border-blue-500"}`} style={{ color: textColor }}>{children}</button>;
};

export default Button;
