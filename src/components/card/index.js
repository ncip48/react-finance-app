import React from "react";

export default function Card({ children, style, radius, noPadding }) {
  return (
    <div
      className={`card border-0 ${noPadding ? "p-0" : "p-3"}`}
      style={
        style ?? {
          borderRadius: radius ? 16 : 0,
        }
      }
    >
      {children}
    </div>
  );
}
