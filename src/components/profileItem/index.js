import React from "react";
import Icon from "../icon";

export default function ProfileItem({ type, title, onClick }) {
  return (
    <div
      className="d-flex align-items-center pt-3 ps-2 cursor-pointer"
      onClick={onClick}
    >
      <div className={`p-1`}></div>
      <div className="ms-4 pb-3 d-flex border-bottom w-100 align-items-center">
        <div>
          <h6 className="m-0 fw-bold text-muted">{title}</h6>
        </div>
        <div className="ms-auto pe-3">
          <div className="d-flex align-items-center justify-content-center">
            <Icon name="chevron-right" theme="darkgray" size=".9rem" />
          </div>
        </div>
      </div>
    </div>
  );
}
