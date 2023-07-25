import React from "react";
import Container from "../container";
import Spacer from "../spacer";

export default function Tabs({ items, active, onChange }) {
  return (
    <Container centerX bg="white">
      <div className="row">
        {items.map((item, index) => {
          const center = Math.floor(items.length / 2);
          return (
            <div
              className={`col cursor-pointer text-center ${
                center === index ? "my-0 align-self-center" : "my-3"
              }`}
              key={index}
              onClick={() => {
                onChange(index);
              }}
              style={{
                height: center === index ? "inherit" : "fit-content",
              }}
            >
              <div className="d-flex flex-column align-items-center">
                <p
                  className={`mt-1 small fw-bold mb-2 text-${
                    active === index ? "primary" : "secondary"
                  } mb-0`}
                  style={{ fontSize: ".9rem" }}
                >
                  {item}
                </p>
                <Spacer
                  spacer
                  height={2}
                  bg={active === index ? "primary" : "white"}
                  style={{
                    marginBottom: -15,
                    position: "absoulte",
                    borderRadius: 99,
                    width: "100%",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
