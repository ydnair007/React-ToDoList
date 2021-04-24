import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const Contact = (props) => {
  useEffect(() => {
    document.title = "To-Do | Contact";
  }, []);

  const uName = useRef(null);
  const uMess = useRef(null);

  return (
    <div style={{ paddingTop: "1rem" }}>
      <h1 style={{ fontWeight: 800, color: "#49a6e9" }}>Contact Form</h1>
      <Container style={{ marginLeft: "5rem" }}>
        <Form className="text-left bossy">
          <FormGroup className="w-75">
            <Label for="uname">Name: </Label>
            <Input
              placeholder="Name"
              name="uname"
              id="uname"
              ref={uName}
            ></Input>
            <Label>Email: </Label>
            <Input
              placeholder="Email"
              name="umail"
              id="umail"
              value={props.tempUser.email}
              disabled
            ></Input>
            <Label>Message: </Label>
            <Input
              placeholder="Message here"
              id="mess"
              name="mess"
              ref={uMess}
            ></Input>
            <Button
              color="primary"
              onClick={() => {
                window.Email.send({
                  Host: "smtp.gmail.com",
                  Username: "maxrulesnoway@gmail.com",
                  Password: "r2a2jdeheivka",
                  To: "ydnair007@gmail.com",
                  From: "maxrulesnoway@gmail.com",
                  Subject: "EvryThin: ",
                  Body:
                    "Name: " +
                    uName.current.value +
                    " Email: " +
                    props.tempUser.email +
                    " Message: " +
                    uMess.current.value,
                }).then(
                  (response) => {
                    toast.dark("Email Sent");
                  },
                  (error) => {
                    toast.error("Error Sending Email");
                  }
                );
              }}
            >
              Send
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
