import React from "react";
import {
  Avatar,
  BottomNavigation,
  Container,
  Flex,
  Icon,
  Navbar,
} from "../../components";
import itemBottoms from "../../constants/itemBottoms";
import { formatRupiah } from "../../helpers";

export default function Home() {
  return (
    <>
      <Navbar noMenu fixed>
        <Icon name="search" theme="white" />
        <Icon name="star" theme="white" />
        <Icon name="bell" theme="white" badge="9+" />
        <Avatar source={require("../../assets/pp.jpg")} />
      </Navbar>
      <Container centerX bg="primary">
        <div
          className="bg-primary"
          style={{ height: 55, marginBottom: -1 }}
        ></div>
      </Container>
      <Container centerX bg="primary">
        <div className="bg-primary">
          <h6 className="text-white fw-normal mb-1">Total Balance</h6>
          <h2 className="text-white">{formatRupiah("1315800622,31")}</h2>
          <Flex align="center" justify="flex-start">
            <Icon name="caret-up-fill" theme="warning" size=".8rem" />
            <h6 className="text-white fw-normal mb-0 ms-2">
              {formatRupiah("243489330,00")} (+14.37%)
            </h6>
          </Flex>
          <Icon name="house" />
        </div>
      </Container>
      <BottomNavigation items={itemBottoms} active="Home" />
    </>
  );
}
