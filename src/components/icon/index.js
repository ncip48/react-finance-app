import React from "react";

export default function Icon({
  name,
  color,
  size = "1.4rem",
  theme = "primary",
  badge,
}) {
  return (
    <>
      <i
        className={`bi bi-${name} text-${theme} ${
          !badge ? "d-flex align-items-center" : ""
        }`}
        style={{ color, fontSize: size, height: !badge ? size : "" }}
      >
        {badge && typeof badge === "boolean" && (
          <span
            className="position-absolute top-2 translate-middle bg-danger border border-light rounded-circle"
            style={{ padding: ".25em", top: 15 }}
          ></span>
        )}
        {badge && typeof badge === "string" && (
          <span
            className="position-absolute top-1 translate-middle badge rounded-pill bg-danger fw-normal"
            style={{ fontSize: 10, top: 15, fontStyle: "normal" }}
          >
            {badge}
            <span className="visually-hidden">unread messages</span>
          </span>
        )}
      </i>
    </>
  );
}
