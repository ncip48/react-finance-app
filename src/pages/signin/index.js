import React from "react";
import { Button, Input, Container, Card, Flex } from "../../components";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  const validEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const notEmpty = (value) => {
    return value !== "";
  };

  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const [valid, setValid] = React.useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  React.useEffect(() => {
    if (
      validEmail(form.email) &&
      notEmpty(form.password) &&
      notEmpty(form.email)
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [form]);

  const buttonAction = () => {
    if (valid) {
      navigate("/home");
    }
  };

  return (
    <Container fullHeight>
      <Flex justify="between" padding fullHeight column>
        <Flex fullHeight column>
          <h1 className="text-center fw-bold">Log in</h1>
          <h5 className="mb-4 text-center">Fill the form to log in</h5>
          <Card>
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              name="email"
              onChangeText={handleChange}
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              name="password"
              onChangeText={handleChange}
            />
          </Card>
          <Flex justify="between" align="center" row>
            <h6 className="text-center mt-3">Register Now</h6>
            <h6 className="text-center mt-3 text-muted fw-normal">
              Forgot Password
            </h6>
          </Flex>
        </Flex>
        <Button
          title="Log in"
          block
          radius
          disabled={!valid}
          style={{ marginBottom: 15 }}
          onClick={() => buttonAction()}
        />
      </Flex>
    </Container>
  );
}
