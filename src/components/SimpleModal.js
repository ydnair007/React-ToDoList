import { Input, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Button, Label } from "reactstrap";
import "./SimpleModal.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    textAlign: "center",
    width: 500,
    marginRight: 70,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 5, 3),
  },
}));

const SimpleModal = (props) => {
  const [modalStyle] = useState(getModalStyle);
  const [uTitle, setUTitle] = useState("");
  const [uDesp, setUDesp] = useState("");
  let newList = {
    title: "",
    desp: "",
    checked: false,
  };
  const classes = useStyles();

  return (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" style={{ textAlign: "center" }}>
        Add New List
      </h2>
      <Label style={{ fontWeight: "600", fontSize: "1.5rem" }}>Title</Label>
      <br />
      <Input
        type="text"
        name="lTitle"
        id="lTitle"
        placeholder="Enter Title"
        onChange={(e) => setUTitle(e.target.value)}
      ></Input>
      <br />
      <Label style={{ fontWeight: "600", fontSize: "1.5rem" }} className="mt-2">
        Description
      </Label>
      <br />
      <Input
        type="textarea"
        name="lTitle"
        id="lTitle"
        placeholder="Enter Description"
        onChange={(e) => setUDesp(e.target.value)}
      ></Input>
      <br />
      <Button
        color="primary"
        onClick={() => {
          newList.title = uTitle;
          newList.desp = uDesp;
          props.addList(newList);
          props.handleClose();
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default SimpleModal;
