import React from "react";
import Card from "../card";
import Icon from "../icon";
import { formatRupiah } from "../../helpers";
import Spacer from "../spacer";

export default function TransactionItem({
  type,
  date,
  status,
  name,
  description,
  amount,
  price,
  total,
}) {
  return (
    <div className="mb-3">
      <Card radius>
        <div className="d-flex mb-3">
          <Icon name="arrow-down-circle-fill" theme="success" size="2.3rem" />
          <div className="d-flex flex-row justify-content-between ms-3 w-100 align-items-center">
            <div className="d-fle flex-column">
              <h6 className="m-0 p-0 fw-bold" style={{ fontSize: ".9rem" }}>
                {type}
              </h6>
              <h6 className="m-0 p-0 text-gray2" style={{ fontSize: ".75rem" }}>
                {date}
              </h6>
            </div>
            <div
              className={`badge rounded-pill px-3 py-2 ${
                status === 0
                  ? "bg-primary-light text-primary"
                  : status === 1
                  ? "bg-warning-light text-warning"
                  : "bg-success-light text-success"
              }`}
              style={{ height: "fit-content" }}
            >
              <small className="m-0">
                {status === 0 ? "Submitted" : status === 1 ? "Process" : "Done"}
              </small>
            </div>
          </div>
        </div>
        <Spacer height={1} bg="gray" />
        <div className="d-fle flex-column mt-3">
          <h6 className="m-0 p-0 fw-bold" style={{ fontSize: ".9rem" }}>
            {name}
          </h6>
          <h6 className="m-0 p-0 text-darkgray" style={{ fontSize: ".85rem" }}>
            {description}
          </h6>
        </div>
        <div className="d-flex mt-3 justify-content-between align-items-center">
          <div className="d-flex align-items-start flex-column">
            <label
              className="text-darkgray"
              style={{ fontSize: ".7rem", fontWeight: 500 }}
            >
              Amount (IDR)
            </label>
            <label
              className="text-dark"
              style={{ fontSize: ".7rem", fontWeight: 500, marginTop: -2 }}
            >
              {formatRupiah(amount, false, false)}
            </label>
          </div>
          <div className="d-flex align-items-center flex-column">
            <label
              className="text-darkgray"
              style={{ fontSize: ".7rem", fontWeight: 500 }}
            >
              Price (IDR)
            </label>
            <label
              className="text-dark"
              style={{ fontSize: ".7rem", fontWeight: 500, marginTop: -2 }}
            >
              {price}
            </label>
          </div>
          <div className="d-flex align-items-end flex-column">
            <label
              className="text-darkgray"
              style={{ fontSize: ".7rem", fontWeight: 500 }}
            >
              Total (Unit)
            </label>
            <label
              style={{
                fontSize: ".7rem",
                fontWeight: 500,
                marginTop: -2,
                textAlign: "end",
                marginLeft: 5,
              }}
            >
              {total}
            </label>
          </div>
        </div>
      </Card>
    </div>
  );
}
