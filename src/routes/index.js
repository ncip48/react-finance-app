import React, { Fragment } from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import {
  Account,
  Home,
  Notification,
  Product,
  Signin,
  Transaction,
  Worked,
} from "../pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route index path="/signin" element={<Signin />} />
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/worked" element={<Worked />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/account" element={<Account />} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}
