import React, { useEffect, useRef } from "react";
import "./Modal.css";
const Modal = ({ show, setShow }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }
  }, [show]);
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShow(false);
      document.body.style.overflow = "unset";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    alert(JSON.stringify(formData));
  };
  return (
    <div
      style={{ display: `${show ? "flex" : "none"}` }}
      ref={modalRef}
      onClick={closeModal}
      className="modal"
    >
      <form className="modalForm" onSubmit={handleSubmit}>
        <div className="modalForm__inputField">
          <label htmlFor="name">Name</label>
          <input name="name" type="text" id="name" />
        </div>

        <div className="modalForm__inputField">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="email" />
        </div>

        <div className="modalForm__inputField">
          <label htmlFor="Covern">Cover note</label>
          <textarea name="covern" rows={8} id="Covern" />
        </div>

        <div className="modalForm__inputField">
          <label htmlFor="Covern">Upload your resume</label>
          <input name="file" type="file" name="" id="" />
        </div>

        <button className="modalForm__btn">Submit</button>
      </form>
    </div>
  );
};

export default Modal;
