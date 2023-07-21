import React from "react";

export default function Container({ children, center }) {
  return (
    <div className={`container`}>
      {center ? (
        <div className="row justify-content-center vh-100 align-items-center">
          <div className="col-md-6">{children}</div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6">{children}</div>
        </div>
      )}
    </div>
  );
}
