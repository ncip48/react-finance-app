import React from "react";
import Container from "../container";

export default function Spacer({ height, bg, style, spacer }) {
  return (
    <div style={style}>
      <Container centerXY bg={bg} spacer={spacer}>
        <div
          className={`bg-${bg} w-100`}
          style={{ height, marginBottom: 0 }}
        ></div>
      </Container>
    </div>
  );
}
