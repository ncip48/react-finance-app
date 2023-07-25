import React from "react";
import {
  BottomNavigation,
  Container,
  Header,
  Icon,
  Pill,
  ProductItem,
  Spacer,
  Tabs,
} from "../../components";
import itemProducts from "../../constants/itemProducts.json";

const tabItems = ["Mutual Funds", "Bonds", "Stocks"];
const pillLists = [
  {
    name: "Filter",
    icon: "sliders",
  },
  {
    name: "Sort",
    icon: "arrow-down-up",
  },
  {
    name: "Compare",
    icon: "layers",
  },
];

export default function Product() {
  const [active, setActive] = React.useState(0);
  return (
    <>
      <Header
        title="Products"
        isBack={false}
        center
        iconRight={<Icon name="search" />}
      />
      <Spacer height={48} bg="gray" />
      <Tabs items={tabItems} active={active} onChange={setActive} />
      <Container centerX bg="gray" fullHeight>
        <div className="container-scroll gap-2 my-2">
          {pillLists.map((item, index) => {
            return <Pill title={item.name} iconLeft={item.icon} key={index} />;
          })}
        </div>
        {itemProducts.map((item, index) => {
          return (
            <ProductItem
              star={item.star}
              type={item.type}
              grow={item.grow}
              name={item.name}
              image={require("../../assets/" + item.image)}
              minPurchase={item.minPurchase}
              price={item.price}
              returnCount={item.return}
              returnType={item.returnType}
              key={index}
            />
          );
        })}
      </Container>
      <BottomNavigation active="Products" />
    </>
  );
}
