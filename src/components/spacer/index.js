import React from "react";
import Container from "../container";

export default function Spacer({ height, bg, style }) {
  return (
    <div style={style}>
      <Container centerX bg={bg}>
        <div
          className={`bg-${bg} w-100`}
          style={{ height, marginBottom: 0 }}
        ></div>
      </Container>
    </div>
  );
}
