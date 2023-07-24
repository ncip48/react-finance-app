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
  spacer,
  height,
}) {
  return (
    <div
      className={`container-fluid ${fullHeight && !height ? "vh-100" : ""} ${
        fixedTop ? "fixed-top" : ""
      }
      ${fixedBottom ? "fixed-bottom" : ""}`}
      style={{ marginTop: -1, height: height ? height : "" }}
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
          className={`col-xl-${spacer ? 12 : 4} col-lg-${
            spacer ? 12 : 6
          } col-md-${spacer ? 12 : 12} h-100 bg-${bg} ${padding ? "p-2" : ""}`}
          style={{ borderRadius: spacer ? 20 : 0 }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
