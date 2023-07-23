import React from "react";

export default function Icon({
  name,
  color,
  size = "1.4rem",
  theme = "primary",
  badge,
}) {
  return (
    <div>
      <i
        className={`bi bi-${name} text-${theme}`}
        style={{ color, fontSize: size }}
      >
        {badge && typeof badge === "boolean" && (
          <span
            class="position-absolute top-2 translate-middle bg-danger border border-light rounded-circle"
            style={{ padding: ".25em", top: 15 }}
          ></span>
        )}
        {badge && typeof badge === "string" && (
          <span
            class="position-absolute top-1 translate-middle badge rounded-pill bg-danger fw-normal"
            style={{ fontSize: 10, top: 15, fontStyle: "normal" }}
          >
            {badge}
            <span class="visually-hidden">unread messages</span>
          </span>
        )}
      </i>
    </div>
  );
}
