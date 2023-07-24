import React from "react";

export default function Pill({ active, title, onClick, index }) {
  return (
    <div
      className={`px-3 py-3 badge rounded-pill cursor-pointer ${
        active ? "active bg-primary text-primary" : "bg-light text-darkgray"
      }`}
      onClick={onClick}
      style={{
        boxShadow: active ? "" : "0px 0px 3px 0.5px rgba(0,0,0,0.1)",
        fontSize: ".75rem",
      }}
    >
      {title}
    </div>
  );
}
