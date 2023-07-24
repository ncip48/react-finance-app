import React from "react";
import Icon from "../icon";
import { useNavigate } from "react-router-dom";
import Container from "../container";
import Spacer from "../spacer";

export default function BottomNavigation({ items, active }) {
  const navigate = useNavigate();
  return (
    <Container centerX fixedBottom>
      <div className="row">
        {items.map((item, index) => {
          const center = Math.floor(items.length / 2);
          return (
            <div
              className={`col cursor-pointer text-center ${
                center === index ? "my-0 align-self-center" : "my-2"
              }`}
              key={index}
              onClick={() => {
                navigate(item.link);
              }}
              style={{
                height: center === index ? "inherit" : "fit-content",
              }}
            >
              <Spacer
                spacer
                height={2}
                bg={
                  center !== index && active === item.name ? "primary" : "white"
                }
                style={{
                  marginTop: -5,
                  position: "absoulte",
                  marginBottom: 8,
                }}
              />
              <div className="d-flex flex-column align-items-center">
                <Icon
                  name={active === item.name ? `${item.icon}-fill` : item.icon}
                  theme={
                    center === index
                      ? "primary"
                      : active === item.name
                      ? "primary"
                      : "secondary"
                  }
                  size={center === index ? "3rem" : "1.4rem"}
                />
                {center !== index && (
                  <p
                    className={`mt-1 small text-${
                      active === item.name ? "primary" : "secondary"
                    } mb-0`}
                    style={{ fontSize: ".7rem" }}
                  >
                    {item.name}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
