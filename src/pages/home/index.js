import React from "react";
import {
  Avatar,
  BottomNavigation,
  Card,
  Container,
  Flex,
  Icon,
  Label,
  ListItem,
  MenuItem,
  Navbar,
  Pill,
  Spacer,
  TipItem,
} from "../../components";
import { formatRupiah } from "../../helpers";
import { useNavigate } from "react-router-dom";
import itemMenus from "../../constants/itemsMenus.json";
import itemLists from "../../constants/itemLists.json";

const pillLists = [
  "Model Portofolios",
  "Mutual Funds",
  "Bonds",
  "Model Portofolios",
  "Mutual Funds",
  "Bonds",
];

const tipLists = [
  "Successful investing",
  "Choosing a stable investment product",
  "Successful investing",
  "Choosing a stable investment product",
];

export default function Home() {
  const navigate = useNavigate();

  const [activePill, setActivePill] = React.useState(0);

  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

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
          <h2 className="text-white fw-bold">
            {formatRupiah("1315800622,31")}
          </h2>
          <Flex align="center" justify="flex-start">
            <Icon name="caret-up-fill" theme="warning" size=".8rem" />
            <small className="text-white fw-normal mb-0 ms-2">
              {formatRupiah("243489330,00")} (+14.37%)
            </small>
          </Flex>
          <Spacer height={125} bg="primary" />
        </div>
      </Container>
      <Container centerX bg="gray" height={130}>
        <Card
          radius
          style={{
            position: "absoulte",
            top: -100,
            borderRadius: 16,
            boxShadow: "0px 0px 12px 1px rgba(0,0,0,0.2)",
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
      <Container centerX bg="gray">
        <Label title="Top 5 List" />
        <div className="container-scroll gap-2 mb-1" onWheel={handleScroll}>
          {pillLists.map((item, index) => {
            return (
              <Pill
                title={item}
                key={index}
                active={activePill === index}
                index={index}
                onClick={() => setActivePill(index)}
              />
            );
          })}
        </div>
        <Card radius noPadding>
          {itemLists.map((item, index) => {
            return (
              <ListItem
                type={item.type}
                key={index}
                title={item.name}
                subtitle={item.actor}
                count={item.count}
                time={item.time}
                onClick={() => {
                  navigate("/worked");
                }}
              />
            );
          })}
        </Card>
        <Spacer height={30} />
        <Label
          title="Investment Tips"
          hasSeeMore
          onClick={() => navigate("/worked")}
        />
        <div className="container-scroll gap-3 mb-1" onWheel={handleScroll}>
          {tipLists.map((item, index) => {
            return <TipItem title={item} key={index} />;
          })}
        </div>
      </Container>
      <Spacer height={100} bg="gray" />
      <BottomNavigation active="Home" />
    </>
  );
}
