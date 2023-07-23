import React from "react";
import Icon from "../icon";
import { useNavigate } from "react-router-dom";
import Container from "../container";

export default function BottomNavigation({ items, active, navigation }) {
  const navigate = useNavigate();
  return (
    // <div className="bottom-navigation fixed-bottom bg-white">
    //   <div className="container-fluid">
    <Container centerX fixedBottom>
      <div className="row">
        {items.map((item, index) => {
          //if center index then add bg-primary
          const center = Math.floor(items.length / 2);
          return (
            <div
              className={`col text-center ${
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
              <div className="d-flex flex-column align-items-center">
                <Icon
                  name={item.icon}
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
    // </div>
    // </div>
  );
}
