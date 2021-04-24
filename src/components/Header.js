import React from "react";
import { toast } from "react-toastify";
import { Button } from "reactstrap";

const Header = (props) => {
  return (
    <div className="all">
      <section style={{ textAlign: "center", position: "sticky" }}>
        <span
          style={{
            fontSize: "3rem",
            fontWeight: "bolder",
          }}
        >
          📝 to-do
        </span>
        {props.tempUser.email ? (
          <Button
            style={{ float: "right", fontWeight: "bold" }}
            color="primary"
            className="mt-4 mr-5"
            onClick={() => {
              props.setTempUser({});
              toast.dark("Byee! 👋🏻❤️");
            }}
          >
            OUT!
          </Button>
        ) : (
          ""
        )}
      </section>
      <hr />
    </div>
  );
};

export default Header;
