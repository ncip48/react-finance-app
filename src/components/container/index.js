import React from "react";

export default function Container({
  children,
  centerXY,
  centerX,
  centerY,
  fullHeight = false,
  bg,
  padding,
  fixedTop,
  fixedBottom,
}) {
  return (
    <div
      className={`container ${fullHeight ? "vh-100" : ""} ${
        fixedTop ? "fixed-top" : ""
      }
      ${fixedBottom ? "fixed-bottom" : ""}`}
      style={{ marginTop: -1 }}
    >
      <div
        className={`row ${
          centerXY ? "justify-content-center align-items-center" : ""
        }
        ${centerX ? "justify-content-center" : ""}
        ${centerY ? "align-items-center" : ""}
        h-100`}
      >
        <div
          className={`col-xl-4 col-lg-6 col-md-8 h-100 bg-${bg} ${
            padding ? "p-2" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
