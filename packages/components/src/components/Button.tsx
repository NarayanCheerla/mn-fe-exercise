import React from "react";

type ButtonProps = {
  textColor?: string;
  children: React.ReactNode;
};

const Button = ({ textColor = "white", children }: ButtonProps) => {
  return <button className="bg-blue-400 rounded-lg p-2 text-lg border border-solid border-blue-700 m-1" style={{ color: textColor }}>{children}</button>;
};

export default Button;
