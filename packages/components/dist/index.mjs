// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({ textColor = "white", children }) => {
  return /* @__PURE__ */ jsx("button", { className: "bg-blue-400 rounded-lg p-2 text-lg border border-solid border-blue-700 m-1", style: { color: textColor }, children });
};
var Button_default = Button;
export {
  Button_default as Button
};
