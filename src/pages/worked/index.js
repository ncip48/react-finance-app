import React from "react";
import { Button, Container, Flex, Icon, Spacer } from "../../components";
import { useNavigate } from "react-router-dom";

export default function Worked() {
  const navigate = useNavigate();
  return (
    <Container centerXY fullHeight bg="gray">
      <Flex fullHeight column align="center">
        <Icon name="check-circle-fill" theme="success" size="5rem" />
        <Spacer height={20} />
        <h6>This button is working</h6>
        <Spacer height={10} />
        <small className="text-center text-muted">
          Thanks you, your transaction has been sent and we will process it
          immediately
        </small>
        <Spacer height={20} />

        <Button
          title="Back to Home"
          theme="outline-primary"
          block
          radius
          onClick={() => {
            navigate("/home");
          }}
        />
      </Flex>
    </Container>
  );
}
