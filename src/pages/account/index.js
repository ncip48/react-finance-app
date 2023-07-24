import React from "react";
import {
  Card,
  Container,
  Header,
  Icon,
  NotificationItem,
  ProfileItem,
  Spacer,
} from "../../components";
import itemGenerals from "../../constants/itemGenerals.json";
import itemCustomizes from "../../constants/itemCustomizes.json";

export default function Account() {
  return (
    <>
      <Header
        title="Account"
        isBack
        iconRight={<Icon name="bell" badge="9+" />}
      />
      <Spacer height={50} bg="gray" />
      <Container centerX bg="gray">
        <span className="text-gray2 fw-bold" style={{ fontSize: ".9rem" }}>
          General
        </span>
        <Card
          noPadding
          radius
          style={{
            boxShadow: "0px 0px 12px 1px rgba(0,0,0,0.2)",
          }}
        >
          {itemGenerals.map((item, index) => {
            return <ProfileItem title={item.name} type={item.type} />;
          })}
        </Card>
      </Container>
    </>
  );
}
