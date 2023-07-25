import React from "react";
import {
  BottomNavigation,
  Container,
  Flex,
  Header,
  Icon,
  Pill,
  PortofolioItem,
  Spacer,
} from "../../components";
import itemBottoms from "../../constants/itemBottoms";
import { formatRupiah } from "../../helpers";
import itemPortofolios from "../../constants/itemPortofolios.json";

const pillLists = [
  {
    name: "Filter",
    icon: "sliders",
  },
  {
    name: "Sort",
    icon: "arrow-down-up",
  },
];

export default function Portofolio() {
  return (
    <>
      <Header
        title="My Portofolio"
        isBack={false}
        noCenter
        iconRight={<Icon name="search" />}
      />
      <Spacer height={55} bg="white" />
      <Container centerX bg="white">
        <div className="bg-white mb-4">
          <small className="text-dark fw-normal mb-1">Total Balance</small>
          <h2 className="text-dark fw-bold">{formatRupiah("1315800622,31")}</h2>
          <Flex align="center" justify="flex-start">
            <Icon name="caret-up-fill" theme="warning" size=".8rem" />
            <small className="text-warning fw-normal mb-0 ms-2">
              {formatRupiah("243489330,00")} (+14.37%)
            </small>
          </Flex>
        </div>
      </Container>
      <Container centerX bg="gray" fullHeight>
        <div className="container-scroll gap-2 my-3 mb-2">
          {pillLists.map((item, index) => {
            return <Pill title={item.name} iconLeft={item.icon} key={index} />;
          })}
        </div>
        {itemPortofolios.map((item, index) => {
          return (
            <PortofolioItem
              name={item.name}
              goal={item.goal}
              image={require("../../assets/" + item.image)}
              status={item.status}
              currentBalance={item.currentBalance}
              earnings={item.earnings}
              returnCount={item.returns}
              returnType={item.returnType}
              needOptimization={item.needOptimization}
              key={index}
            />
          );
        })}
      </Container>

      <BottomNavigation items={itemBottoms} active="Portofolio" />
    </>
  );
}
