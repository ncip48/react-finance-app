import React from "react";

export default function Flex({
  padding,
  justify = "center",
  align = "normal",
  children,
  fullHeight = false,
  column,
  row,
  gap,
  width,
  bg,
}) {
  return (
    <div
      className={`d-flex justify-content-${justify} ${padding ? "p-2" : ""} ${
        fullHeight ? "h-100" : ""
      } align-items-${align}
      ${column ? "flex-column" : ""}
      ${row ? "flex-row" : ""}
      ${gap ? `gap-${gap}` : ""}
      ${width ? `w-${width}` : ""}
      bg-${bg}
      `}
    >
      {children}
    </div>
  );
}
