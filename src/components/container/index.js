import React from "react";

export default function Container({ children, center }) {
  return (
    <div className={`container`}>
      {center ? (
        <div className="row justify-content-center vh-100 align-items-center">
          <div className="col-xl-4 col-lg-6 col-md-8">{children}</div>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-8">{children}</div>
        </div>
      )}
    </div>
  );
}
