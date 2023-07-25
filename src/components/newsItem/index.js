import React from "react";
import Card from "../card";

export default function NewsItem({ title, image, onClick }) {
  return (
    <div
      className="cursor-pointer"
      onClick={onClick}
      style={{ width: "10rem", marginLeft: 5, marginRight: 5 }}
    >
      <Card
        noPadding
        style={{ width: "inherit", height: "100%", borderRadius: 16 }}
      >
        <img
          src={require(`../../assets/${image}`)}
          alt={title}
          style={{
            width: "100%",
            height: "10rem",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />
        <div className="ml-3 mt-3 pt-0 px-3 pb-3">
          <h6 className="mb-0 fw-bold clamp-3">{title}</h6>
        </div>
      </Card>
    </div>
  );
}
