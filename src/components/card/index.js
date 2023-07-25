import React from "react";

export default function Card({
  children,
  style,
  radius,
  noPadding,
  noShadow = false,
}) {
  return (
    <div
      className={`card border-0 ${noPadding ? "p-0" : "p-3"}`}
      style={{
        borderRadius: radius ? 16 : 0,
        boxShadow: noShadow ? "" : "0px 0px 6px 1px rgba(0,0,0,0.2)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
