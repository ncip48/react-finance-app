import React from "react";

export default function Card({ children, style }) {
  return (
    <div className="card border-0 p-3" style={style}>
      {children}
    </div>
  );
}
