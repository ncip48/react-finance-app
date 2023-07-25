import React from "react";
import Icon from "../icon";

export default function Pill({ active, title, onClick, iconLeft, iconRight }) {
  return (
    <div
      className={`d-flex align-items-center gap-2 px-3 py-3 badge rounded-pill cursor-pointer ${
        active ? "active bg-primary text-primary" : "bg-white text-darkgray"
      }`}
      onClick={onClick}
      style={{
        boxShadow: active ? "" : "0px 0px 3px 0.5px rgba(0,0,0,0.1)",
        fontSize: ".75rem",
      }}
    >
      {iconLeft && (
        <Icon
          name={iconLeft}
          theme={active ? "primary" : "darkgray"}
          size=".8rem"
        />
      )}
      {title}
    </div>
  );
}
