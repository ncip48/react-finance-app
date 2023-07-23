/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Flex from "../flex";
import Container from "../container";

export default function Navbar({
  theme = "primary",
  children,
  noMenu,
  title,
  fixed,
}) {
  return (
    // <nav
    //   className={`navbar navbar-expand-lg
    // ${fixed ? "fixed-top" : "static-top"}
    // `}
    // >
    // <div className="container">
    <Container centerX bg="primary" padding fixedTop>
      {title && (
        <a className="navbar-brand" href="#">
          {title}
        </a>
      )}
      {!noMenu && (
        <>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">{children}</li>
            </ul>
          </div>
        </>
      )}
      <Flex gap={4} justify="end" align="center" width={100}>
        {children}
      </Flex>
    </Container>
    // </div>
    // </nav>
  );
}
