import React from "react";
import Card from "../card";
import Icon from "../icon";
import { formatRupiah } from "../../helpers";

export default function ProductItem({
  star,
  type,
  grow,
  name,
  image,
  minPurchase,
  price,
  returnCount,
  returnType,
}) {
  return (
    <div className="mb-3">
      <Card radius>
        <div className="d-flex">
          <img
            src={image}
            className="border me-3"
            style={{ borderRadius: 16, width: "3rem" }}
            alt={name}
          />
          <div className="d-flex flex-column justify-content-evenly">
            <div className="d-flex flex-row">
              <div className="d-flex align-items-center">
                <Icon name="star-fill" size=".7rem" theme="warning" />
                <label
                  className="text-darkgray fw-bold ms-1 me-2"
                  style={{ fontSize: ".7rem" }}
                >
                  {star}
                </label>
              </div>
              <div className="d-flex align-items-center">
                <Icon name="circle-fill" size=".4rem" theme="darkgray" />
                <label
                  className="text-darkgray fw-bold mx-2"
                  style={{ fontSize: ".7rem" }}
                >
                  {type}
                </label>
              </div>
              <div className="d-flex align-items-center">
                <Icon name="circle-fill" size=".4rem" theme="darkgray" />
                <label
                  className="text-darkgray fw-bold mx-2"
                  style={{ fontSize: ".7rem" }}
                >
                  {grow}
                </label>
              </div>
            </div>
            <h6 className="m-0 p-0 fw-bold" style={{ fontSize: ".9rem" }}>
              {name}
            </h6>
          </div>
        </div>
        <div className="d-flex mt-3 justify-content-between align-items-center">
          <div className="d-flex align-items-start flex-column">
            <label
              className="text-darkgray"
              style={{ fontSize: ".7rem", fontWeight: 500 }}
            >
              Min. Purchase
            </label>
            <label
              className="text-dark"
              style={{ fontSize: ".7rem", fontWeight: 500, marginTop: -2 }}
            >
              {formatRupiah(minPurchase, true)}
            </label>
          </div>
          <div className="d-flex align-items-center flex-column">
            <label
              className="text-darkgray"
              style={{ fontSize: ".7rem", fontWeight: 500 }}
            >
              Price
            </label>
            <label
              className="text-dark"
              style={{ fontSize: ".7rem", fontWeight: 500, marginTop: -2 }}
            >
              {formatRupiah(price)}
            </label>
          </div>
          <div className="d-flex align-items-end flex-column">
            <label
              className="text-darkgray"
              style={{ fontSize: ".7rem", fontWeight: 500 }}
            >
              Exp. Return 1Y
            </label>
            <label
              className={returnType === "up" ? "text-warning" : "text-danger"}
              style={{
                fontSize: ".7rem",
                fontWeight: 500,
                marginTop: -2,
                textAlign: "end",
              }}
            >
              {returnCount}%
            </label>
          </div>
        </div>
      </Card>
    </div>
  );
}
