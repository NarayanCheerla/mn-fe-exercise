"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button_default,
  Card: () => Card_default
});
module.exports = __toCommonJS(src_exports);

// src/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({
  color = "white",
  children,
  disable = false,
  backgroundColor = "bg-blue-400",
  borderColor = "border-blue-700",
  onClick
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex justify-center cursor-pointer bg-slate-200 border rounded-md p-1 w-full my-1 hover:border-neutral-700 hover:bg-neutral-800/30", children });
};
var Card_default = Card;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card
});
