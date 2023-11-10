import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./login.scss";

export default function Login() {
  const [errorHandler, setErrorHandler] = useState({
    email: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
  });

  const handleEmail = (e) => {
    e.preventDefault();
    const regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(e.target.value)) {
      setErrorHandler({
        ...errorHandler,
        email: {
          error: true,
          mesagge: "Ingresa un maldito correo",
        },
      });
    } else {
      setErrorHandler({
        ...errorHandler,
        email: {
          error: false,
          mesagge: "",
        },
      });
    }
  };

  const handlePassword = (e) => {
    e.preventDefault();
    if (e.target.value.length < 8) {
      setErrorHandler({
        ...errorHandler,
        password: {
          error: true,
          mesagge: "La contraseña debe tener más de 8 carácteres",
        },
      });
    }
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!regexPassword.test(e.target.value)) {
      setErrorHandler({
        ...errorHandler,
        password: {
          error: true,
          mesagge: "Ingresa un contraseña correcta",
        },
      });
    } else {
      setErrorHandler({
        ...errorHandler,
        password: {
          error: false,
          mesagge: "",
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
  };

  return (
    <div className="container">
      {errorHandler.email.error && (
        <div className="alertBar error">{errorHandler.email.message}</div>
      )}
      {errorHandler.password.error && (
        <div className="alertBar error">{errorHandler.password.message}</div>
      )}
      <Form className="formContainer" onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            id={"email"}
            name="email"
            placeholder="Email"
            type="email"
            onBlur={handleEmail}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label>Password</Label>
          <Input
            id={"password"}
            name="password"
            placeholder="Password"
            type="password"
            onBlur={handlePassword}
          />
        </FormGroup>{" "}
        <Button type="submit">Iniciar sesión</Button>
      </Form>
    </div>
  );
}
