import React from "react";
import Container from "../container";

export default function Spacer({ height, bg }) {
  return (
    <Container centerX bg={bg}>
      <div
        className="bg-primary w-100"
        style={{ height, marginBottom: 0 }}
      ></div>
    </Container>
  );
}
