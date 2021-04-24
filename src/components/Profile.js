import { Container } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "reactstrap";
import base_url from "../api/bootapi";

const Profile = (props) => {
  const pIn = useRef(null);
  const [isEdit, setIsEdit] = useState(true);
  const [newPass, setNewPass] = useState(props.tempUser.pass);
  const [baseUser, setBaseUser] = useState({});
  useEffect(() => {
    document.title = "To-Do | Profile";
    getData();
  }, []);

  const updatePass = (user) => {
    axios.put(`${base_url}/update`, user).then(
      (response) => {
        console.log("Password updated");
      },
      (error) => {
        console.log("Error updating Password");
      }
    );
  };

  const getData = () => {
    axios.get(`${base_url}/find/${props.tempUser.email}`).then(
      (response) => {
        setBaseUser(response.data);
      },
      (error) => {
        console.log("error");
      }
    );
  };
  return (
    <div style={{ paddingTop: "1rem" }}>
      <h1 style={{ fontWeight: 800, color: "#49a6e9" }}>Profile 🤸🏻‍♂️</h1>
      <br />
      <img
        className="img-proc"
        src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
        alt="proc"
      />
      <br />
      <br />
      <h3 style={{ textTransform: "none" }}>User : {props.tempUser.email}</h3>
      <Container>
        <Input
          type="password"
          ref={pIn}
          className="w-25 d-inline-block text-center"
          disabled={isEdit}
          value={newPass}
          onChange={(e) => {
            setNewPass(e.target.value);
          }}
        ></Input>
        <button className="procbtn" onClick={() => setIsEdit(!isEdit)}>
          <img
            style={{ width: "25px" }}
            className="ml-1 mb-2"
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg"
            alt="edit"
          />
        </button>
        <br />
        <Button
          className="mt-2"
          color="primary"
          onClick={() => {
            setBaseUser((baseUser.pass = newPass));
            updatePass(baseUser);
          }}
        >
          Update
        </Button>
      </Container>
    </div>
  );
};
export default Profile;
