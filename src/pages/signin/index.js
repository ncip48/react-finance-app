import React from "react";
import { Button, Input, Container, Card } from "../../components";
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
      <div className="d-flex flex-column justify-content-between p-2 h-100">
        <div className="d-flex flex-column justify-content-center h-100">
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
        </div>
        <Button
          title="Log in"
          block
          radius
          disabled={!valid}
          style={{ marginBottom: 15 }}
          onClick={() => buttonAction()}
        />
      </div>
    </Container>
  );
}
