import React from "react";
import {
  Avatar,
  Card,
  Container,
  Flex,
  Header,
  Icon,
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
        <Spacer height={40} bg="gray" />
        <Flex>
          <Avatar
            source={require("../../assets/pp.jpg")}
            size="6rem"
            border
            edit
          />
        </Flex>
        <Spacer height={20} bg="gray" />
        <span className="text-gray2 fw-bold" style={{ fontSize: ".9rem" }}>
          General
        </span>
        <Card
          noPadding
          radius
          style={{
            boxShadow: "0px 0px 12px 1px rgba(0,0,0,0.2)",
            marginTop: 5,
          }}
        >
          {itemGenerals.map((item, index) => {
            return (
              <ProfileItem title={item.name} type={item.type} key={index} />
            );
          })}
        </Card>
        <Spacer bg="gray" height={20} />
        <span className="text-gray2 fw-bold" style={{ fontSize: ".9rem" }}>
          Customize App
        </span>
        <Card
          noPadding
          radius
          style={{
            boxShadow: "0px 0px 12px 1px rgba(0,0,0,0.2)",
            marginTop: 5,
          }}
        >
          {itemCustomizes.map((item, index) => {
            return (
              <ProfileItem
                title={item.name}
                type={item.type}
                key={index}
                isChecked={item.isChecked}
                checkedSwitch={(val) => console.log(val)}
              />
            );
          })}
        </Card>
      </Container>
    </>
  );
}
