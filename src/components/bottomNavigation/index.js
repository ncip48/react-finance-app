import React from "react";
import Icon from "../icon";
import { useNavigate } from "react-router-dom";
import Container from "../container";
import Spacer from "../spacer";
import itemBottoms from "../../constants/itemBottoms.json";

export default function BottomNavigation({ items = itemBottoms, active }) {
  const navigate = useNavigate();
  return (
    <Container centerX fixedBottom bg="white">
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
              {center !== index && (
                <Spacer
                  spacer
                  height={2}
                  bg={active === item.name ? "primary" : "white"}
                  style={{
                    marginTop: -8,
                    position: "absoulte",
                    marginBottom: 8,
                    borderRadius: 99,
                  }}
                />
              )}
              <div className="d-flex flex-column align-items-center">
                <Icon
                  name={active === item.name ? `${item.icon}` : item.icon}
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
