import React, { Fragment } from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, Product, Signin } from "../pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route index path="/signin" element={<Signin />} />
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}
