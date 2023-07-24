import React from "react";
import Icon from "../icon";

export default function NotificationItem({
  type,
  title,
  subtitle,
  count,
  date,
  onClick,
}) {
  return (
    <div
      className="d-flex align-items-center pt-3 ps-2 cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`p-2 bg-${
          type === "received"
            ? "primary"
            : type === "sent"
            ? "success"
            : type === "password"
            ? "danger"
            : "warning"
        }
              `}
        style={{
          borderRadius: 99,
        }}
      >
        <Icon
          name={
            type === "received"
              ? "arrow-down"
              : type === "sent"
              ? "arrow-right"
              : type === "password"
              ? "key"
              : "chat"
          }
          theme="white"
          size="1.2rem"
        />
      </div>
      <div className="ms-4 pb-3 d-flex border-bottom w-100 align-items-center">
        <div>
          <h6 className="m-0 fw-bold">{title}</h6>
          <small className="text-muted fw-bold">{subtitle}</small>
          <br />
          <small className="text-darkgray" style={{ fontSize: ".75rem" }}>
            {date}
          </small>
        </div>
        <div className="ms-auto pe-3">
          {count && (
            <span className="badge bg-primary rounded-pill">{count}</span>
          )}
          <Icon name="chevron-right" theme="darkgray" size=".9rem" />
        </div>
      </div>
    </div>
  );
}
