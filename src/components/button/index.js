import React from "react";

export default function Button({
  title,
  theme = "primary",
  block = false,
  radius = false,
  disabled = false,
  style,
  onClick,
}) {
  return (
    <div className={block ? `d-grid gap-2` : ""} style={style}>
      <button
        className={`btn btn-${theme} py-2`}
        disabled={disabled}
        style={{ borderRadius: radius ? 8 : 0 }}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}
