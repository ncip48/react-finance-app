import React from "react";
import Icon from "../icon";

export default function index({ title, icon, index }) {
  return (
    <div className={`col-3 ${index < 4 ? "mb-3" : ""} my-1`}>
      <div className="d-flex align-items-center flex-column">
        <Icon name={icon} size="2rem" />
        <small
          className="mt-2 text-center"
          style={{
            fontWeight: 500,
            fontSize: ".75rem",
          }}
        >
          {title}
        </small>
      </div>
    </div>
  );
}
