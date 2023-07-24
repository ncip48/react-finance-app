import React from "react";
import Icon from "../icon";

export default function ListItem({ type, title, subtitle, count, time }) {
  return (
    <div className="d-flex align-items-center pt-4 ps-4">
      <i
        className={`bi bi-${
          type === "up"
            ? "graph-up-arrow text-warning"
            : "graph-down-arrow text-danger"
        }`}
        style={{ fontSize: "1.2rem" }}
      ></i>
      <div className="ms-4 pb-4 d-flex border-bottom w-100 align-items-center">
        <div>
          <h6 className="m-0 fw-bold">{title}</h6>
          <small className="text-darkgray">{subtitle}</small>
        </div>
        <div className="ms-auto pe-3">
          <div
            className={`d-flex align-items-center badge rounded-pill ${
              type === "up"
                ? "bg-warning-light text-warning"
                : "bg-danger-light text-danger"
            }`}
            style={{
              paddingTop: ".7rem",
              paddingBottom: ".7rem",
              paddingLeft: ".5rem",
              paddingRight: ".5rem",
            }}
          >
            <Icon
              name={type === "up" ? "caret-up-fill" : "caret-down-fill"}
              theme={type === "up" ? "warning" : "danger"}
              size=".8rem"
            />
            <small className="ms-1 m-0">{count}</small>
            <small className="ms-1 text-gray2">{time}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
