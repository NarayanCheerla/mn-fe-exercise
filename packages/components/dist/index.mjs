// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({
  color = "white",
  children,
  disable = false,
  backgroundColor = "bg-blue-400",
  borderColor = "border-blue-700",
  onClick
}) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `rounded-lg p-2 tex-md border border-solid m-1 ${disable ? "!bg-gray-400 !border-gray-500 pointer-events-none !text-gray-950" : "bg-blue-500 border-blue-500"}`,
      style: { color, backgroundColor, borderColor },
      onClick,
      children
    }
  );
};
var Button_default = Button;

// src/components/Card.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = ({ children }) => {
  return /* @__PURE__ */ jsx2("div", { className: "flex justify-center cursor-pointer bg-slate-200 border rounded-md p-1 w-full my-1 hover:border-neutral-700 hover:bg-neutral-800/30", children });
};
var Card_default = Card;
export {
  Button_default as Button,
  Card_default as Card
};
