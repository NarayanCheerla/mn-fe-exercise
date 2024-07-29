import { type ReactNode } from "react";
import "../styles/input.css";

type ButtonProps = {
  color?: string;
  children: ReactNode;
  disable?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  onClick?: () => void;
};

const Button = ({
  color = "white",
  children,
  disable = false,
  backgroundColor = "bg-blue-400",
  borderColor = "border-blue-700",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`rounded-lg p-2 tex-md border border-solid m-1 ${disable ? "!bg-gray-400 !border-gray-500 pointer-events-none !text-gray-950" : "bg-blue-500 border-blue-500"}`}
      style={{ color, backgroundColor, borderColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
