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

// ../../node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// src/components/Header.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Header = ({ title, size = "md", extraClassNames }) => {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      className: clsx_default(
        { "text-1xl my-1 font-medium": size === "sm" },
        { "text-2xl my-2 font-semibold": size === "md" },
        { "text-3xl my-2 font-bold": size === "lg" },
        `${extraClassNames}`
      ),
      children: title
    }
  );
};
var Header_default = Header;
export {
  Button_default as Button,
  Card_default as Card,
  Header_default as Header
};
