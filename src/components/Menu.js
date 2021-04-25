import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

export default function Menu() {
  return (
    <ListGroup>
      <Link
        className="list-group-item list-group-item-action"
        style={{ color: "#49a6e9", backgroundColor: "#fff" }}
        tag="a"
        to="/"
        action
      >
        <h4>Home 🏠</h4>
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        style={{ color: "#49a6e9", backgroundColor: "#fff" }}
        tag="a"
        to="/profile"
        action
      >
        <h4>Profile ✔️</h4>
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        style={{ color: "#49a6e9", backgroundColor: "#fff" }}
        color="info"
        tag="a"
        to="/about"
        action
      >
        <h4>About Me 🤚🏻</h4>
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        style={{ color: "#49a6e9", backgroundColor: "#fff" }}
        color="info"
        tag="a"
        to="/contact"
        action
      >
        <h4>Contact 📧</h4>
      </Link>
    </ListGroup>
  );
}
