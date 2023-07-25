import React from "react";
import {
  BottomNavigation,
  Container,
  Header,
  Icon,
  Pill,
  Spacer,
  Tabs,
  TransactionItem,
} from "../../components";
import itemTransactions from "../../constants/itemTransactions.json";

const tabItems = ["Mutual Funds", "Bonds", "Stocks"];
const pillLists = [
  {
    name: "All Transaction",
    icon: "chevron-down",
  },
  {
    name: "All Status",
    icon: "chevron-down",
  },
  {
    name: "Al Pending",
    icon: "chevron-down",
  },
];

export default function Transaction() {
  const [active, setActive] = React.useState(0);
  return (
    <>
      <Header
        title="Transaction"
        isBack={false}
        center
        iconRight={<Icon name="search" />}
      />
      <Spacer height={48} bg="gray" />
      <Tabs items={tabItems} active={active} onChange={setActive} />
      <Container centerX bg="gray" fullHeight>
        <div className="container-scroll gap-2 my-2">
          {pillLists.map((item, index) => {
            return <Pill title={item.name} iconRight={item.icon} key={index} />;
          })}
        </div>
        {itemTransactions.map((item, index) => {
          return (
            <TransactionItem
              type={item.type}
              date={item.date}
              status={item.status}
              name={item.name}
              description={item.description}
              amount={item.amount}
              price={item.price}
              total={item.total}
              key={index}
            />
          );
        })}
      </Container>
      <BottomNavigation active="Transaction" />
    </>
  );
}
