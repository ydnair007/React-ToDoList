import { Modal } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import "./ToDoList.css";
import UpdateModal from "./UpdateModal";

const List = ({ list, removeList, uptlist, updateList }) => {
  const [readMore, setReadMore] = useState(false);
  const [checker, setChecker] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleOpen = () => {
    setIsUpdate(true);
  };

  const handleClose = () => {
    setIsUpdate(false);
  };

  const strike = useRef(null);
  const butt = useRef(null);
  const desp = list.desp;
  const applier = () => {
    if (checker) {
      strike.current.style.textDecoration = "line-through";
      butt.current.checked = true;
      strike.current.style.backgroundColor = "#d1d1d1";
    } else {
      strike.current.style.textDecoration = "none";
      butt.current.checked = false;
      strike.current.style.backgroundColor = "#fff";
    }
  };
  useEffect(() => {
    setChecker(list.checked);
  }, []);
  useEffect(() => {
    applier();
  }, [checker]);

  return (
    <div className="item" ref={strike}>
      <input
        type="checkbox"
        name="done"
        id="donep"
        ref={butt}
        onClick={() => {
          setChecker(!checker);
          uptlist = list;
          uptlist.checked = !uptlist.checked;
          uptlist = updateList(uptlist);
        }}
      />
      <section>
        <h3>{list.title}</h3>
        <p>
          {readMore ? desp : `${desp.substring(0, 50)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? " ...show less" : " ...read more"}
          </button>
        </p>
        <button className="bossbtn" onClick={() => removeList(list.lid)}>
          ❌ delete
        </button>
        <button className="bossbtn" onClick={handleOpen}>
          📥 update
        </button>
        <Modal
          open={isUpdate}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <UpdateModal
            list={list}
            updateList={updateList}
            handleClose={handleClose}
          ></UpdateModal>
        </Modal>
      </section>
    </div>
  );
};

export default List;
