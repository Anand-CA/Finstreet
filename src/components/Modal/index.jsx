import React, { useEffect, useRef, useState } from "react";
import "./Modal.css";
const Modal = ({ show, setShow }) => {
  const modalRef = useRef(null);

  const [values, setValues] = useState({
    name: "",
    email: "",
    coverNote: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

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

  return (
    <div
      style={{ display: `${show ? "flex" : "none"}` }}
      ref={modalRef}
      onClick={closeModal}
      className="modal"
    >
      <form className="modalForm">
        <div className="modalForm__inputField">
          <label htmlFor="name">Name</label>
          <input
            value={values.name}
            onChange={handleChange}
            name="name"
            type="text"
            id="name"
          />
        </div>

        <div className="modalForm__inputField">
          <label htmlFor="email">Email</label>
          <input
            value={values.email}
            onChange={handleChange}
            name="email"
            type="email"
            id="email"
          />
        </div>

        <div className="modalForm__inputField">
          <label htmlFor="Covern">Cover note</label>
          <textarea
            onChange={handleChange}
            style={{ resize: "none" }}
            type="text"
            name="covern"
            rows={8}
            id="Covern"
          />
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
