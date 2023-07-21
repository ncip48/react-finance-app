import React from "react";

export default function Container({ children, center, fullHeight = false }) {
  return (
    <div className={`container ${fullHeight ? "vh-100" : ""}`}>
      {center ? (
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-xl-4 col-lg-6 col-md-8 h-100">{children}</div>
        </div>
      ) : (
        <div className="row justify-content-center h-100">
          <div className="col-xl-4 col-lg-6 col-md-8 h-100">{children}</div>
        </div>
      )}
    </div>
  );
}
