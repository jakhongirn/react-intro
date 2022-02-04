import { useState } from "react";
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); //useState(false) false means it will not allow to execute this function when page renders. To execute it we should set it true.
  function deleteHandler() {
    setModalIsOpen(true);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop />}
    </div>
  );
}

export default Todo;