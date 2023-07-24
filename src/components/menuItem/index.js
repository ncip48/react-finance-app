import React from "react";
import Icon from "../icon";
import { useNavigate } from "react-router-dom";

export default function MenuItem({ title, icon, index }) {
  const navigate = useNavigate();
  return (
    <div
      className={`col-3 ${index < 4 ? "mb-3" : ""} my-1`}
      onClick={() => navigate("/worked")}
    >
      <div className="d-flex align-items-center flex-column">
        <Icon name={icon} size="1.7rem" />
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
