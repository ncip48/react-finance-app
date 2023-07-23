import React from "react";
import {
  Avatar,
  BottomNavigation,
  Card,
  Container,
  Flex,
  Icon,
  Navbar,
  Spacer,
} from "../../components";
import itemBottoms from "../../constants/itemBottoms";
import { formatRupiah } from "../../helpers";

export default function Product() {
  return (
    <>
      <Navbar noMenu fixed>
        <Icon name="search" theme="white" />
        <Icon name="star" theme="white" />
        <Icon name="bell" theme="white" badge="9+" />
        <Avatar source={require("../../assets/pp.jpg")} />
      </Navbar>
      <Spacer height={55} bg="primary" />
      <Container centerX bg="primary">
        <div className="bg-primary">
          <small className="text-white fw-normal mb-1">Total Balance</small>
          <h2 className="text-white">{formatRupiah("1315800622,31")}</h2>
          <Flex align="center" justify="flex-start">
            <Icon name="caret-up-fill" theme="warning" size=".8rem" />
            <small className="text-white fw-normal mb-0 ms-2">
              {formatRupiah("243489330,00")} (+14.37%)
            </small>
          </Flex>
          <Spacer height={130} bg="primary" />
        </div>
      </Container>
      <Container centerX bg="gray">
        <Card
          style={{
            position: "absoulte",
            top: -50,
          }}
        >
          <h5>asodaso</h5>
        </Card>
      </Container>
      <BottomNavigation items={itemBottoms} active="Products" />
    </>
  );
}
