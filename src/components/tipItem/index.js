import React from "react";
import Card from "../card";
import Icon from "../icon";

export default function TipItem({ title, onClick }) {
  return (
    <div
      className="cursor-pointer"
      onClick={onClick}
      style={{ width: "10rem" }}
    >
      <Card style={{ width: "inherit", height: "100%" }}>
        <Icon name="info-circle-fill" theme="primary" />
        <div className="ml-3 mt-3">
          <h6 className="mb-0">{title}</h6>
        </div>
      </Card>
    </div>
  );
}
