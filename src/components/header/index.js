import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Icon from "../icon";
import Container from "../container";
import { useNavigate } from "react-router-dom";

export default function Header({ isBack, title, iconRight, center }) {
  const navigate = useNavigate();
  return (
    <Container centerX bg="white" padding fixedTop height="3rem">
      <nav className="d-flex align-items-center justify-content-between bg-white h-100">
        {isBack ? (
          <div className="px-2">
            <Icon
              name="chevron-left"
              onClick={() => {
                navigate(-1);
              }}
            />
          </div>
        ) : (
          <div className="px-2"></div>
        )}

        <span className="fs-6 fw-bold mb-0 h1">{title}</span>

        {iconRight && <div className="px-3">{iconRight}</div>}
      </nav>
    </Container>
  );
}
