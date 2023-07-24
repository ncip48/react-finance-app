import React from "react";

export default function Label({ title, hasSeeMore, onClick }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-2">
      <h4 className="fw-bold m-0">{title}</h4>
      {hasSeeMore && (
        <small
          className="text-primary fw-bold cursor-pointer"
          onClick={onClick}
          style={{ fontSize: ".8rem" }}
        >
          See More
        </small>
      )}
    </div>
  );
}
