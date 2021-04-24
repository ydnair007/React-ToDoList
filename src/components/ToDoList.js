import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import List from "./List";
import "./ToDoList.css";
import base_url from "../api/bootapi";
import { Modal } from "@material-ui/core";
import SimpleModal from "./SimpleModal";

const ToDoList = (props) => {
  const [list, setList] = useState([]);
  const [wantAdd, setWantAdd] = useState(false);
  let uptList = [];

  const handleOpen = () => {
    setWantAdd(true);
  };

  const handleClose = () => {
    setWantAdd(false);
  };

  const addList = (test) => {
    let newlist = [...list, test];
    let user = props.tempUser;
    user.lists = newlist;
    //console.log(user);
    axios.put(`${base_url}/user/update`, user).then(
      (response) => {
        toast.dark("Added List");
        getData();
      },
      (error) => {
        toast.error("Error Adding List");
      }
    );
  };

  const getData = () => {
    axios.get(`${base_url}/user/find/${props.tempUser.email}`).then(
      (response) => {
        setList(response.data.lists);
      },
      (error) => {
        toast.error("Error Getting Data");
      }
    );
  };

  const updateList = (uptlist) => {
    axios.put(`${base_url}/list/update`, uptlist).then(
      (response) => {
        toast.dark("Updated..");
      },
      (error) => {
        toast.error("Error Updating");
      }
    );
  };

  const removeList = (lid) => {
    axios.delete(`${base_url}/list/delete/${lid}`).then(
      (response) => {
        setList(list.filter((lists) => lists.lid !== lid));
        toast.dark("❌ Note Removed!");
      },
      (error) => {
        toast.error("Error Deleting");
        console.log("error deleting");
      }
    );
  };

  useEffect(() => {
    document.title = "To-Do | Home";
    getData();
  }, []);

  return (
    <div>
      <h2 style={{ paddingTop: "1rem" }}>
        List Section 👇
        <button
          className="bossbtn mt-0"
          style={{ float: "right", fontSize: "1.5rem" }}
          onClick={handleOpen}
        >
          ➕
        </button>
        <Modal
          open={wantAdd}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <SimpleModal
            addList={addList}
            list={list}
            setList={setList}
            handleClose={handleClose}
          ></SimpleModal>
        </Modal>
      </h2>
      {list.length > 0 ? (
        list.map((newList) => (
          <List
            key={newList.lid}
            list={newList}
            uptList={uptList}
            updateList={updateList}
            removeList={removeList}
          ></List>
        ))
      ) : (
        <h1>No List Present</h1>
      )}
    </div>
  );
};

export default ToDoList;
