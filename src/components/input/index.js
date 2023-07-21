import React from "react";

export default function Input({
  label,
  placeholder,
  type,
  name,
  onChangeText,
}) {
  return (
    <div className="mb-3">
      <label
        className="form-label"
        style={{
          color: "#6c757d",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        autoComplete="off"
        className="form-control px-0"
        placeholder={placeholder}
        name={name}
        onChange={onChangeText}
        style={{
          borderRadius: 0,
          //only border bottom
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "1px solid #ced4da",
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
