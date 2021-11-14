import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Nav from "../../components/Nav";
import { getJobById } from "../../redux/slices/jobSlice";
import "./Detail.css";
import ReactHtmlParser from "react-html-parser";
import Modal from "../../components/Modal";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const job = useSelector((state) => state.job.job);
  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    dispatch(getJobById({ id, cancelTokenSource }));
    return () => {
      cancelTokenSource.cancel();
    };
  }, [dispatch, id]);
  return (
    <>
      <Modal show={show} setShow={setShow} />
      <div className="detail">
        <Nav />
        <div className="detailBody">
          <div>{ReactHtmlParser(job?.desc?.__cdata)}</div>

          <button className="applyBtn" onClick={() => setShow(true)}>
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
