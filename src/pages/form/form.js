import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import './form.scss'

export default function index() {
  return (
    <React.Fragment>
      <div className="formContent">
        <Form>
          <FormGroup>
            <Label for="exampleEmail" hidden>
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="examplePassword" hidden>
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
            />
          </FormGroup>{" "}
          <Button>Submit</Button>
        </Form>
      </div>
    </React.Fragment>
  );
}
