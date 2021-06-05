import { useState } from "react"; // UseState is function exposed by library 'react'
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  // Does initial state is set everytime this function Todo is called ???
  const [modalIsOpen, setModalIsOPen] = useState(false);

  function deleteHandler() {
    setModalIsOPen(true);
  }

  function closeModalHandler() {
    setModalIsOPen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {modalIsOpen && <Modal  onConfirm={closeModalHandler} onCancel={closeModalHandler}/>}
      {/*  pass onClick function as props  */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
