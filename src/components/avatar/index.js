import React from "react";

export default function Avatar({ source, alt, size = "1.8rem" }) {
  return (
    <img
      src={source}
      alt={alt ?? "Avatar"}
      className="rounded-circle"
      style={{ width: size, height: size }}
    />
  );
}
