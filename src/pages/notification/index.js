import React from "react";
import { Header, Icon } from "../../components";

export default function Notification() {
  return (
    <>
      <Header
        title="Notifications"
        isBack
        iconRight={<Icon name="bell-slash" />}
      />
      Notification
      <h1>Notification</h1>
    </>
  );
}
