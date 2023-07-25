import React from "react";
import Card from "../card";
import Icon from "../icon";
import { formatRupiah } from "../../helpers";
import Spacer from "../spacer";

export default function PortofolioItem({
  name,
  goal,
  image,
  status,
  currentBalance,
  earnings,
  returnCount,
  returnType,
  needOptimization,
}) {
  return (
    <div className="mb-3">
      <Card radius>
        <div className="d-flex mb-3">
          <img
            src={image}
            className="border me-3"
            style={{ borderRadius: 16, width: "3rem" }}
            alt={name}
          />
          <div className="d-flex flex-row justify-content-between ms-0 w-100 align-items-center">
            <div className="d-fle flex-column">
              <h6 className="m-0 p-0 fw-bold" style={{ fontSize: ".9rem" }}>
                {name}
              </h6>
              <h6 className="m-0 p-0 text-gray2" style={{ fontSize: ".75rem" }}>
                {goal ? "Goal" : "Non Goal"}
              </h6>
            </div>
            <div
              className={`badge rounded-pill px-3 py-2 ${
                status === 0
                  ? "bg-warning-light text-warning"
                  : "bg-success-light text-success"
              }`}
              style={{ height: "fit-content" }}
            >
              <small className="m-0">
                {status === 0 ? "Progress" : "Done"}
              </small>
            </div>
          </div>
        </div>
        <Spacer height={1} bg="gray" />
        <div className="d-fle flex-column mt-3">
          <h6 className="m-0 p-0 text-darkgray" style={{ fontSize: ".75rem" }}>
            Current Balance
          </h6>
          <h6 className="m-0 p-0 fw-bold" style={{ fontSize: ".9rem" }}>
            {formatRupiah(currentBalance)}
          </h6>
        </div>
        <div className="d-flex mt-3 justify-content-between align-items-center">
          <div className="d-flex align-items-start flex-column">
            <label
              className="text-darkgray"
              style={{ fontSize: ".7rem", fontWeight: 500 }}
            >
              Earnings
            </label>
            <label
              className="fw-bold text-warning"
              style={{ fontSize: ".75rem", fontWeight: 500, marginTop: -2 }}
            >
              {formatRupiah(earnings)}
            </label>
          </div>
          <div className="d-flex align-items-end flex-column">
            <label
              className="text-darkgray"
              style={{ fontSize: ".7rem", fontWeight: 500 }}
            >
              Returns
            </label>
            <div className="d-flex align-items-center">
              <Icon
                name={returnType === "up" ? "caret-up-fill" : "caret-down-fill"}
                theme={returnType === "up" ? "warning" : "danger"}
                size=".8rem"
              />
              <label
                className={returnType === "up" ? "text-warning" : "text-danger"}
                style={{
                  fontSize: ".7rem",
                  fontWeight: 500,
                  marginTop: -2,
                  textAlign: "end",
                  marginLeft: 5,
                }}
              >
                {returnCount}%
              </label>
            </div>
          </div>
        </div>
        {needOptimization && (
          <div
            className="d-flex mt-3 align-items-center bg-gray"
            style={{ borderRadius: 99, width: "fit-content" }}
          >
            <div className="p-2 bg-danger border-danger rounded-circle">
              <Icon
                name="exclamation-triangle-fill"
                theme="white"
                size=".8rem"
              />
            </div>
            <div className="d-flex align-items-start flex-column ps-2 pe-3">
              <label
                className="text-darkgray fw-bold"
                style={{ fontSize: ".7rem", fontWeight: 500 }}
              >
                Need Optimization
              </label>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
