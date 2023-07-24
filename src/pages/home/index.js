import React from "react";
import {
  Avatar,
  BottomNavigation,
  Card,
  Container,
  Flex,
  Icon,
  MenuItem,
  Navbar,
  Spacer,
} from "../../components";
import itemBottoms from "../../constants/itemBottoms";
import { formatRupiah } from "../../helpers";
import { useNavigate } from "react-router-dom";
import itemMenus from "../../constants/itemsMenus.json";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar noMenu fixed>
        <Icon name="search" theme="white" onClick={() => navigate("/worked")} />
        <Icon name="star" theme="white" onClick={() => navigate("/worked")} />
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
          <Spacer height={125} bg="primary" />
        </div>
      </Container>
      <Container centerX bg="gray">
        <Card
          style={{
            position: "absoulte",
            top: -100,
            borderRadius: 16,
            elevation: 3,
          }}
        >
          <div className="row">
            {itemMenus.map((item, index) => {
              return (
                <MenuItem
                  title={item.title}
                  key={index}
                  icon={item.icon}
                  index={index}
                />
              );
            })}
          </div>
        </Card>
      </Container>
      <BottomNavigation items={itemBottoms} active="Home" />
    </>
  );
}
