import React from "react";

export default function Avatar({ source, alt, size = "1.7rem" }) {
  return (
    <img
      src={source}
      alt={alt}
      className="rounded-circle"
      style={{ width: size, height: size }}
    />
  );
}
