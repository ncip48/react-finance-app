import React from "react";
import {
  Container,
  Header,
  Icon,
  NotificationItem,
  Spacer,
} from "../../components";
import itemNotifications from "../../constants/itemNotifications.json";

export default function Notification() {
  return (
    <>
      <Header
        title="Notifications"
        isBack
        iconRight={<Icon name="bell-slash" />}
      />
      <Spacer height={50} bg="white" />
      <Container centerX bg="white">
        {itemNotifications.map((item, index) => {
          return (
            <NotificationItem
              title={item.title}
              subtitle={item.description}
              date={item.date}
              count={item.count}
              type={item.type}
            />
          );
        })}
      </Container>
    </>
  );
}
