import React from "react";
import Container from "../container";

export default function Spacer({ height, bg }) {
  return (
    <Container centerX bg={bg}>
      <div className="bg-primary" style={{ height, marginBottom: -1 }}></div>
    </Container>
  );
}
