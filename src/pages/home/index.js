import React from "react";
import { Avatar, Container, Icon, Navbar } from "../../components";

export default function Home() {
  return (
    <>
      <Navbar noMenu fixed>
        <Icon name="search" theme="white" />
        <Icon name="star" theme="white" />
        <Icon name="bell" theme="white" badge="9+" />
        <Avatar source="https://avatars.githubusercontent.com/u/62829965?v=4" />
      </Navbar>
      <div style={{ height: 50 }}></div>
      <Container>
        Home
        <h1>asdf</h1>
        <Icon name="house" />
      </Container>
    </>
  );
}
