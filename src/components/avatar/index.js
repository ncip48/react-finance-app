import React from "react";
import Icon from "../icon";

export default function Avatar({
  source,
  alt,
  size = "1.8rem",
  onClick,
  border,
  edit,
}) {
  return (
    <div className={`${border ? "p-1" : "p-0"} bg-white rounded-circle`}>
      <img
        src={source}
        alt={alt ?? "Avatar"}
        className="rounded-circle"
        style={{ width: size, height: size, cursor: onClick ? "pointer" : "" }}
        onClick={onClick}
      />
      {edit && (
        <div
          className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center ms-auto position-relative"
          style={{ width: "1.8rem", height: "1.8rem", marginTop: -29 }}
        >
          <Icon name="camera" size="1rem" theme="white" />
        </div>
      )}
    </div>
  );
}
